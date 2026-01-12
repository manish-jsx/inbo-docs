import Link from 'next/link';
import { BookOpen, Code, Database, Zap, Shield, Search, BarChart, Rocket, ArrowRight, CheckCircle2, Layers, Globe } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-blue-50 via-indigo-50 to-purple-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-20 px-4">
        <div className="max-w-7xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 mb-6 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium">
            <Rocket className="w-4 h-4" />
            <span>Complete Platform Documentation</span>
          </div>
          
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            INBO Documentation
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            Comprehensive guides for building and deploying the INBO newsletter management platform
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              Explore Documentation
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link
              href="/openapi/api-reference"
              className="inline-flex items-center gap-2 px-6 py-3 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-gray-100 border-2 border-gray-300 dark:border-gray-600 rounded-lg font-semibold transition-all"
            >
              <Code className="w-5 h-5" />
              API Reference
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-12 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-800">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-blue-600 dark:text-blue-400 mb-2">20+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Django Apps</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-purple-600 dark:text-purple-400 mb-2">50+</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">React Components</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-pink-600 dark:text-pink-400 mb-2">100%</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Documentation Coverage</div>
            </div>
            <div className="text-center">
              <div className="text-3xl md:text-4xl font-bold text-indigo-600 dark:text-indigo-400 mb-2">2</div>
              <div className="text-sm text-gray-600 dark:text-gray-400">Platforms</div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800/50">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Get Started Quickly
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Jump into the documentation that matters most to you
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Backend Card */}
            <Link
              href="/docs/backend/introduction"
              className="group relative p-6 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Database className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Backend Documentation</h3>
                <p className="text-blue-100 mb-4">
                  Complete Django backend with 20+ apps, services, APIs, and architecture guides
                </p>
                <div className="flex items-center text-white font-medium group-hover:gap-2 transition-all">
                  Explore Backend
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* Frontend Card */}
            <Link
              href="/docs/frontend/introduction"
              className="group relative p-6 bg-gradient-to-br from-purple-500 to-purple-600 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Code className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">Frontend Documentation</h3>
                <p className="text-purple-100 mb-4">
                  Next.js frontend with 50+ components, hooks, services, and deployment guides
                </p>
                <div className="flex items-center text-white font-medium group-hover:gap-2 transition-all">
                  Explore Frontend
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>

            {/* API Card */}
            <Link
              href="/openapi/api-reference"
              className="group relative p-6 bg-gradient-to-br from-pink-500 to-pink-600 rounded-xl shadow-lg hover:shadow-2xl transition-all transform hover:-translate-y-1"
            >
              <div className="absolute inset-0 bg-white/10 rounded-xl opacity-0 group-hover:opacity-100 transition-opacity" />
              <div className="relative">
                <div className="w-12 h-12 bg-white/20 rounded-lg flex items-center justify-center mb-4">
                  <Globe className="w-6 h-6 text-white" />
                </div>
                <h3 className="text-xl font-bold text-white mb-2">API Reference</h3>
                <p className="text-pink-100 mb-4">
                  Interactive API documentation with Swagger UI and ReDoc
                </p>
                <div className="flex items-center text-white font-medium group-hover:gap-2 transition-all">
                  View API Docs
                  <ArrowRight className="w-4 h-4 ml-1" />
                </div>
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white dark:bg-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Key Features
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Everything you need to understand and work with the INBO platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="p-6 border-2 border-blue-200 dark:border-blue-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition-colors bg-blue-50/50 dark:bg-blue-900/10">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <Shield className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Authentication & Security</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                OTP verification, JWT tokens, device tracking, and secure encryption
              </p>
              <Link href="/docs/backend/apps/auth-app" className="text-blue-600 dark:text-blue-400 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 border-2 border-purple-200 dark:border-purple-800 rounded-xl hover:border-purple-400 dark:hover:border-purple-600 transition-colors bg-purple-50/50 dark:bg-purple-900/10">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Search className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Search & Discovery</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Elasticsearch-powered search with Redis caching for fast results
              </p>
              <Link href="/docs/backend/architecture/search-architecture" className="text-purple-600 dark:text-purple-400 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 border-2 border-pink-200 dark:border-pink-800 rounded-xl hover:border-pink-400 dark:hover:border-pink-600 transition-colors bg-pink-50/50 dark:bg-pink-900/10">
              <div className="w-10 h-10 bg-pink-100 dark:bg-pink-900/30 rounded-lg flex items-center justify-center mb-4">
                <Zap className="w-5 h-5 text-pink-600 dark:text-pink-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Recommendation Engine</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                AI-powered hybrid scoring for personalized newsletter recommendations
              </p>
              <Link href="/docs/backend/architecture/recommendation-engine" className="text-pink-600 dark:text-pink-400 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 border-2 border-indigo-200 dark:border-indigo-800 rounded-xl hover:border-indigo-400 dark:hover:border-indigo-600 transition-colors bg-indigo-50/50 dark:bg-indigo-900/10">
              <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/30 rounded-lg flex items-center justify-center mb-4">
                <BarChart className="w-5 h-5 text-indigo-600 dark:text-indigo-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Analytics & Insights</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Reading statistics, streaks, time tracking, and dashboard insights
              </p>
              <Link href="/docs/backend/apps/reading-app" className="text-indigo-600 dark:text-indigo-400 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 border-2 border-green-200 dark:border-green-800 rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors bg-green-50/50 dark:bg-green-900/10">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <Layers className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Experience Orchestration</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Dynamic UI personalization based on user behavior and preferences
              </p>
              <Link href="/docs/backend/architecture/experience-orchestration" className="text-green-600 dark:text-green-400 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>

            <div className="p-6 border-2 border-orange-200 dark:border-orange-800 rounded-xl hover:border-orange-400 dark:hover:border-orange-600 transition-colors bg-orange-50/50 dark:bg-orange-900/10">
              <div className="w-10 h-10 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
                <Rocket className="w-5 h-5 text-orange-600 dark:text-orange-400" />
              </div>
              <h3 className="text-lg font-semibold mb-2 text-gray-900 dark:text-gray-100">Deployment Guides</h3>
              <p className="text-gray-600 dark:text-gray-400 text-sm">
                Complete deployment guides for Azure, Vercel, and Docker
              </p>
              <Link href="/docs/frontend/deployment" className="text-orange-600 dark:text-orange-400 text-sm font-medium mt-3 inline-flex items-center gap-1 hover:gap-2 transition-all">
                Learn more <ArrowRight className="w-3 h-3" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Documentation Sections */}
      <section className="py-16 bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900">
        <div className="max-w-7xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">
              Documentation Sections
            </h2>
            <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
              Comprehensive guides organized by topic and platform
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* Backend Sections */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                  <Database className="w-5 h-5 text-blue-600 dark:text-blue-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Backend (Django)</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs/backend/introduction" className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group">
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Introduction</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/docs/backend/architecture/overview" className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group">
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Architecture</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/docs/backend/apps/overview" className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group">
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Apps Overview</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/docs/backend/services/overview" className="flex items-center justify-between p-3 rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors group">
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-blue-600 dark:group-hover:text-blue-400">Services</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                  </Link>
                </li>
              </ul>
            </div>

            {/* Frontend Sections */}
            <div className="bg-white dark:bg-gray-800 rounded-xl p-6 shadow-lg">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center">
                  <Code className="w-5 h-5 text-purple-600 dark:text-purple-400" />
                </div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">Frontend (Next.js)</h3>
              </div>
              <ul className="space-y-3">
                <li>
                  <Link href="/docs/frontend/introduction" className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">Introduction</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/docs/frontend/architecture" className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">Architecture</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/docs/frontend/components" className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">Components</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                  </Link>
                </li>
                <li>
                  <Link href="/docs/frontend/api-integration" className="flex items-center justify-between p-3 rounded-lg hover:bg-purple-50 dark:hover:bg-purple-900/20 transition-colors group">
                    <span className="text-gray-700 dark:text-gray-300 group-hover:text-purple-600 dark:group-hover:text-purple-400">API Integration</span>
                    <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-purple-600 dark:group-hover:text-purple-400" />
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Get Started?
          </h2>
          <p className="text-xl text-blue-100 mb-8">
            Explore our comprehensive documentation and start building with INBO
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 px-8 py-4 bg-white text-blue-600 rounded-lg font-semibold hover:bg-gray-100 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
            >
              <BookOpen className="w-5 h-5" />
              Start Reading
            </Link>
            <Link
              href="/openapi/api-reference"
              className="inline-flex items-center gap-2 px-8 py-4 bg-blue-700/50 hover:bg-blue-700 text-white border-2 border-white/30 rounded-lg font-semibold transition-all"
            >
              <Globe className="w-5 h-5" />
              View API Docs
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
