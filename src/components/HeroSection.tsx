'use client';

import { motion } from "framer-motion";

export default function HeroSection() {
    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Background com gradiente animado */}
            <div className="absolute inset-0 bg-linear-to-br from-primary-950 via-black to-black"></div>

            {/* Efeito de luz */}
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.2, 0.3, 0.2]
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut"
                }}
                className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-primary-600/20 rounded-full blur-[120px]"
            />

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                <div className="space-y-6 sm:space-y-8">
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: "easeOut" }}
                        className="text-4xl sm:text-6xl md:text-8xl font-bold leading-tight"
                    >
                        <span className="block gradient-text mb-2 sm:mb-4">Eternizando</span>
                        <span className="block text-foreground">Sua História</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 0.4, duration: 0.8 }}
                        className="text-base sm:text-xl md:text-2xl text-foreground/70 max-w-3xl mx-auto px-4"
                    >
                        Fotografia autoral que revela a essência e a emoção de cada momento especial
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.6, duration: 0.8 }}
                        className="flex flex-col sm:flex-row gap-4 sm:gap-6 justify-center pt-4 sm:pt-8 px-4"
                    >
                        <a
                            href="#portfolio"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 bg-linear-to-r from-primary-600 to-primary-500 rounded-lg font-semibold hover:shadow-lg hover:shadow-primary-500/50 transition-all duration-300 hover:-translate-y-1 text-sm sm:text-base"
                        >
                            Ver Portfolio
                        </a>
                        <a
                            href="#contato"
                            className="w-full sm:w-auto px-6 sm:px-8 py-3 sm:py-4 border-2 border-primary-500 rounded-lg font-semibold hover:bg-primary-500/10 transition-all duration-300 text-sm sm:text-base"
                        >
                            Solicitar Orçamento
                        </a>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
