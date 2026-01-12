import { notebookSource } from '@/lib/source';
import { DocsLayout } from '@/components/layout/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { CustomHeader } from '@/components/layout/custom-header';
import { CustomFooter } from '@/components/layout/custom-footer';

export default function Layout({ children }: LayoutProps<'/notebook'>) {
  return (
    <>
      <CustomHeader />
      <DocsLayout tree={notebookSource.getPageTree()} {...baseOptions()}>
        {children}
      </DocsLayout>
      <CustomFooter />
    </>
  );
}
