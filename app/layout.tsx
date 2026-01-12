import './global.css';
import { Inter } from 'next/font/google';
import { NextProvider } from 'fumadocs-core/framework/next';

const inter = Inter({
  subsets: ['latin'],
});

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className} suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <NextProvider>
          {children}
        </NextProvider>
      </body>
    </html>
  );
}
