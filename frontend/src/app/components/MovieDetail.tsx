import { useParams, useNavigate } from "react-router-dom";
import { allMovies } from "../data/moviesData";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import {
  ArrowLeft,
  Play,
  Clock,
  Star,
  Film,
  Users,
} from "lucide-react";
import { motion } from "motion/react";

export default function MovieDetail() {
  const { id } = useParams();
  const navigate = useNavigate();

  const movie = allMovies.find(
    (m) =>
      m.title.toLowerCase() ===
      decodeURIComponent(id || "").toLowerCase()
  );

  if (!movie) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <h1 className="text-2xl">Movie not found</h1>
      </div>
    );
  }

  /* ===== MOCK EXTRA DETAILS ===== */
  const runtime = "2h 30m";
  const rating = "8.4 / 10";
  const cast = [
    "Lead Actor",
    "Lead Actress",
    "Supporting Actor",
    "Supporting Actress",
  ];

  /* ===== RELATED MOVIES (MIXED) ===== */
  const relatedMovies = allMovies
    .filter((m) => m.title !== movie.title)
    .sort(() => 0.5 - Math.random())
    .slice(0, 10);

  return (
    <div className="min-h-screen bg-gray-50">
      {/* NAVBAR */}
      <nav className="bg-white border-b sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
          <Button
            variant="ghost"
            onClick={() => navigate(-1)}
            className="gap-2"
          >
            <ArrowLeft size={18} /> Back
          </Button>
        </div>
      </nav>

      {/* MAIN CONTENT */}
      <div className="max-w-7xl mx-auto px-4 py-10 grid md:grid-cols-3 gap-10">
        {/* POSTER */}
        <div>
          <img
            src={movie.image}
            alt={movie.title}
            className="rounded-xl shadow-lg w-full max-w-sm mx-auto"
          />
        </div>

        {/* DETAILS */}
        <div className="md:col-span-2 space-y-6">
          <h1 className="text-4xl font-bold">{movie.title}</h1>

          <div className="flex flex-wrap gap-6 text-gray-600">
            <span className="flex items-center gap-2">
              <Clock size={16} /> {runtime}
            </span>
            <span className="flex items-center gap-2">
              <Star size={16} /> {rating}
            </span>
            <span className="flex items-center gap-2">
              <Film size={16} /> {movie.year}
            </span>
            <span>{movie.language}</span>
          </div>

          {/* GENRES */}
          <div className="flex flex-wrap gap-2">
            {movie.genre.map((g, i) => (
              <span
                key={i}
                className="px-3 py-1 text-sm rounded-full bg-blue-100 text-blue-700"
              >
                {g}
              </span>
            ))}
          </div>

          {/* DESCRIPTION */}
          <Card className="p-5">
            <h3 className="text-lg font-semibold mb-2">
              About the movie
            </h3>
            <p className="text-gray-700 leading-relaxed">
              {movie.description}
            </p>
          </Card>

          {/* CAST */}
          <Card className="p-5">
            <h3 className="text-lg font-semibold mb-3 flex items-center gap-2">
              <Users size={18} /> Cast
            </h3>
            <div className="flex gap-4 flex-wrap">
              {cast.map((c, i) => (
                <div
                  key={i}
                  className="px-4 py-2 bg-gray-100 rounded-lg text-sm"
                >
                  {c}
                </div>
              ))}
            </div>
          </Card>

          {/* ACTIONS */}
          <div className="flex gap-4 pt-4">
            <Button size="lg" className="gap-2">
              <Play /> Watch Now
            </Button>
            <Button size="lg" variant="outline">
              Trailer
            </Button>
          </div>
        </div>
      </div>

      {/* 🔥 RELATED MOVIES SECTION */}
      <div className="max-w-7xl mx-auto px-4 pb-16">
        <h2 className="text-2xl font-semibold mb-6">
          You may also like
        </h2>

        <div className="flex gap-6 overflow-x-auto pb-4">
          {relatedMovies.map((m, i) => (
            <motion.div
              key={i}
              whileHover={{ scale: 1.06 }}
              className="min-w-[180px] cursor-pointer"
              onClick={() =>
                navigate(`/movie/${encodeURIComponent(m.title)}`)
              }
            >
              <Card className="overflow-hidden">
                <img
                  src={m.image}
                  className="h-64 w-full object-cover"
                />
                <div className="p-3">
                  <h3 className="text-sm font-medium truncate">
                    {m.title}
                  </h3>
                  <p className="text-xs text-gray-500">
                    {m.language}
                  </p>
                </div>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
