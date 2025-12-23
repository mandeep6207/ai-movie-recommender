import requests

API_KEY = "42c287e4f064a27fa8b1a1978819aca7"
MOVIES = [
    "Dangal", "PK", "Sholay", "3 Idiots", "Kantara",
    "Baahubali", "KGF", "Pushpa", "RRR", "Eega"
]

def check_poster(movie):
    url = "https://api.themoviedb.org/3/search/movie"
    params = {"api_key": API_KEY, "query": movie}
    res = requests.get(url, params=params).json()

    if res["results"] and res["results"][0]["poster_path"]:
        poster = "https://image.tmdb.org/t/p/w500" + res["results"][0]["poster_path"]
        print(f"✅ {movie} → POSTER OK")
        print(poster)
    else:
        print(f"❌ {movie} → NO POSTER")

for m in MOVIES:
    check_poster(m)
