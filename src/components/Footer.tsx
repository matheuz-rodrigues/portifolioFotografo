// Componente de exemplo - Footer
export default function Footer() {
    return (
        <footer className="bg-linear-to-b from-black to-primary-950 border-t border-primary-900/30 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center space-y-4">
                    <p className="text-foreground/60 text-base">
                        &copy; {new Date().getFullYear()} - WG Filmes & Fotografia. Todos os direitos reservados
                    </p>
                    <p className="text-foreground/40 text-sm">
                        Desenvolvido com ❤️ por <a href="https://matheuz-rodrigues.github.io/" target="_blank" rel="noopener noreferrer" className="underline underline-offset-4 decoration-primary-500/30 hover:decoration-primary-500 hover:text-primary-400 transition-all">Matheuz Rodrigues</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
