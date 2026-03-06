import React from 'react';
import { AlertCircle, RefreshCcw } from 'lucide-react';

interface ErrorAlertProps {
    message: string;
    onRetry: () => void;
}

export const ErrorAlert: React.FC<ErrorAlertProps> = ({ message, onRetry }) => {
    return (
        <div className="bg-rose-500/10 border border-rose-500/20 rounded-xl p-8 text-center max-w-2xl mx-auto shadow-2xl backdrop-blur-sm">
            <div className="bg-rose-500/20 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4 border border-rose-500/30">
                <AlertCircle className="text-rose-500" size={32} />
            </div>
            <h2 className="text-xl font-bold text-white mb-2">¡Ups! Algo salió mal</h2>
            <p className="text-rose-200/70 mb-6 text-sm leading-relaxed">{message}</p>
            <button
                onClick={onRetry}
                className="inline-flex items-center gap-2 bg-rose-600 hover:bg-rose-500 text-white px-6 py-2.5 rounded-lg font-bold transition-all active:scale-95 shadow-lg shadow-rose-900/20"
            >
                <RefreshCcw size={18} />
                Reintentar conexión
            </button>
        </div>
    );
};
