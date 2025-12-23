export default function Footer() {
  return (
    <footer className="mt-32 bg-gray-900 text-gray-300">
      <div className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-4 gap-10">
        
        {/* BRAND */}
        <div>
          <h2 className="text-xl font-semibold text-white mb-3">
            AI Movie Recommender
          </h2>
          <p className="text-sm leading-relaxed">
            An AI-powered movie recommendation platform that suggests
            personalized movies based on user interests and content similarity.
          </p>
        </div>

        {/* PURPOSE */}
        <div>
          <h3 className="text-white font-semibold mb-3">Purpose</h3>
          <ul className="space-y-2 text-sm">
            <li>• Smart AI-based recommendations</li>
            <li>• Content similarity engine</li>
            <li>• Clean Netflix-style UI</li>
            <li>• Hackathon-ready solution</li>
          </ul>
        </div>

        {/* FEATURES */}
        <div>
          <h3 className="text-white font-semibold mb-3">Features</h3>
          <ul className="space-y-2 text-sm">
            <li>• Movie detail pages</li>
            <li>• AI recommendation engine</li>
            <li>• Multiple genres & languages</li>
            <li>• Fast & responsive UI</li>
          </ul>
        </div>

        {/* CONTACT */}
        <div>
          <h3 className="text-white font-semibold mb-3">Contact</h3>
          <p className="text-sm">📧 support@aimovierec.com</p>
          <p className="text-sm mt-2">📍 India</p>
          <p className="text-sm mt-2">💬 Feedback welcomed</p>
        </div>
      </div>

      {/* BOTTOM BAR */}
      <div className="border-t border-gray-700 text-center py-4 text-sm">
        © {new Date().getFullYear()} AI Movie Recommender • All rights reserved
      </div>
    </footer>
  );
}
