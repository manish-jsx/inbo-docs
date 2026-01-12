import type { BaseLayoutProps } from 'fumadocs-ui/layouts/shared';

export function baseOptions(): BaseLayoutProps {
  return {
    nav: {
      title: 'INBO Documentation',
    },
    links: [
      {
        text: 'Documentation',
        url: '/docs',
        active: 'nested-url',
      },
      {
        text: 'Notebook',
        url: '/notebook',
        active: 'nested-url',
      },
      {
        text: 'OpenAPI',
        url: '/openapi',
        active: 'nested-url',
      },
    ],
  };
}
