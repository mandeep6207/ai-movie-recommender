import { useNavigate } from "react-router-dom";
import { Film } from "lucide-react";

export default function Header() {
  const navigate = useNavigate();

  return (
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

        {/* ACTIONS */}
        <div className="flex gap-3">
          <button
            className="px-3 py-1 rounded hover:bg-gray-100"
            onClick={() => navigate("/")}
            aria-label="Home"
          >
            Home
          </button>

          <button
            className="px-3 py-1 rounded border border-gray-300 hover:bg-gray-50"
            onClick={() => navigate("/preferences")}
            aria-label="Preferences"
          >
            Preferences
          </button>
        </div>
      </div>
    </nav>
  );
}
