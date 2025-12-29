import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getAlbumImages, getAlbums } from "@/lib/albums";

export function generateStaticParams() {
    const albums = getAlbums();
    return albums.map((album) => ({
        slug: album.slug,
    }));
}


interface PageProps {
    params: Promise<{ slug: string }>;
}

export default async function AlbumPage({ params }: PageProps) {
    const { slug } = await params;
    const images = getAlbumImages(slug);

    // Formata título
    const title = slug
        .split('-')
        .map(word => word.charAt(0).toUpperCase() + word.slice(1))
        .join(' ');

    return (
        <div className="min-h-screen flex flex-col bg-black">
            <Header />

            <main className="flex-1 pt-32 pb-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Breadcrumb e Título */}
                    <div className="mb-12 animate-fade-in-up">
                        <Link
                            href="/#portfolio"
                            className="inline-flex items-center text-primary-400 hover:text-primary-300 transition-colors mb-4 group"
                        >
                            <svg className="w-5 h-5 mr-2 transform group-hover:-translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                            </svg>
                            Voltar ao Portfolio
                        </Link>

                        <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">
                            {title}
                        </h1>
                        <div className="h-1 w-20 bg-linear-to-r from-primary-600 to-primary-500 rounded-full"></div>
                    </div>

                    {/* Grid de Fotos */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in delay-200">
                        {images.length > 0 ? (
                            images.map((image, index) => (
                                <div
                                    key={image}
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
                                </div>
                            ))
                        ) : (
                            <div className="col-span-full py-20 text-center">
                                <p className="text-xl text-foreground/60">
                                    Nenhuma foto encontrada neste álbum.
                                </p>
                                <p className="text-sm text-foreground/40 mt-2">
                                    Adicione fotos em public/albums/{slug}
                                </p>
                            </div>
                        )}
                    </div>
                </div>
            </main>

            <Footer />
        </div>
    );
}
