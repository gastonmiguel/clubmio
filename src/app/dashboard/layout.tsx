import SideNav from '@/app/ui/dashboard/sidenav';
import Head from 'next/head';

export const experimental_ppr = true;

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Head>
        <link rel="manifest" href="/dashboard/manifest.json" />
      </Head>
      <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow py-2 px-4 md:overflow-y-auto md:p-12">{children}</div>
      </div>
    </>
  );
}
