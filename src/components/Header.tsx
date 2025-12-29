'use client';

import { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';

export default function Header() {
    const [scrolled, setScrolled] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);
    const [mounted, setMounted] = useState(false);

    useEffect(() => {
        setMounted(true);
        const handleScroll = () => {
            setScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Bloquear scroll quando menu estiver aberto
    useEffect(() => {
        if (menuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'unset';
        }
    }, [menuOpen]);

    const menuItems = ['Início', 'Portfolio', 'Sobre', 'Contato'];

    const handleMenuClick = () => {
        setMenuOpen(false);
    };

    return (
        <header
            className={`fixed top-0 left-0 right-0 z-[10002] transition-all duration-500 ${scrolled
                ? 'bg-black/80 backdrop-blur-xl shadow-lg shadow-primary-900/20'
                : 'bg-transparent'
                }`}
        >
            <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 relative z-[10003]">
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div className="flex items-center gap-3 animate-fade-in">
                        <h1 className="text-xl sm:text-2xl font-bold">
                            <span className="gradient-text">WG Filmes & Fotografia</span>
                        </h1>
                    </div>

                    {/* Menu Desktop */}
                    <ul className="hidden md:flex gap-8 animate-fade-in delay-200">
                        {menuItems.map((item, index) => {
                            const href = item === 'Início' ? '#' : `#${item.toLowerCase()}`;
                            return (
                                <li key={item} className={`delay-${(index + 2) * 100}`}>
                                    <a
                                        href={href}
                                        className="relative group text-sm font-medium tracking-wider uppercase"
                                    >
                                        <span className="relative z-10 transition-colors duration-300 group-hover:text-primary-300">
                                            {item}
                                        </span>
                                        <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary-500 to-primary-300 group-hover:w-full transition-all duration-500"></span>
                                    </a>
                                </li>
                            );
                        })}
                    </ul>

                    {/* Botão Hamburguer Mobile */}
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="md:hidden w-10 h-10 flex flex-col justify-center items-center gap-1.5 relative z-[10002]"
                        aria-label="Menu"
                    >
                        <span className={`w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'bg-white rotate-45 translate-y-2' : 'bg-foreground'}`}></span>
                        <span className={`w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'bg-white opacity-0' : 'bg-foreground'}`}></span>
                        <span className={`w-6 h-0.5 transition-all duration-300 ${menuOpen ? 'bg-white -rotate-45 -translate-y-2' : 'bg-foreground'}`}></span>
                    </button>
                </div>
            </nav>

            {/* Menu Mobile Portal - Renderizado direto no Body */}
            {mounted && createPortal(
                <div
                    className={`md:hidden fixed inset-0 bg-black/95 backdrop-blur-xl z-[10001] transition-all duration-500 flex flex-col items-center justify-center ${menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
                    style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh' }}
                >
                    <ul className="flex flex-col items-center gap-8">
                        {menuItems.map((item, index) => {
                            const href = item === 'Início' ? '#' : `#${item.toLowerCase()}`;
                            return (
                                <li
                                    key={item}
                                    className={`transform transition-all duration-500 ${menuOpen ? 'translate-y-0 opacity-100' : 'translate-y-8 opacity-0'}`}
                                    style={{ transitionDelay: `${index * 100}ms` }}
                                >
                                    <a
                                        href={href}
                                        onClick={handleMenuClick}
                                        className="text-3xl font-bold uppercase tracking-wider text-white hover:text-primary-400 transition-colors"
                                    >
                                        {item}
                                    </a>
                                </li>
                            );
                        })}
                    </ul>
                </div>,
                document.body
            )}
        </header>
    );
}
