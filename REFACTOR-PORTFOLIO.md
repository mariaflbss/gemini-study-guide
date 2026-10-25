# Refatoração do portfólio — V4

## Direção desta versão

A V4 preserva a arquitetura de conteúdo e a jornada já aprovada, mas refina a experiência visual e corrige pontos apontados na revisão.

### Home
- O hero deixou de usar uma headline grande como peça dominante.
- O prompt passou a ser o elemento principal da primeira tela.
- O visitante pode escrever diretamente no campo.
- Conforme o texto muda, a interface identifica sinais de **contexto, objetivo, restrições e formato**.
- A barra de clareza e os sinais usam as quatro cores como linguagem de estado, não como decoração.
- A estrutura mantém os botões para jornada e projetos.

### Documentação
- `/guia-gemini` agora é somente um índice de documentação técnica.
- Foram removidos do índice visual os showcases e seções que misturavam documentação com experiência/projeto.
- Os arquivos técnicos continuam disponíveis individualmente em `/guia-gemini/docs/:slug`.
- Projetos, jornada e evidências permanecem em suas áreas próprias.

### Embaixadora Estudantil do Google
- A página da jornada foi preservada.
- A trilha vertical foi corrigida para que a linha fique atrás dos nós, sem atravessar o conteúdo do círculo.
- O progresso da trilha agora é calculado em pixels considerando o início e o fim úteis da linha.
- Os nós usam um anel com as quatro cores e núcleo legível.

## Conteúdo
Não foram inventadas atividades práticas ou evidências. A documentação das semanas continua separada da evidência que poderá ser adicionada posteriormente.

## Validação
O ambiente de execução não conseguiu concluir `npm ci` dentro do limite de tempo disponível. Portanto, esta versão não deve ser apresentada como build validado neste ambiente. Na máquina local, executar:

```bash
npm ci
npm run build
npm run dev
```

## V5 — revisão da Home e projetos

- A Home deixou de usar hero dividido em duas colunas como elemento principal. O título ficou menor e o laboratório de prompt passou a ocupar o centro da primeira experiência.
- O laboratório agora reage ao texto digitado e identifica visualmente Contexto, Objetivo, Restrições e Formato, usando as quatro cores como sinais de estado.
- Removido o contador de "clareza" e a linguagem de auditoria/nota; o componente passou a representar construção de uma ideia.
- A seção de projetos da Home não exibe mais conteúdos com campos `[ADICIONAR ...]`. Enquanto não houver projeto prático documentado de ponta a ponta, mostra um estado honesto de construção.
- A página de Projetos aplica a mesma regra e não publica placeholders como se fossem trabalhos concluídos.
- A timeline da jornada recebeu z-index explícito para manter os nós acima da linha vertical e evitar o efeito visual de linha atravessando/cortando o círculo.


## V6 — Refinamento da Home
- Hero inicial atualizado para uma frase curta e autoral: “Um espaço para aprender, experimentar e transformar estudo em prática.”
- Removida a grande forma circular/órbita atrás do hero.
- Removida a faixa multicolorida no topo do componente de prompt.
- Prompt atualizado para cinco blocos: Papel / atuação, Contexto, Tarefa, Restrições e Formato.
- Contador e diagnóstico ajustados para 5 elementos.
- Texto do hero reduzido para preservar hierarquia visual.
