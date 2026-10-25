# Laboratório pessoal + jornada como Embaixadores Estudantis do Google

Laboratório pessoal de aprendizagem e experimentação em tecnologia, com uma área dedicada à
jornada semana a semana no programa **Embaixadores Estudantis do Google** e uma documentação central
sobre o ecossistema Gemini (`/guia-gemini`). Identidade visual: superfícies claras, gradiente
azul → roxo → rosa → ciano, Space Grotesk e Inter.

> Este é um projeto independente e educacional. Não é um site oficial do Google e não é
> afiliado, endossado ou patrocinado pela Google.

A ideia central: **aprender → explorar → experimentar → aplicar → construir → documentar**.

## Como executar

```bash
npm install
npm run dev
```

O site abre em `http://localhost:5173`.

```bash
npm run build     # tsc + vite build + pré-renderização das rotas
npm run preview   # serve a pasta dist/
npm run check:placeholders   # lista tudo que ainda está como [ADICIONAR ...]
```

## Rotas

| Rota | Conteúdo |
| --- | --- |
| `/` | Home: apresentação, caminho de aprendizagem, projetos em destaque, jornada Ambassador |
| `/sobre` | Bio, método (seis etapas), habilidades |
| `/projetos` e `/projetos/:slug` | Lista com filtros e página de cada projeto (problema → objetivo → ferramenta → processo → prompts → resultado) |
| `/evolucao` | Reflexão e próximos passos de todas as semanas, mais recente primeiro |
| `/embaixadora-estudantil-google` | Timeline interativa das semanas |
| `/embaixadora-estudantil-google/semana-N` | Página de cada semana (gerada a partir de Markdown) |
| `/contato` | GitHub, LinkedIn e e-mail |
| `/guia-gemini` e `/guia-gemini/docs/:slug` | Documentação central: guia visual + documentação técnica renderizada no site |

## Estrutura

```text
content/                  Conteúdo, separado da interface
├── site.json             Nome, bio, links, habilidades, método
├── ambassador/           week-01.md … week-09.md (+ _template.md)
└── projects/             um .md por projeto (+ _template.md)
docs/                     Documentação técnica do ecossistema Gemini (Markdown)
scripts/
├── prerender.mjs         Gera HTML por rota (Open Graph), sitemap.xml e robots.txt
└── check-placeholders.mjs
src/
├── lib/                  Carregamento do Markdown, tipos, hooks
├── pages/                Uma página por rota
└── components/
    ├── layout/           Nav (com menu mobile), Footer, Layout
    ├── home/             Seções da Home
    ├── ambassador/       Timeline, desafios, módulos interativos, masterclass
    ├── projects/         Cards e detalhes de projeto
    ├── markdown/         Renderizador (tabelas, código com cópia, callouts)
    ├── guia/             Seções da documentação central (guia visual do ecossistema Gemini)
    └── ui/               Botões, links, SEO, cabeçalho de página
```

## Como adicionar uma nova semana

1. Copie `content/ambassador/_template.md` para `content/ambassador/week-N.md`.
2. Preencha o frontmatter (tema, ferramentas, desafios) e as seções em Markdown.
3. Pronto: a rota `/embaixadora-estudantil-google/semana-6`, o card na timeline, o rodapé e o
   sitemap são gerados automaticamente.

O corpo do arquivo usa estes títulos de nível 2, nesta ordem: `Contexto`, `Aprendizados`,
`Experimentação`, `Aplicação prática`, `Reflexão`, `Próximos passos`. Desafios, ferramentas,
projeto relacionado e evidências vêm do frontmatter.

### Módulos visuais dos desafios

Cada desafio pode ter `modules` no frontmatter. Tipos disponíveis:

- `prompt-compare`: prompt original × versão melhorada, com lentes de auditoria e botão de copiar
- `flow`: processo em etapas clicáveis (`variant: sequence` ou `levels`)
- `sentence`: frase com lacunas (ex.: "Eu tenho dificuldade para entender ___ porque ___")
- `routes`: situação + objetivo → rotas → sigla ROTA
- `takeaways`: quadro "O que eu levo desta semana"

