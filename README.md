# Ecossistema Gemini — projeto de portfólio

Um site pequeno e visualmente cuidado que apresenta três produtos do
ecossistema Google Gemini — **Google Gemini**, **Gemini Notebook** e
**Gemini Canvas** — de forma acessível e curiosa, com uma documentação
técnica separada e aprofundada em Markdown para quem quiser ir além.

> Este é um projeto independente e educacional, desenvolvido para meu portfólio e para compartilhar conhecimentos e aprendizados da minha jornada como Embaixadora Estudantil do Google.
> 
> Meu objetivo é transformar o que venho aprendendo em conteúdos que possam ajudar e inspirar outros estudantes.
>
> Não é um site oficial do Google, e não é afiliado, endossado ou patrocinado pela Google.

## Objetivo

O site (React + TSX) e a documentação (Markdown) têm papéis
deliberadamente separados:

- **Site** → informativo, visual, introdutório. Explica o que cada
  ferramenta é e por que ela é interessante, sem entrar em detalhes
  técnicos profundos.
- **`docs/*.md`** → técnico, aprofundado, com conceitos, limitações e
  referências verificáveis.

A ideia é que alguém entre no site, ache a experiência interessante,
entenda o essencial, e — se quiser se aprofundar — encontre a
documentação técnica em `docs/`.

## Tecnologias utilizadas

- React 18 + TypeScript (TSX)
- Vite como bundler
- CSS puro com variáveis de design (sem framework de UI), para manter a
  identidade visual sob controle total
- Sem dependências de ícones ou animação: os elementos gráficos são SVGs
  originais em `src/components/icons.tsx`, inspirados na linguagem visual
  do Gemini (formas orgânicas, gradientes azul → roxo → rosa → ciano)

## Estrutura do projeto

```text
/
├── src/
│   ├── components/     — um componente por seção da página, com seu CSS
│   ├── App.tsx          — composição das seções
│   └── main.tsx         — ponto de entrada
│
├── public/
│   └── assets/          — favicon e assets estáticos
│
├── docs/                 — documentação técnica em Markdown
│   ├── google-gemini.md
│   ├── gemini-notebook.md
│   ├── gemini-canvas.md
│   ├── grounding-e-fontes.md
│   ├── engenharia-de-prompts.md
│   ├── notebook-e-canvas.md
│   ├── limitacoes-e-confiabilidade.md
│   └── referencias.md
│
├── README.md
└── package.json
```

## Como executar

### Para rodar localmente:

```bash
npm install
npm run dev
```

O site abrirá em `http://localhost:5173`.

Para gerar a versão de produção:

```bash
npm run build
npm run preview
```

### Caso não queira rodar localmente acesse o link do github pages:


## Principais seções do site

1. **Hero** — apresentação do projeto.
2. **Google Gemini** — o que é, multimodalidade, como pode ser usado.
3. **Gemini Notebook** — o conceito de explorar fontes por meio de
   perguntas, com um diagrama de fluxo conceitual.
4. **Gemini Canvas** — o conceito de transformar ideias em artefatos
   editáveis.
5. **Notebook + Canvas** — uma visão conceitual de como as duas
   ferramentas podem representar momentos diferentes de um mesmo
   processo (exploração vs. criação).
6. **Quatro maneiras de usar isso** — exemplos curtos: estudante,
   pesquisa, desenvolvimento, criação.
7. **Quer ir além?** — ponte para a documentação técnica em `docs/`.

## Documentação disponível

Veja a pasta [`docs/`](./docs) para o conteúdo técnico completo:
conceitos, arquitetura conceitual (sempre marcada como simplificação
quando não documentada oficialmente), grounding, engenharia de prompts,
limitações e confiabilidade, e a lista de referências oficiais usadas.

## Referências

A lista completa de fontes oficiais consultadas está em
[`docs/referencias.md`](./docs/referencias.md).

## Créditos

- Identidade visual inspirada na linguagem do ecossistema Gemini (formas
  orgânicas, gradientes fluidos), reinterpretada com elementos gráficos
  originais criados para este projeto — nenhum ícone ou imagem oficial do
  Google foi reproduzido.
- Tipografia: Space Grotesk (títulos) e Inter (texto), via Google Fonts.

## Observações

- Nenhuma funcionalidade, API, arquitetura interna ou métrica foi
  inventada. Onde a documentação oficial não detalha um aspecto, isso é
  dito explicitamente nos arquivos de `docs/`.
