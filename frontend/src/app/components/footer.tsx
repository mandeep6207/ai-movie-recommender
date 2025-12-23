export default function Footer() {
  return (
    <footer className="w-screen bg-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-14 grid grid-cols-1 md:grid-cols-4 gap-10">

        <div>
          <h3 className="text-white text-lg font-semibold mb-3">
            AI Movie Recommender
          </h3>
          <p className="text-sm leading-relaxed">
            An intelligent movie recommendation system powered by Machine Learning.
            Discover movies you’ll love across Bollywood, Hollywood, South Indian
            and Animated cinema.
          </p>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Purpose</h4>
          <ul className="text-sm space-y-2">
            <li>Personalized Recommendations</li>
            <li>Content-Based ML Model</li>
            <li>Academic + Practical Project</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Features</h4>
          <ul className="text-sm space-y-2">
            <li>Top-10 Similar Movies</li>
            <li>Clean Netflix-like UI</li>
            <li>Fast AI Suggestions</li>
          </ul>
        </div>

        <div>
          <h4 className="text-white font-semibold mb-3">Contact</h4>
          <p className="text-sm">Developer: Team Achiever </p>
          <p className="text-sm">Email: achiever@example.com</p>
          <p className="text-sm">Project: AI Movie Recommender</p>
        </div>
      </div>

      <div className="border-t border-gray-800 text-center py-4 text-sm text-gray-500">
        © {new Date().getFullYear()} AI Movie Recommender • All Rights Reserved
      </div>
    </footer>
  );
}
