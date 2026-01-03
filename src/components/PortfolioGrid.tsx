'use client';

import { motion } from "framer-motion";
import AlbumCard from "@/components/AlbumCard";
import MotionWrapper from "@/components/MotionWrapper";
import { Album } from "@/lib/albums";

interface PortfolioGridProps {
    albums: Album[];
}

export default function PortfolioGrid({ albums }: PortfolioGridProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 20 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.6 }
        }
    };

    return (
        <section id="portfolio" className="py-20 md:py-32 bg-linear-to-b from-black via-primary-950/30 to-black">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <MotionWrapper className="text-center mb-16">
                    <h2 className="text-5xl font-bold mb-4">
                        <span className="gradient-text">Portfolio</span>
                    </h2>
                    <p className="text-xl text-foreground/70">
                        Olhares que transformam instantes em memórias
                    </p>
                </MotionWrapper>

                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
                >
                    {albums.length > 0 ? (
                        albums.map((album) => (
                            <motion.div key={album.slug} variants={itemVariants}>
                                <AlbumCard
                                    title={album.title}
                                    slug={album.slug}
                                    coverImage={album.coverImage}
                                    imageCount={album.imageCount}
                                />
                            </motion.div>
                        ))
                    ) : (
                        <div className="col-span-full text-center text-foreground/50 py-12">
                            <p className="text-xl">Nenhum álbum encontrado. Crie pastas em public/albums para começar.</p>
                        </div>
                    )}
                </motion.div>
            </div>
        </section>
    );
}
