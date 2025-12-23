import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Card } from "../components/ui/card";

type Movie = {
  title: string;
  overview: string;
  rating: number;
  release_date: string;
  runtime: number;
  language: string;
  poster?: string | null;
};

/* 🎬 DEFAULT CINEMATIC POSTER */
const DEFAULT_POSTER =
  "https://images.unsplash.com/photo-1489599849927-2ee91cede3ba?auto=format&fit=crop&w=600&q=80";

export default function RecommendResult() {
  const { movie } = useParams<{ movie: string }>();
  const [movies, setMovies] = useState<Movie[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!movie) {
      setError("Movie name not provided");
      setLoading(false);
      return;
    }

    fetch(
      `http://127.0.0.1:5000/recommend?movie=${encodeURIComponent(movie)}`
    )
      .then((res) => {
        if (!res.ok) throw new Error("Backend error");
        return res.json();
      })
      .then((data) => {
        setMovies(data.recommended_movies || []);
        setLoading(false);
      })
      .catch(() => {
        setError("Failed to fetch recommendations");
        setLoading(false);
      });
  }, [movie]);

  if (loading) {
    return <p className="text-center mt-16 text-lg">Loading recommendations...</p>;
  }

  if (error) {
    return <p className="text-center mt-16 text-red-500">{error}</p>;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-14">
      <h1 className="text-5xl font-bold mb-12">
        🎯 Movies Similar to{" "}
        <span className="text-blue-600">"{movie}"</span>
      </h1>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
        {movies.map((m, i) => (
          <Card
            key={i}
            className="flex gap-8 p-8 hover:shadow-2xl transition-all duration-300"
          >
            {/* 🎬 BIG POSTER */}
            <img
              src={m.poster || DEFAULT_POSTER}
              alt={m.title}
              className="w-48 h-72 object-cover rounded-xl"
            />

            {/* 🎥 MOVIE INFO */}
            <div className="flex flex-col justify-between">
              <div>
                <h2 className="text-3xl font-semibold mb-4">
                  {m.title}
                </h2>

                <p className="text-gray-700 text-base leading-relaxed mb-6">
                  {m.overview ||
                    "A visually stunning cinematic experience filled with emotion, suspense, and unforgettable storytelling that keeps you engaged from start to finish."}
                </p>
              </div>

              <div className="flex flex-wrap gap-6 text-base text-gray-600">
                <span>⭐ Rating: {m.rating}</span>
                <span>📅 {m.release_date}</span>
                <span>⏱ {m.runtime} min</span>
                <span>🌐 {m.language.toUpperCase()}</span>
              </div>
            </div>
          </Card>
        ))}
      </div>
    </div>
  );
}
