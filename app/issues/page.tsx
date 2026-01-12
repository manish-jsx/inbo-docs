import Link from 'next/link';
import { Github, Bug, Lightbulb, Code, ArrowLeft, ExternalLink } from 'lucide-react';

export const metadata = {
  title: 'Report Issue - INBO Documentation',
  description: 'Report bugs and request features for INBO platform',
};

export default function IssuesPage() {
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
            Report an Issue
          </h1>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Help us improve INBO by reporting bugs, requesting features, or sharing feedback.
          </p>
        </div>

        {/* Issue Types */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* Bug Report */}
          <div className="p-6 border-2 border-red-200 dark:border-red-800 rounded-xl hover:border-red-400 dark:hover:border-red-600 transition-colors bg-red-50/50 dark:bg-red-900/10">
            <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-lg flex items-center justify-center mb-4">
              <Bug className="w-6 h-6 text-red-600 dark:text-red-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Bug Report</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Report a bug or unexpected behavior in the platform.
            </p>
            <a
              href="https://github.com/inbo/issues/new?template=bug_report.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-red-600 dark:text-red-400 font-medium hover:gap-3 transition-all"
            >
              Report Bug
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Feature Request */}
          <div className="p-6 border-2 border-blue-200 dark:border-blue-800 rounded-xl hover:border-blue-400 dark:hover:border-blue-600 transition-colors bg-blue-50/50 dark:bg-blue-900/10">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center mb-4">
              <Lightbulb className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Feature Request</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Suggest a new feature or enhancement.
            </p>
            <a
              href="https://github.com/inbo/issues/new?template=feature_request.md"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-blue-600 dark:text-blue-400 font-medium hover:gap-3 transition-all"
            >
              Request Feature
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          {/* Documentation Issue */}
          <div className="p-6 border-2 border-purple-200 dark:border-purple-800 rounded-xl hover:border-purple-400 dark:hover:border-purple-600 transition-colors bg-purple-50/50 dark:bg-purple-900/10">
            <div className="w-12 h-12 bg-purple-100 dark:bg-purple-900/30 rounded-lg flex items-center justify-center mb-4">
              <Code className="w-6 h-6 text-purple-600 dark:text-purple-400" />
            </div>
            <h3 className="text-xl font-semibold mb-2 text-gray-900 dark:text-white">Documentation</h3>
            <p className="text-gray-600 dark:text-gray-400 mb-4">
              Report issues or suggest improvements to documentation.
            </p>
            <a
              href="https://github.com/inbo/docs/issues/new"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-purple-600 dark:text-purple-400 font-medium hover:gap-3 transition-all"
            >
              Report Issue
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>

        {/* Guidelines */}
        <div className="bg-gray-50 dark:bg-gray-800 rounded-xl p-6 mb-8">
          <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Issue Reporting Guidelines</h2>
          <div className="space-y-4">
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Before Reporting</h3>
              <ul className="space-y-2 text-gray-700 dark:text-gray-300 ml-4">
                <li className="list-disc">Search existing issues to avoid duplicates</li>
                <li className="list-disc">Check if the issue has been fixed in the latest version</li>
                <li className="list-disc">Verify the issue occurs in the latest version</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-2 text-gray-900 dark:text-white">Bug Report Template</h3>
              <div className="bg-gray-900 dark:bg-gray-950 rounded-lg p-4 text-sm text-gray-300 font-mono">
                <div className="space-y-2">
                  <div>**Description**</div>
                  <div>Clear and concise description of the bug</div>
                  <div className="mt-4">**Steps to Reproduce**</div>
                  <div>1. Step one</div>
                  <div>2. Step two</div>
                  <div>3. Step three</div>
                  <div className="mt-4">**Expected Behavior**</div>
                  <div>What you expected to happen</div>
                  <div className="mt-4">**Actual Behavior**</div>
                  <div>What actually happened</div>
                  <div className="mt-4">**Environment**</div>
                  <div>- OS: [e.g., macOS 14.0]</div>
                  <div>- Browser: [e.g., Chrome 120]</div>
                  <div>- Version: [e.g., 1.0.0]</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* GitHub Link */}
        <div className="bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Github className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-gray-900 dark:text-white mb-1">GitHub Issues</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                All issues are tracked on GitHub. Create an account to report issues and track their progress.
              </p>
            </div>
            <a
              href="https://github.com/inbo/issues"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              View Issues
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
