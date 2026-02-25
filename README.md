# Ghibili List

Uma aplicação web para explorar filmes do Studio Ghibli, desenvolvida com React, TypeScript e Vite.

## 🎬 Sobre o Projeto

Ghibili List é uma aplicação que permite aos usuários visualizar uma lista de filmes produzidos pelo Studio Ghibli, com a possibilidade de ver detalhes específicos sobre cada filme. Os dados são obtidos através da [API Ghibli](https://ghibliapi.vercel.app/).

## 🛠️ Tecnologias Utilizadas

- **React 19** - Biblioteca para construção de interfaces
- **TypeScript** - Tipagem estática para JavaScript
- **Vite** - Build tool rápido e moderno
- **React Router 7** - Gerenciamento de rotas
- **TanStack React Query** - Gerenciamento de estado e cache de dados
- **Tailwind CSS 4** - Framework CSS utilitário
- **ESLint** - Linter para código JavaScript/TypeScript

## 📋 Pré-requisitos

- Node.js (versão 16 ou superior)
- npm ou yarn

## 🚀 Como Executar

### Instalação

```bash
npm install
```

### Desenvolvimento

```bash
npm run dev
```

A aplicação estará disponível em `http://localhost:5173` (padrão do Vite).

### Build

```bash
npm run build
```

### Preview de Produção

```bash
npm run preview
```

### Linter

```bash
npm run lint
```

## 📁 Estrutura do Projeto

```
src/
├── components/
│   └── Films/          # Componente de Filmes
├── hooks/
│   ├── useFilms.ts     # Hook para buscar lista de filmes
│   └── useFilmDetails.ts # Hook para detalhes do filme
├── pages/
│   ├── FilmsDetails/   # Página de detalhes do filme
│   └── homePage/       # Página inicial
├── routes/
│   └── index.tsx       # Configuração de rotas
├── styles/
│   └── globals.css     # Estilos globais
├── types/
│   └── types.ts        # Definições de tipos TypeScript
├── App.tsx             # Componente raiz
└── main.tsx            # Ponto de entrada
```

## 🔄 Fluxo de Dados

A aplicação utiliza:

- **React Query** para gerenciar requisições e cache de dados da API Ghibli
- **React Router** para navegação entre páginas
- **Hooks customizados** (`useFilms`, `useFilmDetails`) para abstrair a lógica de busca de dados

## 📝 Licença

Este projeto é de uso livre.
