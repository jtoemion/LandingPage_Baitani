'use client';

import React, { createContext, useContext, useState } from 'react';

export type PortalRole = 'Gembala' | 'Sekretariat' | 'Guru' | 'Jemaat';

export interface PortalAuthUser {
  id: string;
  nama: string;
  role: PortalRole;
  no_whatsapp: string;
  kelas_asuhan?: string;
  title?: string;
}

export interface DemoProfile {
  key: string;
  id: string;
  nama: string;
  role: PortalRole;
  no_whatsapp: string;
  kelas_asuhan: string;
  title: string;
  pin: string;
}

export const DEMO_PROFILES: DemoProfile[] = [
  {
    key: 'kristianto',
    id: 'USR-0076',
    nama: 'Pdt. Kristianto, M.Th.',
    role: 'Gembala',
    no_whatsapp: '081283164343',
    kelas_asuhan: 'Dewasa (30-55 Tahun)',
    title: 'Gembala Sidang',
    pin: '120572',
  },
  {
    key: 'cheren',
    id: 'USR-0015',
    nama: 'Cheren Masria Kristiana',
    role: 'Guru',
    no_whatsapp: '082210154946',
    kelas_asuhan: 'Indria (4-6 Tahun)',
    title: 'Guru Kelas Indria',
    pin: '240391',
  },
  {
    key: 'merla',
    id: 'USR-0006',
    nama: 'Ibu Merla Saputra',
    role: 'Jemaat',
    no_whatsapp: '081214582962',
    kelas_asuhan: 'Indria (Wali Murid)',
    title: 'Jemaat & Wali Murid (Axel)',
    pin: '180986',
  },
  {
    key: 'sekretariat',
    id: 'USR-0007',
    nama: 'Sekretariat GBI Baitani',
    role: 'Sekretariat',
    no_whatsapp: '081295859490',
    kelas_asuhan: 'Semua 11 Kelas Kategorial',
    title: 'Admin Presensi & Sensus',
    pin: '010195',
  },
];

interface PortalAuthContextType {
  user: PortalAuthUser | null;
  isLoadingAuth: boolean;
  login: (phone: string, pin: string) => Promise<{ success: boolean; message?: string }>;
  logout: () => void;
  switchRole: (profileKey: string) => void;
  demoProfiles: DemoProfile[];
}

const PortalAuthContext = createContext<PortalAuthContextType | undefined>(undefined);

export function PortalAuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<PortalAuthUser | null>(() => {
    if (typeof window !== 'undefined') {
      try {
        const saved = localStorage.getItem('gbi_baitani_portal_user');
        return saved ? JSON.parse(saved) : null;
      } catch {
        return null;
      }
    }
    return null;
  });
  const [isLoadingAuth] = useState(false);

  const saveUserSession = (newUser: PortalAuthUser | null) => {
    setUser(newUser);
    if (typeof window !== 'undefined') {
      if (newUser) {
        localStorage.setItem('gbi_baitani_portal_user', JSON.stringify(newUser));
      } else {
        localStorage.removeItem('gbi_baitani_portal_user');
      }
    }
  };

  const login = async (phone: string, pin: string): Promise<{ success: boolean; message?: string }> => {
    // Normalization
    const cleanPhone = phone.replace(/\D/g, '');
    
    // Check if matches any demo profile
    const matched = DEMO_PROFILES.find((p) => {
      const pClean = p.no_whatsapp.replace(/\D/g, '');
      return (cleanPhone.endsWith(pClean.slice(-8)) || cleanPhone === pClean) && (pin === p.pin || pin === '123456' || pin.length === 6);
    });

    if (matched) {
      const newUser: PortalAuthUser = {
        id: matched.id,
        nama: matched.nama,
        role: matched.role,
        no_whatsapp: matched.no_whatsapp,
        kelas_asuhan: matched.kelas_asuhan,
        title: matched.title,
      };
      saveUserSession(newUser);
      return { success: true };
    }

    // Generic match fallback if valid 6-digit pin and phone
    if (cleanPhone.length >= 8 && pin.length === 6) {
      const genericUser: PortalAuthUser = {
        id: 'USR-TEMP',
        nama: 'Warga Jemaat Baitani',
        role: 'Jemaat',
        no_whatsapp: cleanPhone,
        kelas_asuhan: 'Dewasa Onsite',
        title: 'Warga Jemaat',
      };
      saveUserSession(genericUser);
      return { success: true };
    }

    return { success: false, message: 'Nomor WhatsApp atau PIN tidak terdaftar dalam sensus.' };
  };

  const logout = () => {
    saveUserSession(null);
  };

  const switchRole = (profileKey: string) => {
    const matched = DEMO_PROFILES.find((p) => p.key === profileKey);
    if (matched) {
      const newUser: PortalAuthUser = {
        id: matched.id,
        nama: matched.nama,
        role: matched.role,
        no_whatsapp: matched.no_whatsapp,
        kelas_asuhan: matched.kelas_asuhan,
        title: matched.title,
      };
      saveUserSession(newUser);
    }
  };

  return (
    <PortalAuthContext.Provider
      value={{
        user,
        isLoadingAuth,
        login,
        logout,
        switchRole,
        demoProfiles: DEMO_PROFILES,
      }}
    >
      {children}
    </PortalAuthContext.Provider>
  );
}

export function usePortalAuth() {
  const context = useContext(PortalAuthContext);
  if (!context) {
    throw new Error('usePortalAuth must be used within a PortalAuthProvider');
  }
  return context;
}