A masterclass (Semana 4) usa o campo `masterclass` do frontmatter.

### Evidências

Coloque imagens em `public/ambassador/semana-N/` e liste em `evidence`:

```yaml
evidence:
  - type: image        # image | video | link | github | demo
    label: Painel criado no Canvas
    url: /ambassador/semana-2/painel.png
    alt: Descrição da imagem para leitores de tela
```

## Como adicionar um projeto

1. Copie `content/projects/_template.md` para `content/projects/nome-do-projeto.md`.
2. Preencha problema, objetivo, ferramenta, processo, prompts usados, resultado, links e aprendizado.
3. Se o projeto nasceu de uma semana do programa, use `origin: google-student-ambassador` e
   `week: 2`. A página do projeto mostra "Projeto desenvolvido durante a Semana 2 do Google
   Student Ambassador" com link para a semana, e pode ser compartilhada sozinha no LinkedIn.

## Registro de evidências

A documentação da jornada pode existir mesmo quando não houve uma execução prática individual.
Por isso, as semanas podem registrar o conteúdo técnico, a metodologia e as aplicações sem afirmar que um desafio foi realizado.

Evidências só devem ser adicionadas quando houver um registro real — por exemplo, imagem, vídeo, link, repositório ou demonstração.
Projetos mais relevantes podem receber uma página própria em `content/projects/` em vez de serem repetidos em todas as semanas.

## SEO e compartilhamento no LinkedIn

- `npm run build` pré-renderiza um `index.html` por rota, com `title`, `description`,
  Open Graph e `canonical` corretos. Isso importa porque o LinkedIn não executa JavaScript.
- Imagem de compartilhamento padrão: `public/assets/og-image.png` (1200 × 630). Projetos
  usam a própria capa (`cover`) quando existe.
- A URL base fica em `content/site.json` (`url`). Altere se o domínio mudar.
- O build também gera `sitemap.xml`, `robots.txt` e `404.html` (fallback de SPA).
- Se compartilhar e o LinkedIn mostrar um cartão antigo, atualize o cache em
  <https://www.linkedin.com/post-inspector/>.

## Acessibilidade

Navegação por teclado, foco visível, link "Ir para o conteúdo", menu mobile com `Escape`,
botões com `aria-pressed`/`aria-expanded`, regiões `aria-live` nos módulos interativos e
suporte a `prefers-reduced-motion`.

## Hospedagem

- **Vercel:** `vercel.json` já reescreve rotas desconhecidas para `index.html`.
- **GitHub Pages:** o workflow em `.github/workflows/deploy.yml` publica `dist/`, que inclui
  `404.html`. Como o site usa `base: "/"`, funciona em domínio próprio ou em `usuario.github.io`;
  em um repositório de projeto, ajuste `base` em `vite.config.ts`.

## Tecnologias

React 18, TypeScript, Vite, React Router, react-markdown + remark-gfm, `yaml` (frontmatter),
CSS puro com variáveis de design e fontes auto-hospedadas (Fontsource). Os elementos gráficos são
SVGs originais; nenhum ícone ou imagem oficial do Google foi reproduzido.

## Documentação técnica (ecossistema Gemini)

Os arquivos em [`docs/`](./docs) continuam sendo a fonte da documentação e agora também abrem
dentro do site em `/guia-gemini/docs/<arquivo>`. A lista de fontes oficiais está em
[`docs/referencias.md`](./docs/referencias.md).

## Observações

- Nenhuma funcionalidade, API, arquitetura interna, métrica ou experiência foi inventada.
  Onde a documentação oficial não detalha um aspecto, isso é dito explicitamente nos docs.
- Marcas: Google, Gemini, Gemini Notebook e Gemini Canvas são marcas registradas da Google LLC.
