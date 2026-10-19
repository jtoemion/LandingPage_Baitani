import type { Metadata } from 'next';
import { PortalAuthProvider } from '@/context/PortalAuthContext';
import PortalShell from './PortalShell';

export const metadata: Metadata = {
  title: 'Portal Penggembalaan & Sekretariat Jemaat — GBI Baitani Sukabumi',
  description: 'Portal persekutuan digital, sensus warga, presensi 11 kelas kategorial, dan penggembalaan jemaat Gereja Baptis Indonesia Baitani Sukabumi.',
};

export default function PortalLayout({ children }: { children: React.ReactNode }) {
  return (
    <PortalAuthProvider>
      <PortalShell>{children}</PortalShell>
    </PortalAuthProvider>
  );
}
