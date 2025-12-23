import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { motion } from "motion/react";
import { Card } from "./ui/card";
import { Button } from "./ui/button";
import { Film, Target, ChevronRight } from "lucide-react";
import Footer from "./footer";

/* ================= TYPES ================= */

type Movie = {
  title: string;
  poster: string;
  language: string;
};

/* ================= MOVIE DATA ================= */

/* 🎬 Bollywood (15) */
const bollywood: Movie[] = [
  { title: "Dangal", poster: "https://image.tmdb.org/t/p/w500/cJRPOLEexI7qp2DKtFfCh7YaaUG.jpg", language: "hi" },
  { title: "3 Idiots", poster: "https://image.tmdb.org/t/p/w500/66A9MqXOyVFCssoloscw79z8Tew.jpg", language: "hi" },
  { title: "Bajrangi Bhaijaan", poster: "https://image.tmdb.org/t/p/w500/6XqQ6fOkY5jWgRRMkGdKHwhTn98.jpg", language: "hi" },
  { title: "Andhadhun", poster: "https://image.tmdb.org/t/p/w500/dy3K6hNvwE05siGgiLJcEiwgpdO.jpg", language: "hi" },
  { title: "Drishyam 2", poster: "https://image.tmdb.org/t/p/w500/8RJBCUGE27LX06tAES4jTELN0KA.jpg", language: "hi" },
  { title: "Sanju", poster: "https://image.tmdb.org/t/p/w500/q1wkN4VQuBTj1AeyTLLz2w6awMA.jpg", language: "hi" },
  { title: "Padmaavat", poster: "https://image.tmdb.org/t/p/w500/5kk71s8Vmvt8XQOojevhTA5QcB0.jpg", language: "hi" },
  { title: "War", poster: "https://image.tmdb.org/t/p/w500/yUtaHkL2SDIAZhRApZAyQrAXygn.jpg", language: "hi" },
  { title: "Pathaan", poster: "https://image.tmdb.org/t/p/w500/arf00BkwvXo0CFKbaD9OpqdE4Nu.jpg", language: "hi" },
  { title: "Jawan", poster: "https://image.tmdb.org/t/p/w500/jFt1gS4BGHlK8xt76Y81Alp4dbt.jpg", language: "hi" },
  { title: "Brahmastra", poster: "https://image.tmdb.org/t/p/w500/x61qdvHIsr9U53FwoLVDQqAGur0.jpg", language: "hi" },
  { title: "Queen", poster: "https://image.tmdb.org/t/p/w500/vKLp0X2RQOuA31R3AdaYtDdKIPK.jpg", language: "hi" },
  { title: "Kesari", poster: "https://image.tmdb.org/t/p/w500/exPYBkalpXZSaTGlO8l9mr78Tiw.jpg", language: "hi" },
  { title: "Tanhaji", poster: "https://image.tmdb.org/t/p/w500/fZhgcUVwV7ocglL5XDq4ygsfXqD.jpg", language: "hi" },
  { title: "Lagaan", poster: "https://image.tmdb.org/t/p/w500/yNX9lFRAFeNLNRIXdqZK9gYrYKa.jpg", language: "hi" },
];

/* 🔥 South Indian (15) */
const south: Movie[] = [
  { title: "RRR", poster: "https://image.tmdb.org/t/p/w500/u0XUBNQWlOvrh0Gd97ARGpIkL0.jpg", language: "hi" },
  { title: "Baahubali", poster: "https://image.tmdb.org/t/p/w500/9BAjt8nSSms62uOVYn1t3C3dVto.jpg", language: "hi" },
  { title: "Baahubali 2", poster: "https://image.tmdb.org/t/p/w500/21sC2assImQIYCEDA84Qh9d1RsK.jpg", language: "hi" },
  { title: "KGF", poster: "https://image.tmdb.org/t/p/w500/ex2zyM6LVd31h9TlAi9RaR7QARK.jpg", language: "hi" },
  { title: "KGF 2", poster: "https://image.tmdb.org/t/p/w500/khNVygolU0TxLIDWff5tQlAhZ23.jpg", language: "hi" },
  { title: "Kantara", poster: "https://image.tmdb.org/t/p/w500/zBvw25afDn93embB8L7FzvTT2xq.jpg", language: "hi" },
  { title: "Pushpa", poster: "https://image.tmdb.org/t/p/w500/759mIIerY4Njb8uPoj7AIXGSNh3.jpg", language: "hi" },
  { title: "Master", poster: "https://image.tmdb.org/t/p/w500/gxbwRHsQ2v6DQv28ttp7pIx7Utj.jpg", language: "hi" },
  { title: "Robot 2.0", poster: "https://image.tmdb.org/t/p/w500/yxS8ERf6HoFiGNNtbwov8BlTzJI.jpg", language: "hi" },
  { title: "Sivaji", poster: "https://image.tmdb.org/t/p/w500/yBvsYnhrrTs1ZgHQNQTSdVA6uo8.jpg", language: "hi" },
  { title: "Ala Vaikunthapurramuloo", poster: "https://image.tmdb.org/t/p/w500/2rzORJaegE2bbKNVkQXbZCeV0BP.jpg", language: "hi" },
  { title: "Jai Bhim", poster: "https://image.tmdb.org/t/p/w500/ehybiOtBUtrMkmtB39zQEtq1Jie.jpg", language: "hi" },
  { title: "Eega", poster: "https://image.tmdb.org/t/p/w500/xbCPJejbJgRIuOwUzJqcBUjCbFB.jpg", language: "hi" },
  { title: "Asuran", poster: "https://image.tmdb.org/t/p/w500/Elnp3XrAlMM30dil8rbL7D9XeP.jpg", language: "hi" },
  { title: "Kaithi", poster: "https://image.tmdb.org/t/p/w500/mxvOvom5zKRp4WPURKrhjoatt4P.jpg", language: "hi" },
];

