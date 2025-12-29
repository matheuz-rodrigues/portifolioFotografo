// Componente de exemplo - Footer
export default function Footer() {
    return (
        <footer className="bg-gradient-to-b from-black to-primary-950 border-t border-primary-900/30 mt-auto">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="text-center space-y-4">
                    <p className="text-foreground/60 text-sm">
                        &copy; {new Date().getFullYear()} - WG Filmes & Fotografia. Todos os direitos reservados
                    </p>
                   
                </div>
            </div>
        </footer>
    );
}
