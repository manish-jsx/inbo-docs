import Link from 'next/link';
import { Github, MessageSquare, Users, Heart, ArrowLeft, ExternalLink, Code, BookOpen } from 'lucide-react';

export const metadata = {
  title: 'Community - INBO Documentation',
  description: 'Join the INBO community and connect with other developers',
};

export default function CommunityPage() {
  return (
    <div className="min-h-screen bg-white dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 max-w-4xl">
        {/* Header */}
        <div className="mb-12">
          <Link
            href="/"
            className="inline-flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 mb-6 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Back to Documentation
          </Link>
          <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-4">
            Join Our Community
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Connect with developers, share knowledge, and contribute to the INBO platform.
          </p>
        </div>

        {/* Community Platforms */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* GitHub Discussions */}
          <div className="p-6 border-2 border-blue-200 dark:border-blue-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition-colors bg-blue-50/50 dark:bg-blue-900/10">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">GitHub Discussions</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Ask questions, share ideas, and discuss with the community.
            </p>
            <a
              href="https://github.com/inbo/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
            >
              Join Discussion
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* GitHub Issues */}
          <div className="p-6 border-2 border-purple-200 dark:border-purple-800 rounded-xl hover:border-purple-400 dark:hover:border-purple-600 transition-colors bg-purple-50/50 dark:bg-purple-900/10">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <Github className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">GitHub Issues</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Report bugs, request features, and track development progress.
            </p>
            <a
              href="https://github.com/inbo/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:gap-3 transition-all"
            >
              View Issues
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Ways to Contribute */}
        <div className="mb-12">
          <h2 className="text-2xl font-semibold mb-6 text-gray-900 dark:text-white">Ways to Contribute</h2>
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-800/50">
              <div className="w-10 h-10 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
                <Code className="w-5 h-5 text-green-600 dark:text-green-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Code Contributions</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Submit pull requests, fix bugs, and add new features.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-800/50">
              <div className="w-10 h-10 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
                <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Documentation</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Improve documentation, write tutorials, and fix typos.
              </p>
            </div>
            <div className="p-6 border border-gray-200 dark:border-gray-800 rounded-xl bg-gray-50 dark:bg-gray-800/50">
              <div className="w-10 h-10 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
                <Users className="w-5 h-5 text-purple-600 dark:text-purple-400" />
              </div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Community Support</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                Help others, answer questions, and share knowledge.
              </p>
            </div>
          </div>
        </div>

        {/* Community Guidelines */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Community Guidelines</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Be Respectful</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Treat all community members with respect and kindness. We welcome diverse perspectives and experiences.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Be Helpful</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Share your knowledge and help others learn. Answer questions, provide feedback, and contribute constructively.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Be Professional</h3>
              <p className="text-gray-700 dark:text-gray-300">
                Maintain a professional tone in all interactions. Focus on technical discussions and constructive feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Thank You */}
        <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Heart className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div>
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">Thank You!</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                We appreciate your contributions to the INBO community. Your support helps make INBO better for everyone.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
