# Notebook + Canvas

## Dois produtos, propósitos diferentes

O Gemini Notebook e o Gemini Canvas são produtos distintos dentro do
ecossistema Gemini, com propósitos e comportamentos técnicos diferentes:

| | Gemini Notebook | Gemini Canvas |
|---|---|---|
| Propósito | Compreender material existente | Criar e editar novo conteúdo |
| Entrada principal | Fontes fornecidas pelo usuário | Um prompt descrevendo o que criar |
| Comportamento padrão | Ancorado em fontes (grounding) | Geração livre, refinada por edição |
| Saída típica | Respostas citadas, resumos, formatos de estudo | Documentos, código, slides, protótipos |
| Verificabilidade | Alta — cada afirmação pode ser rastreada a uma fonte | Depende de revisão manual do artefato gerado |

Essa tabela descreve tendências de uso documentadas, não uma separação
absoluta e imutável — os dois produtos evoluem, e certas funcionalidades
podem se sobrepor com o tempo.

## Um fluxo combinado (metodologia deste projeto)

Um possível fluxo de trabalho que combina os dois produtos, usado como
estrutura conceitual neste projeto de portfólio:

```text
Pesquisa
   |
Contextualização
   |
Compreensão
   |
Síntese
   |
Criação
   |
Artefato
```

Mapeando cada etapa:

- **Pesquisa → Contextualização → Compreensão → Síntese**: normalmente o
  domínio do Gemini Notebook. O usuário reúne fontes, faz perguntas, e
  chega a uma compreensão sintetizada do material — por exemplo, um
  resumo estruturado ou um conjunto de pontos-chave, com citações.
- **Criação → Artefato**: normalmente o domínio do Gemini Canvas. A
  síntese produzida na etapa anterior vira a base de um novo documento,
  protótipo ou peça de conteúdo, que pode ser iterado diretamente no
  Canvas.

## O que é característico das ferramentas e o que é metodologia

É importante separar dois tipos de afirmação neste documento:

1. **Características documentadas dos produtos**: o Gemini Notebook é
   projetado para ancorar respostas em fontes e fornecer citações; o
   Gemini Canvas é projetado para criar e editar artefatos em um espaço
   dedicado. Essas são características publicamente documentadas pelo
   Google.
2. **Metodologia de uso proposta por este projeto**: a ideia de um fluxo
   linear "Pesquisa → Contextualização → Compreensão → Síntese → Criação
   → Artefato" mapeando exatamente Notebook e depois Canvas é uma forma
   didática de explicar como as ferramentas *podem* se complementar — não
   uma funcionalidade oficial de integração entre os dois produtos, nem
   uma sequência obrigatória. Na prática, um usuário pode ir e voltar
   entre exploração e criação livremente, ou usar apenas uma das duas
   ferramentas.

## Exemplo aplicado

Um pesquisador estudando um tema específico poderia:

1. Reunir artigos relevantes em um notebook do Gemini Notebook.
2. Fazer perguntas comparativas entre os artigos, obtendo respostas
   citadas.
3. Gerar um resumo estruturado dos principais achados (um formato de
   "Studio" do Notebook).
4. Levar esse resumo para o Gemini Canvas e pedir para transformá-lo em
   um rascunho de artigo, uma apresentação de slides, ou uma página web
   simples apresentando os achados.
5. Refinar o artefato diretamente no Canvas, com edições pontuais.

Cada etapa usa a ferramenta mais adequada ao tipo de trabalho cognitivo
envolvido: recuperação e verificação de informação de um lado, produção e
iteração de conteúdo do outro.

## Leitura relacionada

- [`gemini-notebook.md`](./gemini-notebook.md)
- [`gemini-canvas.md`](./gemini-canvas.md)
- [`engenharia-de-prompts.md`](./engenharia-de-prompts.md)
