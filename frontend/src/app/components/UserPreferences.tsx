import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "motion/react";
import { Button } from "./ui/button";
import { Card } from "./ui/card";
import { Input } from "./ui/input";
import { Label } from "./ui/label";
import { Brain, ChevronRight, Film } from "lucide-react";
import { Badge } from "./ui/badge";

type Preferences = {
  name: string;
  age: string;
  location: string;
  languages: string[]; // stored as ML-friendly codes
  genres: string[];
  contentType: "movies" | "series";
};

export default function UserPreferences() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState<Preferences>({
    name: "",
    age: "",
    location: "",
    languages: [],
    genres: [],
    contentType: "movies",
  });

  // Display values (UI purpose)
  const availableLanguages = [
    "English",
    "Hindi",
    "Tamil",
    "Telugu",
    "Malayalam",
    "Kannada",
    "Marathi",
    "Bengali",
  ];

  const availableGenres = [
    "Action",
    "Drama",
    "Comedy",
    "Romance",
    "Thriller",
    "Sci-Fi",
    "Horror",
    "Mystery",
  ];

  // UI → ML language mapping
  const languageMap: Record<string, string> = {
    English: "en",
    Hindi: "hi",
    Tamil: "ta",
    Telugu: "te",
    Malayalam: "ml",
    Kannada: "kn",
    Marathi: "mr",
    Bengali: "bn",
  };

  const toggleSelection = (
    field: "languages" | "genres",
    value: string
  ) => {
    const mappedValue =
      field === "languages" ? languageMap[value] : value;

    setFormData((prev) => ({
      ...prev,
      [field]: prev[field].includes(mappedValue)
        ? prev[field].filter((item) => item !== mappedValue)
        : [...prev[field], mappedValue],
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    /**
     * 🔥 IMPORTANT (Viva Line)
     * Preferences are stored as structured ML features.
     * Currently used for demo; can be directly sent to backend ML API.
     */
    const cleanedData = {
      ...formData,
      name: formData.name.trim(),
      location: formData.location.trim(),
    };

    localStorage.setItem(
      "userPreferences",
      JSON.stringify(cleanedData)
    );

    navigate("/dashboard");
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* NAVBAR */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 h-16 flex items-center">
          <div
            className="flex items-center gap-2 cursor-pointer"
            onClick={() => navigate("/")}
          >
            <Film className="h-6 w-6 text-blue-600" />
            <span className="text-xl">AI Movie Recommender</span>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* HEADER */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 mb-4">
              <Brain className="h-4 w-4" />
              <span className="text-sm">AI Model Input</span>
            </div>
            <h1 className="text-4xl mb-4">
              Tell Us About Your Movie Taste
            </h1>
            <p className="text-gray-600 text-lg">
              These inputs are used by the AI recommendation model
            </p>
          </div>

          {/* FORM */}
          <Card className="p-8">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* BASIC INFO */}
              <div className="space-y-6">
                <h3 className="text-xl">
                  Basic Information (Optional)
                </h3>

                <div className="grid md:grid-cols-3 gap-6">
                  <div>
                    <Label>Name</Label>
                    <Input
                      value={formData.name}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          name: e.target.value,
                        })
                      }
                      placeholder="Your name"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label>Age</Label>
                    <Input
                      type="number"
                      value={formData.age}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          age: e.target.value,
                        })
                      }
                      placeholder="Age"
                      className="mt-1.5"
                    />
                  </div>

                  <div>
                    <Label>Location</Label>
                    <Input
                      value={formData.location}
                      onChange={(e) =>
                        setFormData({
                          ...formData,
                          location: e.target.value,
                        })
                      }
                      placeholder="City"
                      className="mt-1.5"
                    />
                  </div>
                </div>
              </div>

              {/* LANGUAGES */}
              <div>
                <h3 className="text-xl mb-1">
                  Preferred Languages
                </h3>
                <p className="text-sm text-gray-500 mb-3">
                  Used by AI to filter Bollywood / Hollywood content
                </p>

                <div className="flex flex-wrap gap-3">
                  {availableLanguages.map((lang) => (
                    <Badge
                      key={lang}
                      variant={
                        formData.languages.includes(languageMap[lang])
                          ? "default"
                          : "outline"
                      }
                      className="cursor-pointer px-4 py-2"
                      onClick={() =>
                        toggleSelection("languages", lang)
                      }
                    >
                      {lang}
                    </Badge>
                  ))}
                </div>
              </div>

              {/* GENRES */}
              <div>
                <h3 className="text-xl mb-1">Favorite Genres</h3>
                <p className="text-sm text-gray-500 mb-3">
                  Core feature for content-based ML recommendation
                </p>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {availableGenres.map((genre) => (
                    <Card
                      key={genre}
                      onClick={() =>
                        toggleSelection("genres", genre)
                      }
                      className={`p-4 cursor-pointer text-center transition-all ${
                        formData.genres.includes(genre)
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : "hover:border-gray-400"
                      }`}
                    >
                      {genre}
                    </Card>
                  ))}
                </div>
              </div>

              {/* CONTENT TYPE */}
              <div>
                <h3 className="text-xl mb-3">Content Type</h3>
                <div className="flex gap-4">
                  {["movies", "series"].map((type) => (
                    <Card
                      key={type}
                      onClick={() =>
                        setFormData({
                          ...formData,
                          contentType: type as
                            | "movies"
                            | "series",
                        })
                      }
                      className={`flex-1 p-6 text-center cursor-pointer transition-all ${
                        formData.contentType === type
                          ? "border-blue-500 bg-blue-50 shadow-md"
                          : "hover:border-gray-400"
                      }`}
                    >
                      {type === "movies"
                        ? "🎬 Movies"
                        : "📺 Web Series"}
                    </Card>
                  ))}
                </div>
              </div>

              {/* SUBMIT */}
              <div className="pt-6 border-t">
                <div className="bg-blue-50 border border-blue-200 rounded-lg p-4 mb-6">
                  <div className="flex gap-3">
                    <Brain className="h-5 w-5 text-blue-600" />
                    <p className="text-sm text-blue-900">
                      Your selections act as structured
                      <strong> ML input features</strong> for
                      recommendation generation.
                    </p>
                  </div>
                </div>

                <Button
                  type="submit"
                  size="lg"
                  className="w-full gap-2"
                  disabled={
                    formData.languages.length === 0 ||
                    formData.genres.length === 0
                  }
                >
                  Generate AI Recommendations
                  <ChevronRight className="h-4 w-4" />
                </Button>

                {(formData.languages.length === 0 ||
                  formData.genres.length === 0) && (
                  <p className="text-sm text-gray-500 mt-2 text-center">
                    Select at least one language and one genre
                  </p>
                )}
              </div>
            </form>
          </Card>
        </motion.div>
      </div>
    </div>
  );
}
