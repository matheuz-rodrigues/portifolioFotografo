import fs from 'fs';
import path from 'path';

const ALBUMS_DIR = path.join(process.cwd(), 'public/albums');

export interface Album {
    slug: string;
    title: string;
    coverImage: string;
    imageCount: number;
}

export function getAlbums(): Album[] {
    if (!fs.existsSync(ALBUMS_DIR)) {
        return [];
    }

    const dirs = fs.readdirSync(ALBUMS_DIR, { withFileTypes: true })
        .filter(dirent => dirent.isDirectory())
        .map(dirent => dirent.name);

    return dirs.map(slug => {
        const albumPath = path.join(ALBUMS_DIR, slug);
        const files = fs.existsSync(albumPath)
            ? fs.readdirSync(albumPath).filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file))
            : [];

        // Tenta encontrar cover.jpg ou usa a primeira imagem
        let coverImage = files.find(f => f.toLowerCase() === 'cover.jpg' || f.toLowerCase() === 'cover.png');
        if (!coverImage && files.length > 0) {
            coverImage = files[0];
        }

        // Formata o título: "casamento-maria-joao" -> "Casamento Maria Joao"
        const title = slug
            .split('-')
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(' ');

        return {
            slug,
            title,
            coverImage: coverImage ? `/albums/${slug}/${coverImage}` : '/placeholder.jpg', // Fallback se não tiver imagem
            imageCount: files.length
        };
    });
}

export function getAlbumImages(slug: string): string[] {
    const albumPath = path.join(ALBUMS_DIR, slug);

    if (!fs.existsSync(albumPath)) {
        return [];
    }

    return fs.readdirSync(albumPath)
        .filter(file => /\.(jpg|jpeg|png|webp)$/i.test(file) && !file.toLowerCase().includes('cover.'))
        .map(file => `/albums/${slug}/${file}`);
}
