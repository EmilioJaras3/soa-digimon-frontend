'use client';

import React, { useState } from 'react';
import { useDigiApi } from '@/lib/useDigiApi';
import { DigimonCard } from '@/components/DigimonCard';
import { LoadingSkeleton } from '@/components/LoadingSkeleton';
import { ErrorAlert } from '@/components/ErrorAlert';
import { Navigation } from '@/components/Navigation';
import { API_ENDPOINTS, VIEW_TYPES, FONT_SIZES } from '@/lib/constants';

export default function Home() {
    const [view, setView] = useState<string>(VIEW_TYPES.ALL);
    const endpoint = view === VIEW_TYPES.ALL ? API_ENDPOINTS.DIGIMONS : API_ENDPOINTS.MEGA;
    const { data, loading, error, refetch } = useDigiApi(endpoint);

    return (
        <div className="relative flex h-auto min-h-screen w-full flex-col overflow-x-hidden">

            <header className="sticky top-0 z-50 w-full border-b border-surface-border bg-background-dark/80 backdrop-blur-md px-6 py-4 lg:px-12">
                <div className="mx-auto flex max-w-[1440px] items-center justify-between">
                    <div className="flex items-center gap-4">
                        <div className="flex items-center justify-center rounded-xl bg-gradient-to-br from-primary-light to-primary p-2 shadow-lg shadow-primary/20">
                            <span className="material-symbols-outlined text-white" style={{ fontSize: FONT_SIZES.ICON }}>data_object</span>
                        </div>
                        <div className="flex flex-col">
                            <h1 className="text-xl font-bold leading-none tracking-tight text-white">
                                <span className="text-gradient">DIGI</span> API
                            </h1>
                            <span className="text-xs font-medium text-slate-400">Digimon Explorer</span>
                        </div>
                    </div>

                    <Navigation view={view} onViewChange={setView} />

                    <div className="flex items-center gap-4">
                        <button className="md:hidden flex items-center justify-center rounded-lg bg-white/5 p-2 text-white border border-surface-border">
                            <span className="material-symbols-outlined">menu</span>
                        </button>
                    </div>
                </div>
            </header>

            <main className="mx-auto max-w-[1440px] px-6 py-8 lg:px-12 flex-1">

                <section>
                    <div className="mb-8 flex items-center justify-between">
                        <h3 className="text-2xl font-bold text-white flex items-center gap-3">
                            <span className="material-symbols-outlined text-primary-light">grid_view</span>
                            Directorio Digimon
                        </h3>
                        <div className="flex gap-2">
                            <button className={`rounded-lg border border-surface-border p-2 transition-colors ${view === VIEW_TYPES.MEGA ? 'bg-primary/20 text-white border-primary/50' : 'bg-white/5 text-slate-400 hover:text-white hover:bg-white/10'}`}
                                onClick={() => setView(view === VIEW_TYPES.MEGA ? VIEW_TYPES.ALL : VIEW_TYPES.MEGA)}>
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

            <footer className="mt-20 border-t border-surface-border bg-background-dark/50 backdrop-blur-sm py-12">
                <div className="mx-auto max-w-[1440px] px-6 text-center lg:px-12 flex flex-col items-center justify-center gap-4">
                    <div className="flex items-center gap-2 opacity-80">
                        <span className="material-symbols-outlined text-primary-light" style={{ fontSize: '20px' }}>data_object</span>
                        <span className="text-sm font-bold tracking-wider text-white uppercase">DIGI API</span>
                    </div>
                </div>
            </footer>
        </div>
    );
}
