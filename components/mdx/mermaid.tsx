'use client';

import { useEffect, useId, useState, use } from 'react';
import { useTheme } from 'next-themes';

const cache = new Map<string, Promise<unknown>>();

function cachePromise<T>(key: string, setPromise: () => Promise<T>): Promise<T> {
  const cached = cache.get(key);
  if (cached) return cached as Promise<T>;

  const promise = setPromise();
  cache.set(key, promise);
  return promise;
}

function MermaidContent({ chart }: { chart: string }) {
  const id = useId();
  const { resolvedTheme } = useTheme();
  const [mermaidModule, setMermaidModule] = useState<any>(null);
  const [svg, setSvg] = useState<string>('');
  const [bindFunctions, setBindFunctions] = useState<((container: HTMLElement) => void) | null>(null);

  useEffect(() => {
    cachePromise('mermaid', () => import('mermaid')).then((mermaid: any) => {
      setMermaidModule(mermaid.default);
    });
  }, []);

  useEffect(() => {
    if (!mermaidModule) return;

    mermaidModule.initialize({
      startOnLoad: false,
      securityLevel: 'loose',
      fontFamily: 'inherit',
      themeCSS: 'margin: 1.5rem auto 0;',
      theme: resolvedTheme === 'dark' ? 'dark' : 'default',
    });

    const renderId = id.replace(/:/g, '-');
    const chartContent = chart.replaceAll('\\n', '\n');
    
    cachePromise(`${chartContent}-${resolvedTheme}`, () => {
      return mermaidModule.render(renderId, chartContent);
    }).then((result: any) => {
      setSvg(result.svg);
      setBindFunctions(() => result.bindFunctions);
    });
  }, [mermaidModule, resolvedTheme, chart, id]);

  if (!svg) {
    return (
      <div className="mermaid-container my-6 flex items-center justify-center min-h-[200px] border border-gray-200 dark:border-gray-800 rounded-lg">
        <p className="text-gray-500 dark:text-gray-400">Loading diagram...</p>
      </div>
    );
  }

  return (
    <div
      className="mermaid-container my-6 overflow-x-auto"
      ref={(container) => {
        if (container && bindFunctions) {
          bindFunctions(container);
        }
      }}
      dangerouslySetInnerHTML={{ __html: svg }}
    />
  );
}

export function Mermaid({ chart }: { chart: string }) {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return (
      <div className="mermaid-container my-6 flex items-center justify-center min-h-[200px] border border-gray-200 dark:border-gray-800 rounded-lg">
        <p className="text-gray-500 dark:text-gray-400">Loading diagram...</p>
      </div>
    );
  }

  return <MermaidContent chart={chart} />;
}