/* 🎥 Hollywood (15) */
const hollywood: Movie[] = [
  { title: "Avatar", poster: "https://image.tmdb.org/t/p/w500/6EiRUJpuoeQPghrs3YNktfnqOVh.jpg", language: "en" },
  { title: "Inception", poster: "https://image.tmdb.org/t/p/w500/9gk7adHYeDvHkCSEqAvQNLV5Uge.jpg", language: "en" },
  { title: "Interstellar", poster: "https://image.tmdb.org/t/p/w500/gEU2QniE6E77NI6lCU6MxlNBvIx.jpg", language: "en" },
  { title: "The Matrix", poster: "https://image.tmdb.org/t/p/w500/f89U3ADr1oiB1s9GkdPOEpXUk5H.jpg", language: "en" },
  { title: "Titanic", poster: "https://image.tmdb.org/t/p/w500/9xjZS2rlVxm8SFx8kPC3aIGCOYQ.jpg", language: "en" },
  { title: "The Dark Knight", poster: "https://image.tmdb.org/t/p/w500/qJ2tW6WMUDux911r6m7haRef0WH.jpg", language: "en" },
  { title: "Forrest Gump", poster: "https://image.tmdb.org/t/p/w500/arw2vcBveWOVZr6pxd9XTd1TdQa.jpg", language: "en" },
  { title: "Joker", poster: "https://image.tmdb.org/t/p/w500/udDclJoHjfjb8Ekgsd4FDteOkCU.jpg", language: "en" },
  { title: "Gladiator", poster: "https://image.tmdb.org/t/p/w500/ehGpN04mLJIrSnxcZBMvHeG0eDc.jpg", language: "en" },
  { title: "Avengers Endgame", poster: "https://image.tmdb.org/t/p/w500/or06FN3Dka5tukK1e9sl16pB3iy.jpg", language: "en" },
  { title: "Iron Man", poster: "https://image.tmdb.org/t/p/w500/78lPtwv72eTNqFW9COBYI0dWDJa.jpg", language: "en" },
  { title: "Doctor Strange", poster: "https://image.tmdb.org/t/p/w500/uGBVj3bEbCoZbDjjl9wTxcygko1.jpg", language: "en" },
  { title: "Deadpool", poster: "https://image.tmdb.org/t/p/w500/fSRb7vyIP8rQpL0I47P3qUsEKX3.jpg", language: "en" },
  { title: "Gravity", poster: "https://image.tmdb.org/t/p/w500/kZ2nZw8D681aphje8NJi8EfbL1U.jpg", language: "en" },
  { title: "Fight Club", poster: "https://image.tmdb.org/t/p/w500/bptfVGEQuv6vDTIMVCHjJ9Dz8PX.jpg", language: "en" },
];

