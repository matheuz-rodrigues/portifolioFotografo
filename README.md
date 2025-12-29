# Site de Fotógrafo - Next.js + Tailwind CSS 3

Este é um projeto criado com [Next.js](https://nextjs.org) e configurado para exportação estática com Tailwind CSS 3.

## 📁 Estrutura do Projeto

```
fotografo/
├── src/
│   ├── app/              # App Router do Next.js
│   │   ├── layout.tsx    # Layout raiz
│   │   ├── page.tsx      # Página inicial
│   │   └── globals.css   # Estilos globais com Tailwind
│   ├── components/       # Componentes reutilizáveis
│   └── styles/          # Estilos adicionais
├── public/              # Arquivos estáticos (imagens, etc)
└── out/                 # Pasta gerada após o build (export estático)
```

## 🚀 Como Usar

### Desenvolvimento
```bash
npm run dev
```
Abre o servidor de desenvolvimento em [http://localhost:3000](http://localhost:3000)

### Build Estático
```bash
npm run export
```
Gera os arquivos estáticos na pasta `out/` que podem ser hospedados em qualquer servidor web.

### Visualizar Build Local
```bash
npx serve out
```

## 🎨 Tecnologias

- **Next.js 16.1** - Framework React com App Router
- **React 19** - Biblioteca UI
- **Tailwind CSS 4** - Framework CSS utilitário
- **TypeScript** - Tipagem estática
- **Export Estático** - Site totalmente estático (sem servidor Node.js necessário)

## 📝 Próximos Passos

1. Personalize o `src/app/layout.tsx` com seus metadados
2. Crie componentes em `src/components/`
3. Adicione suas imagens em `public/`
4. Edite `src/app/page.tsx` para criar sua página inicial
5. Execute `npm run export` para gerar o site estático

## 🌐 Hospedagem

O site estático gerado pode ser hospedado em:
- GitHub Pages
- Netlify
- Vercel
- Qualquer servidor web estático
