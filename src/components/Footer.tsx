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
                        Desenvolvido com ❤️ por <a href="https://matheuz-rodrigues.github.io/" target="_blank" rel="noopener noreferrer" className="hover:text-primary-400 transition-colors">Matheuz Rodrigues</a>
                    </p>
                </div>
            </div>
        </footer>
    );
}
