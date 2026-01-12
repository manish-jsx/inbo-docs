import { source } from '@/lib/source';
import { DocsLayout } from '@/components/layout/notebook';
import { baseOptions } from '@/lib/layout.shared';
import { CustomHeader } from '@/components/layout/custom-header';
import { CustomFooter } from '@/components/layout/custom-footer';

export default function Layout({ children }: LayoutProps<'/docs'>) {
  return (
    <>
      <CustomHeader />
      <DocsLayout tree={source.getPageTree()} {...baseOptions()}>
        {children}
      </DocsLayout>
      <CustomFooter />
    </>
  );
}
