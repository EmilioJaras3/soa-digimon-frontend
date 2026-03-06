'use client';

import React, { useState } from 'react';
import { useDigiApi } from '@/lib/useDigiApi';
import { CoinCard } from '@/components/CoinCard';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { ErrorAlert } from '@/components/ErrorAlert';
import {
    RefreshCcw,
    Search,
    TrendingUp,
    Coins,
    Github,
    LayoutDashboard
} from 'lucide-react';

export default function Home() {
    const [limit, setLimit] = useState(12);
    const { data, loading, error, refetch } = useDigiApi(`/api/coins?limit=${limit}`);

    return (
        <main className="min-h-screen pb-20">
            {/* Navigation / Header */}
            <header className="sticky top-0 z-50 bg-slate-950/80 backdrop-blur-xl border-b border-white/5">
                <div className="max-w-7xl mx-auto px-4 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                        <div className="bg-gradient-to-tr from-indigo-600 to-violet-600 p-2.5 rounded-xl shadow-lg shadow-indigo-500/20">
                            <Coins className="text-white" size={24} />
                        </div>
                        <div>
                            <h1 className="text-xl font-black text-white tracking-tight">DIGI <span className="text-indigo-500">API</span></h1>
                            <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Crypto Gateway</p>
                        </div>
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <nav className="flex items-center gap-8 text-sm font-medium text-slate-400">
                            <a href="#" className="text-indigo-400 font-bold">Dashboard</a>
                            <a href="#" className="hover:text-white transition-colors">Mercados</a>
                            <a href="#" className="hover:text-white transition-colors">Trending</a>
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
                                Real-time market data from CoinGecko
                            </div>
                            <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                                Explora el mercado <br />
                                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-violet-400">
                                    cripto en tiempo real.
                                </span>
                            </h2>
                            <p className="text-slate-400 max-w-xl text-lg">
                                Visualiza datos actualizados, tendencias y capitalización de mercado a través de nuestra arquitectura desacoplada.
                            </p>
                        </div>

                        <div className="flex items-center gap-3">
                            <div className="bg-slate-900 border border-slate-800 p-1.5 rounded-xl flex items-center">
                                {[6, 12, 24, 48].map((val) => (
                                    <button
                                        key={val}
                                        onClick={() => setLimit(val)}
                                        className={`px-4 py-2 rounded-lg text-sm font-bold transition-all ${limit === val ? 'bg-indigo-600 text-white shadow-lg' : 'text-slate-500 hover:text-slate-300'
                                            }`}
                                    >
                                        {val}
                                    </button>
                                ))}
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
                                    data?.coins?.map((coin) => (
                                        <CoinCard key={coin.id} coin={coin} />
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
                        Ultima sincronización: {data?.timestamp ? new Date(data.timestamp).toLocaleString() : 'N/A'}
                    </div>
                </div>
            </footer>
        </main>
    );
}
