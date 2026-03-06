import React from 'react';

export const LoadingSkeleton: React.FC = () => {
    return (
        <>
            {[1, 2, 3, 4, 5, 6].map((i) => (
                <div key={i} className="bg-slate-900/50 border border-slate-800 rounded-xl p-5 animate-pulse h-[240px]">
                    <div className="flex items-center gap-3 mb-6">
                        <div className="w-10 h-10 bg-slate-800 rounded-full" />
                        <div className="space-y-2">
                            <div className="h-4 w-24 bg-slate-800 rounded" />
                            <div className="h-3 w-12 bg-slate-800 rounded" />
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="h-10 w-full bg-slate-800 rounded-lg" />
                        <div className="grid grid-cols-2 gap-2">
                            <div className="h-10 bg-slate-800 rounded-lg" />
                            <div className="h-10 bg-slate-800 rounded-lg" />
                        </div>
                        <div className="h-4 w-1/2 bg-slate-800 rounded mx-auto mt-2" />
                    </div>
                </div>
            ))}
        </>
    );
};
