import { notebookSource } from '@/lib/source';
import { DocsPage, DocsTitle, DocsDescription, DocsBody } from '@/components/layout/notebook/page';
import { notFound } from 'next/navigation';
import { getMDXComponents } from '@/mdx-components';
import type { Metadata } from 'next';
import { createRelativeLink } from 'fumadocs-ui/mdx';

export default async function Page(props: PageProps<'/notebook/[[...slug]]'>) {
  const params = await props.params;
  const page = notebookSource.getPage(params.slug);
  if (!page) notFound();

  const MDX = page.data.body;

  return (
    <DocsPage toc={page.data.toc} full={page.data.full}>
      <DocsTitle>{page.data.title}</DocsTitle>
      <DocsDescription className="mb-0">{page.data.description}</DocsDescription>
      <DocsBody>
        <MDX
          components={getMDXComponents({
            a: createRelativeLink(notebookSource, page),
          })}
        />
      </DocsBody>
    </DocsPage>
  );
}

export async function generateStaticParams() {
  return notebookSource.generateParams();
}

export async function generateMetadata(props: PageProps<'/notebook/[[...slug]]'>): Promise<Metadata> {
  const params = await props.params;
  const page = notebookSource.getPage(params.slug);
  if (!page) notFound();

  return {
    title: page.data.title,
    description: page.data.description,
  };
}
