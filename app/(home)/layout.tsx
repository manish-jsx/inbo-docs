import { HomeLayout } from 'fumadocs-ui/layouts/home';
import { baseOptions } from '@/lib/layout.shared';
import { CustomHeader } from '@/components/layout/custom-header';
import { CustomFooter } from '@/components/layout/custom-footer';

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <>
      <CustomHeader />
      <HomeLayout {...baseOptions()}>{children}</HomeLayout>
      <CustomFooter />
    </>
  );
}
