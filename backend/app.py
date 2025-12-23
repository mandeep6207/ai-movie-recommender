from flask import Flask, request, jsonify
from flask_cors import CORS
import requests
from model import recommend   # 🔥 ML recommend function

# ===============================
# APP INIT
# ===============================
app = Flask(__name__)
CORS(app)

# ===============================
# TMDB CONFIG
# ===============================
TMDB_API_KEY = "42c287e4f064a27fa8b1a1978819aca7"   # 🔑 YAHAN API KEY DALO
TMDB_SEARCH_URL = "https://api.themoviedb.org/3/search/movie"
TMDB_IMAGE_BASE = "https://image.tmdb.org/t/p/w500"

HEADERS = {
    "User-Agent": "Mozilla/5.0 (Movie-Recommendation-App)"
}

# ===============================
# TMDB FETCH FUNCTION
# ===============================
def fetch_movie_from_tmdb(title):
    try:
        params = {
            "api_key": TMDB_API_KEY,
            "query": title,
            "include_adult": False,
            "language": "en-US"
        }

        response = requests.get(
            TMDB_SEARCH_URL,
            params=params,
            headers=HEADERS,
            timeout=10
        )

        response.raise_for_status()
        data = response.json()

        if not data.get("results"):
            return None

        # 🔥 IMPORTANT FIX: poster_path wala movie lo
        movie = None
        for m in data["results"]:
            if m.get("poster_path"):
                movie = m
                break

        if not movie:
            return None

        return {
            "poster": TMDB_IMAGE_BASE + movie["poster_path"],
            "overview": movie.get("overview", "")
        }

    except Exception as e:
        print("TMDB ERROR:", e)
        return None


# ===============================
# HEALTH CHECK
# ===============================
@app.route("/", methods=["GET"])
def home():
    return jsonify({"status": "Backend is running ✅"})


# ===============================
# RECOMMEND ENDPOINT
# ===============================
@app.route("/recommend", methods=["GET"])
def recommend_movies():
    movie_name = request.args.get("movie")

    if not movie_name:
        return jsonify({"error": "Movie name required"}), 400

    # 🔹 1️⃣ ML recommendations (TEXT ONLY)
    ml_results = recommend(movie_name, top_n=10)

    final_results = []

    # 🔹 2️⃣ TMDB poster + overview merge
    for m in ml_results:
        tmdb_data = fetch_movie_from_tmdb(m["title"])

        final_results.append({
            "title": m["title"],
            "language": m.get("language"),
            "overview": tmdb_data["overview"] if tmdb_data else m.get("overview"),
            "rating": m.get("rating"),
            "release_date": m.get("release_date"),
            "runtime": m.get("runtime"),
            "poster": tmdb_data["poster"] if tmdb_data else None
        })

    return jsonify({
        "input_movie": movie_name,
        "recommended_movies": final_results
    })


# ===============================
# RUN SERVER
# ===============================
if __name__ == "__main__":
    app.run(debug=True)
