import Link from 'next/link';
import { Mail, MessageSquare, Github, HelpCircle, FileText, ArrowLeft } from 'lucide-react';

export const metadata = {
  title: 'Contact Support - INBO Documentation',
  description: 'Get help and support for INBO platform',
};

export default function SupportPage() {
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
            Contact Support
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            We're here to help! Get in touch with our support team for assistance with the INBO platform.
          </p>
        </div>

        {/* Support Options */}
        <div className="grid md:grid-cols-2 gap-6 mb-12">
          {/* Email Support */}
          <div className="p-6 border-2 border-blue-200 dark:border-blue-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition-colors bg-blue-50/50 dark:bg-blue-900/10">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <Mail className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Email Support</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Send us an email and we'll get back to you within 24 hours.
            </p>
            <a
              href="mailto:support@inbo.app"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
            >
              support@inbo.app
            </a>
          </div>

          {/* GitHub Issues */}
          <div className="p-6 border-2 border-purple-200 dark:border-purple-800 rounded-xl hover:border-purple-400 dark:hover:border-purple-600 transition-colors bg-purple-50/50 dark:bg-purple-900/10">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <Github className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">GitHub Issues</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Report bugs, request features, or ask technical questions on GitHub.
            </p>
            <a
              href="https://github.com/inbo/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:gap-3 transition-all"
            >
              Open Issue
            </a>
          </div>

          {/* Community Forum */}
          <div className="p-6 border-2 border-green-200 dark:border-green-800 rounded-xl hover:border-green-400 dark:hover:border-green-600 transition-colors bg-green-50/50 dark:bg-green-900/10">
            <div className="w-12 h-12 bg-green-100 dark:bg-green-900/30 rounded-lg flex items-center justify-center mb-4">
              <MessageSquare className="w-6 h-6 text-green-600 dark:text-green-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Community Forum</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Join discussions, share ideas, and get help from the community.
            </p>
            <a
              href="https://github.com/inbo/discussions"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-green-600 dark:text-green-400 font-medium hover:gap-3 transition-all"
            >
              Visit Forum
            </a>
          </div>

          {/* Documentation */}
          <div className="p-6 border-2 border-orange-200 dark:border-orange-800 rounded-xl hover:border-orange-400 dark:hover:border-orange-600 transition-colors bg-orange-50/50 dark:bg-orange-900/10">
            <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/30 rounded-lg flex items-center justify-center mb-4">
              <HelpCircle className="w-6 h-6 text-orange-600 dark:text-orange-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Documentation</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Browse our comprehensive documentation for answers to common questions.
            </p>
            <Link
              href="/docs"
              className="inline-flex items-center gap-2 text-orange-600 dark:text-orange-400 font-medium hover:gap-3 transition-all"
            >
              View Docs
            </Link>
          </div>
        </div>

        {/* Response Times */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Response Times</h2>
          <div className="space-y-3">
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">Email Support</span>
              <span className="font-medium text-gray-900 dark:text-white">Within 24 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">GitHub Issues</span>
              <span className="font-medium text-gray-900 dark:text-white">Within 48 hours</span>
            </div>
            <div className="flex justify-between items-center">
              <span className="text-gray-700 dark:text-gray-300">Community Forum</span>
              <span className="font-medium text-gray-900 dark:text-white">Community-driven</span>
            </div>
          </div>
        </div>

        {/* What to Include */}
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <h2 className="text-xl font-semibold mb-4 text-gray-900 dark:text-white">What to Include in Your Support Request</h2>
          <ul className="space-y-2 text-gray-700 dark:text-gray-300">
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400">•</span>
              <span>Clear description of the issue or question</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400">•</span>
              <span>Steps to reproduce (if applicable)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400">•</span>
              <span>Expected vs. actual behavior</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400">•</span>
              <span>Environment details (OS, browser, version)</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-blue-600 dark:text-blue-400">•</span>
              <span>Screenshots or error messages (if applicable)</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}
