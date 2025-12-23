# model.py
# ==============================
# CONTENT-BASED MOVIE RECOMMENDER
# (TEXT ONLY – NO POSTERS)
# ==============================

import pandas as pd
import ast
from sklearn.feature_extraction.text import TfidfVectorizer
from sklearn.metrics.pairwise import cosine_similarity

# ==============================
# LOAD DATA
# ==============================

movies = pd.read_csv("data/tmdb_5000_movies.csv")
credits = pd.read_csv("data/tmdb_5000_credits.csv")

# Merge datasets
movies = movies.merge(credits, on="title")

# ==============================
# HELPER FUNCTIONS
# ==============================

def convert(text):
    """
    Converts stringified list of dicts to list of names
    """
    result = []
    try:
        for item in ast.literal_eval(text):
            result.append(item["name"])
    except:
        pass
    return result


def get_director(text):
    """
    Extracts director name from crew
    """
    try:
        for item in ast.literal_eval(text):
            if item["job"] == "Director":
                return item["name"]
    except:
        pass
    return ""


# ==============================
# DATA CLEANING
# ==============================

movies["genres"] = movies["genres"].apply(convert)
movies["keywords"] = movies["keywords"].apply(convert)
movies["cast"] = movies["cast"].apply(lambda x: convert(x)[:3])
movies["director"] = movies["crew"].apply(get_director)

movies["overview"] = movies["overview"].fillna("")
movies["release_date"] = movies["release_date"].fillna("")
movies["original_language"] = movies["original_language"].fillna("")
movies["vote_average"] = movies["vote_average"].fillna(0)
movies["runtime"] = movies["runtime"].fillna(0)

# ==============================
# CREATE TAGS (TEXT FEATURES)
# ==============================

movies["tags"] = (
    movies["overview"] + " " +
    movies["genres"].apply(lambda x: " ".join(x)) + " " +
    movies["keywords"].apply(lambda x: " ".join(x)) + " " +
    movies["cast"].apply(lambda x: " ".join(x)) + " " +
    movies["director"]
)

# ==============================
# VECTORIZE TEXT
# ==============================

tfidf = TfidfVectorizer(
    stop_words="english",
    max_features=5000
)

vectors = tfidf.fit_transform(movies["tags"])

# ==============================
# COSINE SIMILARITY
# ==============================

similarity = cosine_similarity(vectors)

# ==============================
# RECOMMEND FUNCTION (FINAL)
# ==============================

def recommend(movie_name, top_n=10):
    """
    Takes movie name as input
    Returns top N similar movies (TEXT ONLY)
    """

    movie_name = movie_name.lower()

    # Find closest matching title
    matched = movies[movies["title"].str.lower().str.contains(movie_name)]

    if matched.empty:
        return []

    index = matched.index[0]

    distances = list(enumerate(similarity[index]))
    distances = sorted(distances, key=lambda x: x[1], reverse=True)

    recommendations = []

    for i in distances[1:]:
        movie = movies.iloc[i[0]]

        recommendations.append({
            "title": movie["title"],
            "language": movie["original_language"],
            "rating": round(float(movie["vote_average"]), 1),
            "release_date": movie["release_date"],
            "runtime": int(movie["runtime"]),
            "overview": movie["overview"]
        })

        if len(recommendations) == top_n:
            break

    return recommendations
