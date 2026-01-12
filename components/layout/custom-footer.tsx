'use client';

import Link from 'next/link';
import { Github, Twitter, Linkedin, Mail, BookOpen, Code, Database, Globe, FileText, HelpCircle, Shield, Zap } from 'lucide-react';

export function CustomFooter() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t bg-gray-50 dark:bg-gray-900/50 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Product Section */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg flex items-center justify-center">
                <BookOpen className="w-5 h-5 text-white" />
              </div>
              <h3 className="font-bold text-lg text-gray-900 dark:text-white">INBO Documentation</h3>
            </div>
            <p className="text-sm text-gray-600 dark:text-gray-400 mb-4">
              Comprehensive documentation for the INBO newsletter management platform. Learn how to build, deploy, and scale with our guides.
            </p>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://twitter.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="mailto:support@inbo.app"
                className="w-9 h-9 flex items-center justify-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-gray-100 hover:bg-gray-200 dark:hover:bg-gray-800 rounded-lg transition-colors"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Documentation Links */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <FileText className="w-4 h-4" />
              Documentation
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/docs"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Getting Started
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/backend/introduction"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Backend Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/frontend/introduction"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Frontend Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/backend/architecture/overview"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Architecture
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/backend/apps/overview"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Apps Overview
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/frontend/components"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Components
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <Zap className="w-4 h-4" />
              Resources
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/openapi/api-reference"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  API Reference
                </Link>
              </li>
              <li>
                <a
                  href="https://inbo-django-api.azurewebsites.net/api/docs/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Swagger UI
                </a>
              </li>
              <li>
                <a
                  href="https://inbo-django-api.azurewebsites.net/api/redoc/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  ReDoc
                </a>
              </li>
              <li>
                <Link
                  href="/docs/frontend/deployment"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Deployment Guide
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/backend/services/overview"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/docs/frontend/hooks"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  React Hooks
                </Link>
              </li>
            </ul>
          </div>

          {/* Support & Legal */}
          <div>
            <h4 className="font-semibold text-gray-900 dark:text-white mb-4 flex items-center gap-2">
              <HelpCircle className="w-4 h-4" />
              Support
            </h4>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/support"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Contact Support
                </Link>
              </li>
              <li>
                <Link
                  href="/issues"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Report Issue
                </Link>
              </li>
              <li>
                <Link
                  href="/community"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Community
                </Link>
              </li>
              <li>
                <Link
                  href="/faq"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-sm text-gray-600 dark:text-gray-400 hover:text-blue-600 dark:hover:text-blue-400 transition-colors"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex flex-col md:flex-row items-center gap-4 text-sm text-gray-600 dark:text-gray-400">
              <p>© {currentYear} INBO. All rights reserved.</p>
              <div className="flex items-center gap-4">
                <span className="hidden md:inline">•</span>
                <span>Built with Next.js & Fumadocs</span>
                <span className="hidden md:inline">•</span>
                <span className="hidden md:inline">Version 1.0.0</span>
              </div>
            </div>
            <div className="flex items-center gap-6 text-sm">
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Shield className="w-4 h-4" />
                <span>Secure & Private</span>
              </div>
              <div className="flex items-center gap-2 text-gray-600 dark:text-gray-400">
                <Database className="w-4 h-4" />
                <span>Open Source</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
