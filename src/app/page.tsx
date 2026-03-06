'use client';

import React, { useState } from 'react';
import { useDigiApi } from '@/lib/useDigiApi';
import { DigimonCard } from '@/components/DigimonCard';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { ErrorAlert } from '@/components/ErrorAlert';

export default function Home() {
    const [view, setView] = useState<'all' | 'mega'>('all');
    const endpoint = view === 'all' ? '/api/coins' : '/api/trending';
    const { data, loading, error, refetch } = useDigiApi(endpoint);

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">
            {/* Sticky Header */}
            <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-background-dark/80 backdrop-blur-md px-6 py-4 lg:px-12">
                <div className="mx-auto flex max-w-[1440px] items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-primary p-2 shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-white" style={{ fontSize: '24px' }}>data_object</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold leading-none tracking-tight text-white">
                                <span className="text-gradient">DIGI</span> API
                            </h1>
                            <span className="text-xs font-medium text-slate-400">Digimon Explorer</span>
                        </div>
                    </div>

                    <nav className="hidden md:flex items-center gap-8">
                        <button
                            onClick={() => setView('all')}
                            className={`text-sm font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary-light after:transition-all ${view === 'all' ? 'text-white after:w-full' : 'text-slate-300 hover:text-white after:w-0 hover:after:w-full'
                                }`}
                        >
                            Todos
                        </button>
                        <button
                            onClick={() => setView('mega')}
                            className={`text-sm font-medium transition-colors relative after:absolute after:-bottom-1 after:left-0 after:h-0.5 after:bg-primary-light after:transition-all ${view === 'mega' ? 'text-white after:w-full' : 'text-slate-300 hover:text-white after:w-0 hover:after:w-full'
                                }`}
                        >
                            Mega Level
                        </button>
                    </nav>

                    <div className="flex items-center gap-4">
                        <a
                            href="https://github.com/EmilioJaras3"
                            target="_blank"
                            className="flex items-center justify-center rounded-full bg-white/5 p-2 text-white hover:bg-white/10 transition-colors border border-surface-border"
                        >
                            <svg fill="currentColor" height="24" viewBox="0 0 256 256" width="24" xmlns="http://www.w3.org/2000/svg">
                                <path d="M224,64a32,32,0,1,0-40,31v9a16,16,0,0,1-16,16H96a31.71,31.71,0,0,0-16,4.31V95a32,32,0,1,0-16,0v66a32,32,0,1,0,16,0v-9a16,16,0,0,1,16-16h72a32,32,0,0,0,32-32V95A32.06,32.06,0,0,0,224,64ZM56,64A16,16,0,1,1,72,80,16,16,0,0,1,56,64ZM88,192a16,16,0,1,1-16-16A16,16,0,0,1,88,192ZM192,80a16,16,0,1,1,16-16A16,16,0,0,1,192,80Z"></path>
                            </svg>
                        </a>
                        <button className="md:hidden flex items-center justify-center rounded-lg bg-white/5 p-2 text-white border border-surface-border">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-[1440px] px-6 py-8 lg:px-12 flex-1">
                {/* Hero Section */}
                <section className="relative mb-16 overflow-hidden rounded-3xl border border-surface-border bg-surface-dark px-6 py-16 sm:py-24 lg:px-8 text-center glass-card">
                    <div className="absolute -top-24 -left-24 h-64 w-64 rounded-full bg-primary/20 blur-3xl"></div>
                    <div className="absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-primary-light/20 blur-3xl"></div>

                    <div className="relative z-10 mx-auto max-w-3xl">
                        <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3 py-1 text-sm font-medium text-primary-light mb-6">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-light opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-primary-light"></span>
                            </span>
                            API Status: Online
                        </span>
                        <h2 className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-white mb-6">
                            Explora el mundo digital en <span className="text-gradient">tiempo real</span>
                        </h2>
                        <p className="mx-auto max-w-2xl text-lg text-slate-400 leading-relaxed mb-10">
                            Accede a la base de datos más completa del mundo digital. Visualiza estadísticas, niveles y evoluciones con nuestra API premium ultrarrápida.
                        </p>
                        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                            <button
                                onClick={() => refetch()}
                                className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-primary-light to-primary px-8 py-4 text-sm font-bold text-white shadow-lg shadow-primary/25 hover:shadow-primary/40 transition-all hover:scale-105"
                            >
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>refresh</span>
                                Sincronizar Datos
                            </button>
                            <button className="flex w-full sm:w-auto items-center justify-center gap-2 rounded-xl border border-surface-border bg-white/5 px-8 py-4 text-sm font-bold text-white hover:bg-white/10 transition-colors">
                                <span className="material-symbols-outlined" style={{ fontSize: '20px' }}>description</span>
                                Documentación
                            </button>
                        </div>
                    </div>
                </section>

                {/* Main Content - Grid */}
                <section>
                    <div className="mb-8 flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary-light">grid_view</span>
                            Directorio Digimon
                        </h3>
                        <div className="flex gap-2">
                            <button className={`rounded-lg border border-surface-border p-2 transition-colors ${view === 'mega' ? 'bg-primary/20 text-white border-primary/50' : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'}`}
                                onClick={() => setView(view === 'mega' ? 'all' : 'mega')}>
                                <span className="material-symbols-outlined">filter_list</span>
                            </button>
                        </div>
                    </div>

                    <div className="relative">
                        {error ? (
                            <div className="py-20">
                                <ErrorAlert message={error} onRetry={refetch} />
                            </div>
                        ) : (
                            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
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
                </section>
            </main>

            {/* Footer */}
            <footer className="mt-20 border-t border-surface-border bg-background-dark/50 backdrop-blur-sm py-12">
                <div className="mx-auto max-w-[1440px] px-6 text-center lg:px-12 flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center gap-2 opacity-80">
                        <span className="material-symbols-outlined text-primary-light" style={{ fontSize: '20px' }}>data_object</span>
                        <span className="text-sm font-bold tracking-wider text-white uppercase">DIGI API</span>
                    </div>
                    <p className="text-sm font-medium text-slate-400">
                        SOA Arquitectura <span className="mx-2 text-surface-border">|</span> Luis Emilio Jaras Sánchez
                    </p>
                    {data?.timestamp && (
                        <p className="text-[10px] text-slate-600 uppercase font-bold tracking-widest">
                            Last Sync: {new Date(data.timestamp).toLocaleString()}
                        </p>
                    )}
                </div>
            </footer>
        </div>
    );
}
