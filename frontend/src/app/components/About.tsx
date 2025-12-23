import { Film, Brain, Database, Sparkles } from "lucide-react";

export default function About() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-5xl mx-auto px-6 py-16">

        <h1 className="text-4xl font-bold mb-6 flex items-center gap-2">
          <Film className="text-blue-600" />
          About This Project
        </h1>

        <p className="text-gray-600 text-lg mb-10">
          This AI Movie Recommendation System helps users discover movies
          based on content similarity and intelligent analysis.
        </p>

        {/* PURPOSE */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Sparkles className="text-blue-500" />
            Purpose
          </h2>
          <p className="text-gray-600">
            The goal of this project is to provide personalized movie
            recommendations using Machine Learning instead of random suggestions.
          </p>
        </section>

        {/* FEATURES */}
        <section className="mb-10">
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Brain className="text-blue-500" />
            Key Features
          </h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>AI-based movie recommendations</li>
            <li>Netflix-style dashboard UI</li>
            <li>Movie details with posters & metadata</li>
            <li>Fast & scalable backend</li>
          </ul>
        </section>

        {/* TECH STACK */}
        <section>
          <h2 className="text-2xl font-semibold mb-3 flex items-center gap-2">
            <Database className="text-blue-500" />
            Tech Stack
          </h2>
          <ul className="list-disc ml-6 text-gray-600 space-y-2">
            <li>Frontend: React + TypeScript + Tailwind CSS</li>
            <li>Backend: Flask (Python)</li>
            <li>ML: TF-IDF + Cosine Similarity</li>
            <li>API: TMDB</li>
          </ul>
        </section>

      </div>
    </div>
  );
}
