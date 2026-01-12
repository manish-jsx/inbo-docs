import Link from 'next/link';
import { FileText, ArrowLeft, Scale, AlertCircle, CheckCircle } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms of Service - INBO Documentation',
  description: 'Terms of service for INBO platform',
};

export default function TermsPage() {
  const lastUpdated = 'January 2025';

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
          <div className="flex items-center gap-3 mb-4">
            <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
              <Scale className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Terms of Service
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Last updated: {lastUpdated}
          </p>
        </div>

        {/* Content */}
        <div className="prose prose-gray dark:prose-invert max-w-none">
          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Agreement to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              By accessing or using INBO, you agree to be bound by these Terms of Service and all applicable laws and regulations. If you do not agree with any of these terms, you are prohibited from using or accessing this platform.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <CheckCircle className="w-6 h-6" />
              Use License
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Permission is granted to temporarily use INBO for personal, non-commercial use. This is the grant of a license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose</li>
              <li>Attempt to reverse engineer any software</li>
              <li>Remove any copyright or proprietary notations</li>
              <li>Transfer the materials to another person</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">User Accounts</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              When you create an account with us, you must provide information that is accurate, complete, and current at all times. You are responsible for safeguarding the password and for all activities that occur under your account.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white flex items-center gap-2">
              <AlertCircle className="w-6 h-6" />
              Prohibited Uses
            </h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              You may not use INBO:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>In any way that violates any applicable law or regulation</li>
              <li>To transmit any malicious code or viruses</li>
              <li>To collect or store personal data about other users</li>
              <li>To spam or send unsolicited communications</li>
              <li>To interfere with or disrupt the service</li>
              <li>To impersonate or misrepresent your affiliation with any entity</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Content</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              Our service allows you to post, link, store, share and otherwise make available certain information, text, or other material. You are responsible for the content that you post on or through the service.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              You retain ownership of any intellectual property rights that you hold in that content. By posting content, you grant us a license to use, modify, and display that content.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Intellectual Property</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The service and its original content, features, and functionality are and will remain the exclusive property of INBO and its licensors. The service is protected by copyright, trademark, and other laws.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Termination</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              We may terminate or suspend your account and bar access to the service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.
            </p>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              Upon termination, your right to use the service will cease immediately.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Disclaimer</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              The information on this platform is provided on an "as is" basis. To the fullest extent permitted by law, INBO:
            </p>
            <ul className="list-disc list-inside space-y-2 text-gray-700 dark:text-gray-300 ml-4">
              <li>Excludes all representations, warranties, and conditions</li>
              <li>Excludes all liability for damages arising out of or in connection with your use of the platform</li>
              <li>Does not guarantee the accuracy, completeness, or usefulness of any information</li>
            </ul>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Limitation of Liability</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              In no event shall INBO, nor its directors, employees, partners, agents, suppliers, or affiliates, be liable for any indirect, incidental, special, consequential, or punitive damages, including without limitation, loss of profits, data, use, goodwill, or other intangible losses, resulting from your use of the service.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Governing Law</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              These Terms shall be interpreted and governed by the laws of the jurisdiction in which INBO operates, without regard to its conflict of law provisions.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Changes to Terms</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material, we will provide at least 30 days notice prior to any new terms taking effect.
            </p>
          </section>

          <section className="mb-8">
            <h2 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-white">Contact Information</h2>
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed mb-4">
              If you have any questions about these Terms of Service, please contact us:
            </p>
            <div className="bg-gray-50 dark:bg-gray-800 rounded-lg p-4">
              <p className="text-gray-700 dark:text-gray-300">
                <strong>Email:</strong>{' '}
                <a href="mailto:legal@inbo.app" className="text-blue-600 dark:text-blue-400 hover:underline">
                  legal@inbo.app
                </a>
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
