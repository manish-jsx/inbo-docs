import Link from 'next/link';
import { HelpCircle, ArrowLeft, ChevronDown } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'FAQ - INBO Documentation',
  description: 'Frequently asked questions about INBO platform',
};

const faqs = [
  {
    category: 'Getting Started',
    questions: [
      {
        q: 'What is INBO?',
        a: 'INBO is a comprehensive newsletter management platform that helps users organize newsletters, manage emails with custom @inbo.me addresses, track reading analytics, and discover personalized content through AI-powered recommendations.',
      },
      {
        q: 'How do I get started with INBO?',
        a: 'Start by reading our Getting Started guide in the documentation. You can begin with either the Backend or Frontend documentation depending on your needs.',
      },
      {
        q: 'What technologies does INBO use?',
        a: 'INBO uses Django 5.0.6 for the backend, Next.js 16 for the frontend, PostgreSQL for the database, Redis for caching, Elasticsearch for search, and various other modern technologies.',
      },
    ],
  },
  {
    category: 'Backend',
    questions: [
      {
        q: 'How many Django apps are in the backend?',
        a: 'The INBO backend consists of 20+ Django apps, each handling specific functionality like authentication, email management, search, recommendations, and more.',
      },
      {
        q: 'How do I set up the backend locally?',
        a: 'Check the Backend Introduction documentation for detailed setup instructions. You\'ll need Python 3.12+, PostgreSQL, Redis, and other dependencies.',
      },
      {
        q: 'What is the API base URL?',
        a: 'The production API is hosted at https://inbo-django-api.azurewebsites.net/api. For local development, it\'s typically http://localhost:8000/api.',
      },
    ],
  },
  {
    category: 'Frontend',
    questions: [
      {
        q: 'How many React components are available?',
        a: 'The frontend includes 50+ React components organized by feature, including layout components, authentication components, inbox components, and more.',
      },
      {
        q: 'How do I integrate with the backend API?',
        a: 'The frontend uses a service layer pattern. Check the API Integration documentation for details on how to use the services and hooks.',
      },
      {
        q: 'Is the frontend responsive?',
        a: 'Yes, the frontend is fully responsive with mobile-first design. It includes separate layouts for mobile and desktop experiences.',
      },
    ],
  },
  {
    category: 'Deployment',
    questions: [
      {
        q: 'How do I deploy the backend?',
        a: 'The backend can be deployed to Azure App Service, AWS, or any platform that supports Django. Check the Backend Deployment documentation for detailed guides.',
      },
      {
        q: 'How do I deploy the frontend?',
        a: 'The frontend can be deployed to Vercel, Azure App Service, or any platform that supports Next.js. See the Frontend Deployment documentation for step-by-step instructions.',
      },
      {
        q: 'What environment variables are required?',
        a: 'Both backend and frontend require specific environment variables. Check the respective deployment documentation for the complete list.',
      },
    ],
  },
  {
    category: 'API',
    questions: [
      {
        q: 'Where can I find the API documentation?',
        a: 'The API documentation is available in multiple formats: Swagger UI at https://inbo-django-api.azurewebsites.net/api/docs/, ReDoc at https://inbo-django-api.azurewebsites.net/api/redoc/, and in our OpenAPI section.',
      },
      {
        q: 'How do I authenticate API requests?',
        a: 'The API uses JWT token authentication. Include the access token in the Authorization header as "Bearer <token>". Tokens are automatically refreshed by the frontend.',
      },
      {
        q: 'What API version is used?',
        a: 'The API uses version v1. All requests should include the API-Version header set to "v1".',
      },
    ],
  },
];

export default function FAQPage() {
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
              <HelpCircle className="w-6 h-6 text-blue-600 dark:text-blue-400" />
            </div>
            <h1 className="text-4xl font-bold text-gray-900 dark:text-white">
              Frequently Asked Questions
            </h1>
          </div>
          <p className="text-lg text-gray-600 dark:text-gray-400">
            Find answers to common questions about INBO platform.
          </p>
        </div>

        {/* FAQ Sections */}
        <div className="space-y-8">
          {faqs.map((section, sectionIndex) => (
            <div key={sectionIndex} className="border border-gray-200 dark:border-gray-800 rounded-xl overflow-hidden">
              <div className="bg-gray-50 dark:bg-gray-800 px-6 py-4 border-b border-gray-200 dark:border-gray-800">
                <h2 className="text-xl font-semibold text-gray-900 dark:text-white">
                  {section.category}
                </h2>
              </div>
              <div className="divide-y divide-gray-200 dark:divide-gray-800">
                {section.questions.map((faq, faqIndex) => (
                  <details
                    key={faqIndex}
                    className="group"
                  >
                    <summary className="px-6 py-4 cursor-pointer list-none flex items-center justify-between hover:bg-gray-50 dark:hover:bg-gray-800/50 transition-colors">
                      <span className="font-medium text-gray-900 dark:text-white pr-4">
                        {faq.q}
                      </span>
                      <ChevronDown className="w-5 h-5 text-gray-400 group-open:rotate-180 transition-transform flex-shrink-0" />
                    </summary>
                    <div className="px-6 py-4 bg-gray-50 dark:bg-gray-800/30">
                      <p className="text-gray-700 dark:text-gray-300 leading-relaxed">
                        {faq.a}
                      </p>
                    </div>
                  </details>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Still Have Questions */}
        <div className="mt-12 bg-blue-50 dark:bg-blue-900/10 rounded-xl p-6 border border-blue-200 dark:border-blue-800">
          <h3 className="font-semibold text-gray-900 dark:text-white mb-2">Still have questions?</h3>
          <p className="text-gray-700 dark:text-gray-300 mb-4">
            Can't find what you're looking for? Check out our documentation or contact support.
          </p>
          <div className="flex flex-wrap gap-3">
            <Link
              href="/docs"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg font-medium transition-colors"
            >
              Browse Documentation
            </Link>
            <Link
              href="/support"
              className="px-4 py-2 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-900 dark:text-white border border-gray-300 dark:border-gray-600 rounded-lg font-medium transition-colors"
            >
              Contact Support
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
