'use client';

import { motion } from "framer-motion";
import Image from "next/image";

interface AlbumGridProps {
    images: string[];
    title: string;
}

export default function AlbumGrid({ images, title }: AlbumGridProps) {
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
        <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
            {images.length > 0 ? (
                images.map((image, index) => (
                    <motion.div
                        key={image}
                        variants={itemVariants}
                        className="relative group aspect-4/5 bg-gray-900 rounded-lg overflow-hidden cursor-zoom-in"
                    >
                        <Image
                            src={image}
                            alt={`${title} - Foto ${index + 1}`}
                            fill
                            className="object-cover transition-transform duration-700 group-hover:scale-110"
                            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300"></div>
                    </motion.div>
                ))
            ) : (
                <div className="col-span-full py-20 text-center">
                    <p className="text-xl text-foreground/60">
                        Nenhuma foto encontrada neste álbum.
                    </p>
                    <p className="text-sm text-foreground/40 mt-2">
                        Adicione fotos na pasta pública correspondente.
                    </p>
                </div>
            )}
        </motion.div>
    );
}
