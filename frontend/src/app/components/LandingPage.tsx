import { useNavigate } from 'react-router-dom';
import { motion } from 'motion/react';
import { Button } from './ui/button';
import { Card } from './ui/card';
import { Brain, Target, Zap, Globe, TrendingUp, Sparkles, ChevronRight, Film } from 'lucide-react';

export default function LandingPage() {
  const navigate = useNavigate();

  const features = [
    {
      icon: Target,
      title: 'Content-Based Movie Recommendation',
      description: 'Recommends movies based on genre, language, description, and similarity analysis.'
    },
    {
      icon: Brain,
      title: 'User Preference Analysis',
      description: 'Learns user interests such as favorite genres, languages, and movie types.'
    },
    {
      icon: Zap,
      title: 'Similar Movie Matching',
      description: 'Uses similarity scoring to recommend movies similar to the selected one.'
    },
    {
      icon: Globe,
      title: 'Multi-Language Movie Intelligence',
      description: 'Supports Indian cinema and global content across multiple languages.'
    },
    {
      icon: TrendingUp,
      title: 'Scalable ML Architecture',
      description: 'Designed to support future collaborative filtering and suggestion models.'
    }
  ];

  const futureFeatures = [
    {
      title: 'Movie Suggestion Model',
      subtitle: 'Collaborative Filtering',
      description: 'Advanced user-to-user comparison for personalized suggestions'
    },
    {
      title: 'User Behavior Tracking',
      subtitle: 'ML-Powered Analytics',
      description: 'Real-time learning from viewing patterns and preferences'
    },
    {
      title: 'Real-Time Updates',
      subtitle: 'Dynamic Recommendations',
      description: 'Continuously evolving suggestions based on latest interactions'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      {/* Navigation */}
      <nav className="border-b bg-white/80 backdrop-blur-sm sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <Film className="h-6 w-6 text-blue-600" />
              <span className="text-xl">AI Movie Recommender</span>
            </div>
            <div className="flex gap-4">
              <Button variant="ghost" onClick={() => navigate('/preferences')}>
                Get Started
              </Button>
              <Button onClick={() => navigate('/dashboard')}>
                Try Demo
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-4xl mx-auto"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-50 text-blue-700 mb-6">
            <Sparkles className="h-4 w-4" />
            <span className="text-sm">Powered by Machine Learning</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl mb-6 bg-gradient-to-r from-gray-900 to-gray-600 bg-clip-text text-transparent">
            AI-Powered Movie Recommendation Platform
          </h1>
          
          <p className="text-xl text-gray-600 mb-4">
            Smart movie recommendations based on user preferences, genres, and behavior
          </p>
          
          <p className="text-lg text-gray-500 mb-10 max-w-3xl mx-auto">
            An intelligent system that uses machine learning to recommend movies across Indian and global cinema.
          </p>
          
          <div className="flex flex-wrap gap-4 justify-center">
            <Button size="lg" onClick={() => navigate('/preferences')} className="gap-2">
              Get Started
              <ChevronRight className="h-4 w-4" />
            </Button>
            <Button size="lg" variant="outline" onClick={() => navigate('/dashboard')}>
              Explore Recommendations
            </Button>
          </div>
        </motion.div>

        {/* Visual Preview */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="mt-16 rounded-2xl overflow-hidden shadow-2xl border"
        >
          <div className="bg-gradient-to-br from-blue-500 to-purple-600 p-12 text-white text-center">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              <div>
                <div className="text-3xl mb-2">10K+</div>
                <div className="text-sm opacity-90">Movies Analyzed</div>
              </div>
              <div>
                <div className="text-3xl mb-2">95%</div>
                <div className="text-sm opacity-90">Accuracy</div>
              </div>
              <div>
                <div className="text-3xl mb-2">15+</div>
                <div className="text-sm opacity-90">Languages</div>
              </div>
              <div>
                <div className="text-3xl mb-2">AI</div>
                <div className="text-sm opacity-90">Powered</div>
              </div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* AI Features Section */}
      <section className="bg-gray-50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">
              AI Recommendation Engine – Key Features
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Model-driven features designed for intelligent movie discovery
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 h-full hover:shadow-lg transition-shadow">
                  <div className="w-12 h-12 rounded-lg bg-blue-100 flex items-center justify-center mb-4">
                    <feature.icon className="h-6 w-6 text-blue-600" />
                  </div>
                  <h3 className="text-xl mb-2">{feature.title}</h3>
                  <p className="text-gray-600">{feature.description}</p>
                  <div className="mt-4 inline-flex items-center text-sm text-blue-600 gap-1">
                    <span>ML-Powered</span>
                    <Brain className="h-3 w-3" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Future Scope Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl mb-4">Future Enhancements</h2>
            <p className="text-gray-600 text-lg">
              Planned features for the next phase of development
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {futureFeatures.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Card className="p-6 border-2 border-dashed border-gray-300 bg-gray-50">
                  <div className="text-sm text-gray-500 mb-2 flex items-center gap-2">
                    <TrendingUp className="h-4 w-4" />
                    Upcoming
                  </div>
                  <h3 className="text-xl mb-1">{feature.title}</h3>
                  <p className="text-sm text-blue-600 mb-3">{feature.subtitle}</p>
                  <p className="text-gray-600">{feature.description}</p>
                </Card>
              </motion.div>
            ))}
          </div>

          <div className="text-center mt-12">
            <p className="text-gray-500">
              These features are planned for the next phase of development
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-blue-600 to-purple-600 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl mb-4 text-white">
              Ready to Discover Your Next Favorite Movie?
            </h2>
            <p className="text-xl text-blue-100 mb-8">
              Let our AI-powered system find the perfect recommendations for you
            </p>
            <Button
              size="lg"
              variant="secondary"
              onClick={() => navigate('/preferences')}
              className="gap-2"
            >
              Start Getting Recommendations
              <ChevronRight className="h-4 w-4" />
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-400 py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="flex items-center justify-center gap-2 mb-4">
              <Film className="h-5 w-5 text-blue-500" />
              <span className="text-white">AI Movie Recommender</span>
            </div>
            <p className="text-sm">
              Intelligent movie discovery powered by machine learning
            </p>
            <p className="text-xs mt-4">
              © 2024 AI Movie Recommendation Platform. Built for demonstration purposes.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
