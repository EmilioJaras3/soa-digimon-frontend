import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
    title: 'Digi API - Digimon Explorer',
    description: 'Dashboard SOA para el consumo de la Digimon API',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="es" className="dark">
            <body className={`${inter.className} min-h-screen bg-slate-950 text-slate-200 antialiased`}>
                {children}
            </body>
        </html>
    );
}
