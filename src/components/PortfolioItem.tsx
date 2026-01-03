'use client';

import Link from 'next/link';
import { useState } from 'react';

interface PortfolioItemProps {
    id: number;
}

export default function PortfolioItem({ id }: PortfolioItemProps) {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className="relative aspect-square overflow-hidden rounded-xl group cursor-pointer hover-lift"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >
            {/* Placeholder com gradiente */}
            <div className={`absolute inset-0 bg-linear-to-br from-primary-900 via-primary-800 to-black transition-all duration-500 ${isHovered ? 'scale-110' : 'scale-100'
                }`}>
                <div className="absolute inset-0 flex items-center justify-center">
                    <span className="text-6xl font-bold text-primary-300/20">{id}</span>
                </div>
            </div>

            {/* Overlay com informações */}
            <div className={`absolute inset-0 bg-linear-to-t from-black via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-500 flex flex-col justify-end p-6`}>
                <h3 className="text-xl font-bold mb-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    Foto {id}
                </h3>
                <p className="text-sm text-foreground/70 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500 delay-75">
                    Fotografia Premium 2024
                </p>
            </div>

            {/* Borda animada */}
            <div className="absolute inset-0 border-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-xl transition-all duration-500"></div>
        </div>
    );
}
