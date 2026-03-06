'use client';

import React, { useState } from 'react';
import { useDigiApi } from '@/lib/useDigiApi';
import { DigimonCard } from '@/components/DigimonCard';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { ErrorAlert } from '@/components/ErrorAlert';
import {
    RefreshCcw,
    TrendingUp,
    Zap,
    Github,
    LayoutDashboard
} from 'lucide-react';

export default function Home() {
    const [view, setView] = useState<'all' | 'mega'>('all');
    const endpoint = view === 'all' ? '/api/coins' : '/api/trending';
    const { data, loading, error, refetch } = useDigiApi(endpoint);

    return (
        <main className="min-h-screen pb-20">
            {/* Navigation / Header */}
            <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-tr from-indigo-600 to-violet-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20">
                            <Zap className="text-white" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-white tracking-tight">DIGI <span className="text-indigo-500">API</span></h1>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Digimon Explorer</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <nav className="flex items-center gap-8 text-sm font-medium text-slate-400">
                            <button
                                onClick={() => setView('all')}
                                className={`transition-colors ${view === 'all' ? 'text-indigo-400 font-bold' : 'hover:text-white'}`}
                            >
                                Todos
                            </button>
                            <button
                                onClick={() => setView('mega')}
                                className={`transition-colors ${view === 'mega' ? 'text-indigo-400 font-bold' : 'hover:text-white'}`}
                            >
                                Mega Level
                            </button>
                        </nav>
                        <div className="h-6 w-px bg-white/10" />
                        <a
                            href="https://github.com/EmilioJaras3"
                            target="_blank"
                            className="text-slate-400 hover:text-white transition-colors p-2"
                        >
                            <Github size={20} />
                        </a>
                    </div>
                </div>
            </header>

            {/* Hero Section */}
            <section className="pt-16 pb-12 px-4">
                <div className="max-w-7xl mx-auto">
                    <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
                        <div>
                            <div className="inline-flex items-center gap-2 bg-indigo-500/10 text-indigo-400 px-3 py-1 rounded-full text-xs font-bold mb-4 border border-indigo-500/20">
                                <TrendingUp size={14} />
                                Real-time Digimon database access
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                                Explora el mundo <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                                    digital en tiempo real.
                                </span>
                            </h2>
                            <p className="text-slate-400 max-w-xl text-lg">
                                Visualiza datos actualizados de tus monstruos digitales favoritos a través de nuestra arquitectura SOA desacoplada.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-xl flex items-center">
                                <button
                                    onClick={() => setView('all')}
                                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === 'all' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                >
                                    General
                                </button>
                                <button
                                    onClick={() => setView('mega')}
                                    className={`px-6 py-2 rounded-lg text-sm font-bold transition-all ${view === 'mega' ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
                                        }`}
                                >
                                    Megas
                                </button>
                            </div>
                            <button
                                onClick={() => refetch()}
                                className="bg-white hover:bg-slate-100 text-slate-950 p-3.5 rounded-xl transition-all active:scale-95 shadow-xl disabled:opacity-50"
                                disabled={loading}
                            >
                                <RefreshCcw size={20} className={loading ? 'animate-spin' : ''} />
                            </button>
                        </div>
                    </div>

                    {/* Grid Content */}
                    <div className="relative">
                        {error ? (
                            <div className="py-20">
                                <ErrorAlert message={error} onRetry={refetch} />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                                {loading ? (
                                    <LoadingSkeleton />
                                ) : (
                                    data?.digimons?.map((digimon, idx) => (
                                        <DigimonCard key={`${digimon.name}-${idx}`} digimon={digimon} />
                                    ))
                                )}
                            </div>
                        )}
                    </div>
                </div>
            </section>

            {/* Footer Info */}
            <footer className="mt-20 border-t border-white/5 py-10 px-4">
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-500 text-sm">
                        <LayoutDashboard size={16} />
                        <span>SOA Arquitectura | Luis Emilio Jaras Sánchez</span>
                    </div>
                    <div className="text-slate-600 text-[10px] uppercase font-bold tracking-widest">
                        Sincronización DigiApi: {data?.timestamp ? new Date(data.timestamp).toLocaleString() : 'N/A'}
                    </div>
                </div>
            </footer>
        </main>
    );
}