/* 🧸 Animated (15 – VERIFIED) */
const animated: Movie[] = [
  { title: "Toy Story", poster: "https://image.tmdb.org/t/p/w500/uXDfjJbdP4ijW5hWSBrPrlKpxab.jpg", language: "en" },
  { title: "Finding Nemo", poster: "https://image.tmdb.org/t/p/w500/eHuGQ10FUzK1mdOY69wF5pGgEf5.jpg", language: "en" },
  { title: "The Lion King", poster: "https://image.tmdb.org/t/p/w500/2bXbqYdUdNVa8VIWXVfclP2ICtT.jpg", language: "en" },
  { title: "Frozen", poster: "https://image.tmdb.org/t/p/w500/kgwjIb2JDHRhNk13lmSxiClFjVk.jpg", language: "en" },
  { title: "Up", poster: "https://image.tmdb.org/t/p/w500/mFvoEwSfLqbcWwFsDjQebn9bzFe.jpg", language: "en" },
  { title: "Coco", poster: "https://image.tmdb.org/t/p/w500/gGEsBPAijhVUFoiNpgZXqRVWJt2.jpg", language: "en" },
  { title: "Inside Out", poster: "https://image.tmdb.org/t/p/w500/lRHE0vzf3oYJrhbsHXjIkF4Tl5A.jpg", language: "en" },
  { title: "Kung Fu Panda", poster: "https://image.tmdb.org/t/p/w500/wWt4JYXTg5Wr3xBW2phBrMKgp3x.jpg", language: "en" },
  { title: "Shrek", poster: "https://image.tmdb.org/t/p/w500/iB64vpL3dIObOtMZgX3RqdVdQDc.jpg", language: "en" },
  { title: "Zootopia", poster: "https://image.tmdb.org/t/p/w500/hlK0e0wAQ3VLuJcsfIYPvb4JVud.jpg", language: "en" },
  { title: "Wall-E", poster: "https://image.tmdb.org/t/p/w500/hbhFnRzzg6ZDmm8YAmxBnQpQIPh.jpg", language: "en" },
  { title: "How to Train Your Dragon", poster: "https://image.tmdb.org/t/p/w500/ygGmAO60t8GyqUo9xYeYxSZAR3b.jpg", language: "en" },
  { title: "The Incredibles", poster: "https://image.tmdb.org/t/p/w500/2LqaLgk4Z226KkgPJuiOQ58wvrm.jpg", language: "en" },
  { title: "Despicable Me", poster: "https://image.tmdb.org/t/p/w500/9lOloREsAhBu0pEtU0BgeR1rHyo.jpg", language: "en" },
  { title: "Ratatouille", poster: "https://image.tmdb.org/t/p/w500/t3vaWRPSf6WjDSamIkKDs1iQWna.jpg", language: "en" },
];

/* ================= COMPONENT ================= */

export default function RecommendationDashboard() {
  const navigate = useNavigate();
  const [query, setQuery] = useState("Avatar");

  /* -------- Movie Row -------- */
  const MovieRow = ({ title, movies }: { title: string; movies: Movie[] }) => (
    <div className="mb-20">
      <h2 className="text-2xl mb-6 font-semibold">{title}</h2>

      <div className="flex gap-6 overflow-x-auto pb-4">
        {movies.map((movie, i) => (
          <motion.div key={i} whileHover={{ scale: 1.06 }}>
            <Card
              className="w-56 cursor-pointer"
              onClick={() =>
                navigate(`/movie/${encodeURIComponent(movie.title)}`)
              }
            >
              <img
                src={movie.poster}
                alt={movie.title}
                className="h-80 w-full object-cover rounded-t"
              />
              <div className="p-3">
                <h3 className="text-sm font-medium">{movie.title}</h3>
              </div>
            </Card>
          </motion.div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b from-gray-50 to-white">

      {/* ================= NAVBAR ================= */}
      <nav className="border-b bg-white sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex justify-between items-center">

          {/* LOGO */}
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Film className="h-6 w-6 text-blue-600" />
            <span className="text-xl font-semibold">
              AI Movie Recommender
            </span>
          </div>

          {/* MENU */}
          <div className="flex items-center gap-6 text-sm">
            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/dashboard")}
            >
              Home
            </span>
            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/about")}
            >
              About
            </span>
            <span
              className="cursor-pointer hover:text-blue-600"
              onClick={() => navigate("/feedback")}
            >
              Feedback
            </span>

            <Button
              variant="outline"
              size="sm"
              onClick={() => navigate("/preferences")}
            >
              Preferences
            </Button>
          </div>
        </div>
      </nav>

      {/* ================= MAIN CONTENT ================= */}
      <main className="flex-grow">
        <div className="max-w-7xl mx-auto px-4 py-12">

          {/* HERO */}
          <Card className="p-10 mb-24 text-center border-blue-200 bg-blue-50">
            <h1 className="text-3xl mb-4 flex justify-center gap-2 font-semibold">
              <Target className="text-blue-600" />
              AI Movie Recommendation System
            </h1>

            <p className="text-gray-600 mb-6">
              Discover movies intelligently using Machine Learning
            </p>

            <div className="flex justify-center gap-4">
              <input
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="border px-4 py-2 rounded-md w-72"
                placeholder="Enter movie name"
              />
              <Button
                onClick={() =>
                  navigate(`/recommend/${encodeURIComponent(query)}`)
                }
              >
                Recommend
                <ChevronRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
          </Card>

          {/* MOVIE SECTIONS */}
          <MovieRow title="🎬 Bollywood Movies" movies={bollywood} />
          <MovieRow title="🔥 South Indian Movies" movies={south} />
          <MovieRow title="🎥 Hollywood Movies" movies={hollywood} />
          <MovieRow title="🧸 Animated Movies" movies={animated} />
        </div>
      </main>

      {/* ================= FOOTER ================= */}
      <Footer />
    </div>
  );
}