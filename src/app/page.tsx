'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { Wrench, Loader2 } from 'lucide-react';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    // Redireciona para login após 1 segundo
    const timer = setTimeout(() => {
      router.push('/login');
    }, 1000);

    return () => clearTimeout(timer);
  }, [router]);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950">
      <div className="bg-gradient-to-br from-orange-500 to-red-600 p-6 rounded-2xl mb-6 shadow-2xl animate-pulse">
        <Wrench className="w-16 h-16 text-white" />
      </div>
      <h1 className="text-5xl font-bold text-white mb-4">AutoCheck Pro</h1>
      <p className="text-xl text-slate-400 mb-8">Sistema de Gestão para Oficinas</p>
      <Loader2 className="w-8 h-8 text-orange-500 animate-spin" />
    </div>
  );
}
