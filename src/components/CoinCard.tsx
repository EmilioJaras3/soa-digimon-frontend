import React from 'react';
import { DigiCoin } from '@/lib/types';
import { TrendingUp, TrendingDown, DollarSign, Activity } from 'lucide-react';

interface CoinCardProps {
    coin: DigiCoin;
}

export const CoinCard: React.FC<CoinCardProps> = ({ coin }) => {
    const isPositive = coin.price_change_percentage_24h > 0;

    return (
        <div className="bg-slate-900 border border-slate-800 rounded-xl p-5 hover:border-indigo-500/50 transition-all group shadow-lg">
            <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-3">
                    <img
                        src={coin.image}
                        alt={coin.name}
                        className="w-10 h-10 rounded-full group-hover:scale-110 transition-transform"
                    />
                    <div>
                        <h3 className="font-bold text-white text-lg">{coin.name}</h3>
                        <span className="text-slate-500 uppercase text-xs font-semibold">{coin.symbol}</span>
                    </div>
                </div>
                <div className={`px-2 py-1 rounded-full text-xs font-bold flex items-center gap-1 ${isPositive ? 'bg-emerald-500/10 text-emerald-500' : 'bg-rose-500/10 text-rose-500'
                    }`}>
                    {isPositive ? <TrendingUp size={14} /> : <TrendingDown size={14} />}
                    {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                </div>
            </div>

            <div className="space-y-3">
                <div className="flex justify-between items-center bg-slate-800/50 p-2 rounded-lg border border-slate-800/50">
                    <div className="flex items-center gap-2 text-slate-400 text-sm">
                        <DollarSign size={14} />
                        <span>Precio</span>
                    </div>
                    <span className="text-white font-mono font-bold">
                        ${coin.current_price.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                    <div className="bg-slate-800/30 p-2 rounded-lg border border-slate-800/30 text-center">
                        <span className="block text-[10px] text-slate-500 uppercase font-bold mb-1">Mín 24h</span>
                        <span className="text-rose-400 text-sm font-mono font-semibold">${coin.low_24h.toLocaleString()}</span>
                    </div>
                    <div className="bg-slate-800/30 p-2 rounded-lg border border-slate-800/30 text-center">
                        <span className="block text-[10px] text-slate-500 uppercase font-bold mb-1">Máx 24h</span>
                        <span className="text-emerald-400 text-sm font-mono font-semibold">${coin.high_24h.toLocaleString()}</span>
                    </div>
                </div>

                <div className="pt-2 flex items-center justify-between text-[11px] text-slate-500">
                    <div className="flex items-center gap-1">
                        <Activity size={12} />
                        <span>Market Cap Rank</span>
                    </div>
                    <span className="bg-indigo-500/20 text-indigo-400 px-2 py-0.5 rounded font-bold">#{coin.market_cap_rank}</span>
                </div>
            </div>
        </div>
    );
};
