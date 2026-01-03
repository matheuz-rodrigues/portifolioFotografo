# Portfólio Premium para Fotógrafos 📸

> "Eternizando momentos com tecnologia de ponta."

Bem-vindo ao repositório deste **Portfólio para Fotógrafos**, um projeto desenvolvido para unir design sofisticado, performance extrema e facilidade de gestão de conteúdo. Este site não é apenas uma vitrine de fotos, mas uma experiência imersiva construída com as tecnologias web mais modernas de 2025.

![Project Banner](/public/image.png)    

## ✨ Destaques do Projeto

### 🎨 Design & UX Premium
- **Estética Cinematográfica**: Baseado em uma paleta Dark Mode com gradientes sutis (`bg-linear-to-br`) e efeitos de vidro (glassmorphism), focado em valorizar cada imagem.
- **Animações Fluidas**: Cada elemento entra em cena com uma coreografia visual (Staggered Animations) powered by [Framer Motion](https://www.framer.com/motion/). Títulos, textos e cards possuem movimentos naturais de física.
- **Micro-interações**: Botões e Cards reagem ao toque e hover com feedbacks táteis e visuais elegantes.
- **Scroll Reveal**: As seções se revelam suavemente conforme o usuário navega, criando uma narrativa contínua.

### ⚡ Engenharia & Performance
- **Next.js 16 (App Router)**: Framework full-stack utilizando Server Components e as novas features do React 19 para performance máxima e SEO otimizado.
- **Tailwind CSS v4**: A mais nova versão do framework, utilizando o motor `oxide` para builds instantâneos e nova sintaxe de gradientes e aninhamento CSS nativo.
- **File-System Routing**: Sistema inteligente de álbuns onde a estrutura de pastas dita o conteúdo. Sem banco de dados complexo, apenas arraste suas pastas de fotos para `public/albums` e o site se atualiza magicamente.
- **Static Export**: Configurado para rodar 100% estático (`output: 'export'`), permitindo hospedagem gratuita e ultrarrápida.
- **TypeScript**: Código robusto, tipado e seguro.

## 🛠️ Arquitetura Inteligente

O projeto utiliza uma abordagem híbrida inteligente para tirar o melhor dos dois mundos (Server e Client):

1.  **Lib de Álbuns (Node.js/Server)**:
    -   Lê o sistema de arquivos local (`fs`).
    -   Gera rotas dinâmicas automaticamente (`generateStaticParams`).
    -   Processa metadados dos álbuns.

2.  **Componentes Interativos (Client Components)**:
    -   Isolados com a diretiva `'use client'` do Next.js.
    -   Responsáveis apenas pela interatividade e animações (Framer Motion).
    -   Isso evita conflitos de SSR e garante hidratação perfeita.

## 🚀 Como Executar

Clone o projeto e sinta a potência:

```bash
# Instalar dependências
npm install

# Rodar em modo de desenvolvimento (Hot Reloading)
npm run dev

# Gerar versão de produção estática (super otimizada)
npm run build
```

Acesse [http://localhost:3000](http://localhost:3000) e veja a mágica acontecer.

## 📂 Estrutura de Pastas (CMS via Arquivos)

Gerenciar o conteúdo é tão simples quanto organizar arquivos no seu computador:

```text
public/
  albums/
    ├── casamento-praia/    -> Cria automaticamente a página /album/casamento-praia
    │   ├── cover.jpg       -> Capa do álbum
    │   ├── foto1.jpg
    │   └── foto2.jpg
    ├── ensaio-urbano/      -> Outro álbum...
```

---

<div align="center">
  Desenvolvido com ❤️ e ☕ por <a href="https://matheuz-rodrigues.github.io/" target="_blank">Matheuz Rodrigues</a>
</div>
