'use client';

import { useRef } from 'react';

interface SwaggerEmbedProps {
  url?: string;
  height?: string;
}

export function SwaggerEmbed({ 
  url = 'https://inbo-django-api.azurewebsites.net/api/docs/',
  height = '1000px'
}: SwaggerEmbedProps) {
  const iframeRef = useRef<HTMLIFrameElement>(null);

  return (
    <div className="w-full my-8 rounded-lg overflow-hidden border border-fd-border">
      <iframe
        ref={iframeRef}
        src={url}
        width="100%"
        height={height}
        className="w-full"
        title="Swagger UI - INBO API Documentation"
        allow="fullscreen"
        sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
      />
    </div>
  );
}
