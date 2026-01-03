import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Image from "next/image";
import Link from "next/link";
import { getAlbumImages, getAlbums } from "@/lib/albums";
import AlbumGrid from "@/components/AlbumGrid";

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
                    <AlbumGrid images={images} title={title} />
                </div>
            </main>

            <Footer />
        </div>
    );
}
