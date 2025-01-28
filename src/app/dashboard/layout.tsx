import SideNav from '@/app/ui/dashboard/sidenav';
import { Metadata } from 'next';

export const experimental_ppr = true;

export const metadata: Metadata = {
  title: "ClubMio",
  description: "Aplicación de gestión de clubes de barrio.",
  manifest: "/web.manifest"
};

export default function Layout({ children }: { children: React.ReactNode }) {
  
  return (
    <div className="flex h-screen flex-col md:flex-row md:overflow-hidden">
        <div className="w-full flex-none md:w-64">
          <SideNav />
        </div>
        <div className="flex-grow py-2 px-4 md:overflow-y-auto md:p-12">{children}</div>
    </div>
  );
}
