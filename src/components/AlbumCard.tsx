import Link from 'next/link';
import Image from 'next/image';

interface AlbumCardProps {
    title: string;
    coverImage: string;
    slug: string;
    imageCount: number;
}

export default function AlbumCard({ title, coverImage, slug, imageCount }: AlbumCardProps) {
    return (
        <Link href={`/album/${slug}`} className="block group">
            <div className="relative aspect-4/5 overflow-hidden rounded-xl bg-primary-950">
                {/* Imagem de Capa */}
                <div className="absolute inset-0">
                    <Image
                        src={coverImage}
                        alt={title}
                        fill
                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                        sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    />
                </div>

                {/* Overlay com Gradiente */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent opacity-60 group-hover:opacity-40 transition-opacity duration-500" />

                {/* Informações Hover */}
                <div className="absolute inset-0 flex flex-col justify-end p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                    <h3 className="text-2xl font-bold text-white mb-2 drop-shadow-md">
                        {title}
                    </h3>
                    <p className="text-primary-300 font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                        {imageCount} fotos
                    </p>
                </div>

                {/* Borda Animada */}
                <div className="absolute inset-0 border-2 border-primary-500/0 group-hover:border-primary-500/50 rounded-xl transition-all duration-500 pointer-events-none" />
            </div>
        </Link>
    );
}
