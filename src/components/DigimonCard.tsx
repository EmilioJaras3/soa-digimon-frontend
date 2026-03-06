import React from 'react';
import { Digimon } from '@/lib/types';

interface DigimonCardProps {
    digimon: Digimon;
}

export const DigimonCard: React.FC<DigimonCardProps> = ({ digimon }) => {
    const getLevelClass = (level: string) => {
        const l = level.toLowerCase();
        if (l.includes('mega')) return 'bg-mega/10 border-mega/20 text-mega';
        if (l.includes('ultimate')) return 'bg-ultimate/10 border-ultimate/20 text-ultimate';
        if (l.includes('champion')) return 'bg-champion/10 border-champion/20 text-champion';
        if (l.includes('rookie')) return 'bg-rookie/10 border-rookie/20 text-rookie';
        return 'bg-slate-500/10 border-slate-500/20 text-slate-400';
    };

    const getGlowColor = (level: string) => {
        const l = level.toLowerCase();
        if (l.includes('mega')) return 'rgba(239, 68, 68, 0.15)';
        if (l.includes('ultimate')) return 'rgba(217, 70, 239, 0.15)';
        if (l.includes('champion')) return 'rgba(6, 182, 212, 0.15)';
        if (l.includes('rookie')) return 'rgba(16, 185, 129, 0.15)';
        return 'rgba(148, 163, 184, 0.15)';
    };

    return (
        <article className="glass-card flex flex-col rounded-2xl overflow-hidden group">
            <div className="relative w-full aspect-square p-6 flex items-center justify-center overflow-hidden bg-gradient-to-b from-slate-800/50 to-transparent">
                <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: `radial-gradient(circle at center, ${getGlowColor(digimon.level)} 0, transparent 70%)` }}
                ></div>
                <div className="w-full h-full relative z-10 transition-transform duration-500 group-hover:scale-110 flex items-center justify-center">
                    <img
                        src={digimon.img}
                        alt={digimon.name}
                        className="max-w-full max-h-full object-contain filter drop-shadow-2xl"
                    />
                </div>
                <div className="absolute top-4 right-4 z-20">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold backdrop-blur-sm ${getLevelClass(digimon.level)}`}>
                        {digimon.level}
                    </span>
                </div>
            </div>

            <div className="p-6 flex flex-col flex-grow">
                <div className="mb-4">
                    <h4 className="text-xl font-bold text-white mb-1 group-hover:text-primary-light transition-colors">
                        {digimon.name}
                    </h4>
                    <p className="text-sm text-slate-400 flex items-center gap-1.5">
                        <span className="material-symbols-outlined" style={{ fontSize: '16px' }}>category</span>
                        Digital Monster
                    </p>
                </div>
                <div className="mt-auto">
                    <button className="w-full flex items-center justify-center gap-2 rounded-xl border border-surface-border bg-white/5 px-4 py-2.5 text-sm font-semibold text-white hover:bg-primary/20 hover:border-primary/50 transition-all">
                        <span className="material-symbols-outlined" style={{ fontSize: '18px' }}>visibility</span>
                        Ver detalles
                    </button>
                </div>
            </div>
        </article>
    );
};
