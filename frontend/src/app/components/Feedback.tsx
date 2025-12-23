import { useState } from "react";
import { Star } from "lucide-react";

export default function Feedback() {
  const [rating, setRating] = useState(0);
  const [message, setMessage] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-xl mx-auto px-6 py-16">

        <h1 className="text-3xl font-bold mb-6">Feedback</h1>

        {submitted ? (
          <div className="bg-green-50 border border-green-200 p-6 rounded-lg text-center">
            <h2 className="text-xl font-semibold text-green-700">
              Thank You! 🙌
            </h2>
            <p className="text-green-600 mt-2">
              Your feedback helps us improve this project.
            </p>
          </div>
        ) : (
          <form
            onSubmit={handleSubmit}
            className="bg-white shadow rounded-lg p-6 space-y-6"
          >
            {/* RATING */}
            <div>
              <label className="block font-medium mb-2">
                Rate your experience
              </label>
              <div className="flex gap-2">
                {[1, 2, 3, 4, 5].map((num) => (
                  <Star
                    key={num}
                    className={`cursor-pointer ${
                      num <= rating
                        ? "text-yellow-400 fill-yellow-400"
                        : "text-gray-300"
                    }`}
                    onClick={() => setRating(num)}
                  />
                ))}
              </div>
            </div>

            {/* MESSAGE */}
            <div>
              <label className="block font-medium mb-2">
                Suggestions / Feedback
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="w-full border rounded-md p-3"
                rows={4}
                placeholder="Write your feedback here..."
                required
              />
            </div>

            {/* SUBMIT */}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700"
            >
              Submit Feedback
            </button>
          </form>
        )}
      </div>
    </div>
  );
}
