import React from 'react';
import { Digimon } from '@/lib/types';
import { Shield, Zap, Flame, Snowflake, Star } from 'lucide-react';

interface DigimonCardProps {
    digimon: Digimon;
}

export const DigimonCard: React.FC<DigimonCardProps> = ({ digimon }) => {
    const getLevelColor = (level: string) => {
        const l = level.toLowerCase();
        if (l.includes('mega')) return 'from-red-500 to-orange-500';
        if (l.includes('ultimate')) return 'from-purple-500 to-pink-500';
        if (l.includes('champion')) return 'from-blue-500 to-cyan-500';
        if (l.includes('rookie')) return 'from-green-500 to-emerald-500';
        return 'from-slate-500 to-slate-600';
    };

    const getLevelIcon = (level: string) => {
        const l = level.toLowerCase();
        if (l.includes('mega')) return <Flame size={16} />;
        if (l.includes('ultimate')) return <Star size={16} />;
        if (l.includes('champion')) return <Zap size={16} />;
        if (l.includes('rookie')) return <Shield size={16} />;
        return <Snowflake size={16} />;
    };

    const colorClass = getLevelColor(digimon.level);

    return (
        <div className="group relative bg-slate-900/40 backdrop-blur-sm border border-white/5 rounded-3xl overflow-hidden hover:border-indigo-500/30 transition-all duration-500 hover:shadow-2xl hover:shadow-indigo-500/10 hover:-translate-y-1">
            {/* Decorative Glow */}
            <div className={`absolute -top-24 -right-24 w-48 h-48 bg-gradient-to-br ${colorClass} opacity-0 group-hover:opacity-20 blur-3xl transition-opacity duration-700`} />

            <div className="p-6">
                <div className="relative aspect-square mb-6 rounded-2xl overflow-hidden bg-slate-950/50 flex items-center justify-center p-4">
                    <img
                        src={digimon.img}
                        alt={digimon.name}
                        className="w-full h-full object-contain transform group-hover:scale-110 transition-transform duration-700 ease-out drop-shadow-2xl"
                    />
                </div>

                <div className="flex justify-between items-start mb-4">
                    <div>
                        <h3 className="text-xl font-black text-white group-hover:text-indigo-400 transition-colors duration-300">
                            {digimon.name}
                        </h3>
                        <div className="flex items-center gap-1.5 mt-1">
                            <span className={`inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-md bg-gradient-to-r ${colorClass} text-white`}>
                                {getLevelIcon(digimon.level)}
                                {digimon.level}
                            </span>
                        </div>
                    </div>
                </div>

                <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                    <div className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
                        Digital Monster
                    </div>
                    <button className="text-xs font-bold text-indigo-400 hover:text-white transition-colors">
                        Ver detalles →
                    </button>
                </div>
            </div>
        </div>
    );
};
