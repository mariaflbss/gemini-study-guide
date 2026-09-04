# Gemini Notebook

> Documentação técnica de aprofundamento. Para uma introdução visual, veja
> a seção "Gemini Notebook" no site.

## O que é

Gemini Notebook é um produto de pesquisa e leitura assistida por IA,
anteriormente conhecido como **NotebookLM** — o Google renomeou o produto
em julho de 2026, integrando-o mais diretamente ao ecossistema Gemini,
mantendo o comportamento central inalterado. Notebooks, links
compartilhados e conteúdo existentes continuam funcionando normalmente
após a mudança de nome.

A ideia central: em vez de conversar com um modelo que responde a partir
do seu conhecimento geral, você cria um "notebook" e adiciona **fontes** —
documentos, páginas da web, transcrições, arquivos de áudio, entre
outros formatos suportados. A partir daí, as respostas do Gemini Notebook
são construídas primariamente a partir dessas fontes, não do conhecimento
geral do modelo.

## Conceito: geração ancorada em fontes (RAG)

Tecnicamente, esse comportamento é descrito como uma forma de
**Retrieval-Augmented Generation (RAG)** — geração aumentada por
recuperação. Em vez de o modelo gerar uma resposta apenas a partir do que
"lembra" do treinamento, o sistema primeiro recupera os trechos mais
relevantes das fontes fornecidas e, em seguida, usa esses trechos como
base para construir a resposta.

Um fluxo conceitual simplificado seria:

```text
FONTE
  |
INGESTÃO
  |
CONTEXTO
  |
PERGUNTA
  |
RECUPERAÇÃO / GROUNDING
  |
MODELO
  |
RESPOSTA
  |
CITAÇÕES
```

**Importante:** este diagrama é uma simplificação conceitual para fins
didáticos, não uma descrição da arquitetura interna real do produto, que
não é publicamente documentada em detalhe pelo Google.

## Citações e rastreabilidade

Uma característica central do Gemini Notebook é que as respostas incluem
citações em linha que apontam de volta para a passagem específica da
fonte usada para sustentar aquela afirmação. Isso permite ao usuário
verificar rapidamente se a resposta reflete corretamente o que a fonte
realmente diz, em vez de precisar confiar cegamente na saída do modelo.

Essa rastreabilidade é o que diferencia o Gemini Notebook de um assistente
de propósito geral: a resposta não é apenas plausível, ela é **verificável
contra um documento específico que você forneceu**.

## Tipos de fontes suportadas

De acordo com a documentação e materiais oficiais do produto, o Gemini
Notebook aceita diversos tipos de fontes, incluindo (mas não se limitando
a) PDFs, páginas da web, vídeos do YouTube com legendas públicas, arquivos
de áudio, arquivos do Google (Docs, Slides), imagens, documentos do
Office, Markdown, CSV, apresentações e texto colado diretamente. O
conjunto exato de formatos suportados, limites de tamanho e número máximo
de fontes por notebook variam por plano de acesso e podem mudar; consulte
a documentação oficial para os números atuais.

## Descoberta de fontes

Além do upload manual, o produto oferece um recurso de descoberta de
fontes: o usuário descreve uma pergunta de pesquisa, e o sistema busca na
web (ou no Google Drive conectado) e retorna um conjunto de resultados
para revisão. O usuário então escolhe quais resultados importar como
fontes do notebook. Esse passo é deliberadamente não automático — o
sistema não gera uma resposta final a partir da busca sozinho; ele apenas
popula o painel de fontes para que perguntas subsequentes usem esse
material.

## Formatos de saída ("Studio")

A partir de um conjunto de fontes, o Gemini Notebook pode gerar formatos
transformados do conteúdo, como resumos, guias de estudo, briefings,
FAQs, linhas do tempo, mapas mentais, infográficos, flashcards, questionários
e apresentações de slides, além de visões gerais em áudio e vídeo. Todos
esses formatos são descritos pela documentação do produto como
permanecendo ancorados nas fontes originais, com citações preservadas
sempre que aplicável.

## Grounding não é infalibilidade

Um ponto que a própria documentação do Google reforça: a ancoragem em
fontes **reduz o risco** de respostas inventadas, mas não o elimina.
Um modelo ainda pode:

- interpretar mal um trecho ambíguo da fonte;
- resumir de forma imprecisa, mesmo citando a passagem correta;
- combinar informações de fontes diferentes de um jeito que pareça
  coerente mas esteja factualmente errado.

Por isso, a recomendação prática — inclusive da própria documentação — é
sempre abrir a citação e conferir a passagem original antes de tratar uma
afirmação como definitiva. Veja mais em
[`grounding-e-fontes.md`](./grounding-e-fontes.md) e
[`limitacoes-e-confiabilidade.md`](./limitacoes-e-confiabilidade.md).

## Relação entre fonte e conhecimento geral do modelo

Vale distinguir dois modos de operação que podem coexistir em produtos do
ecossistema Gemini:

- **Ancorado em fontes**: a resposta é restrita (ou fortemente
  priorizada) ao conteúdo que o usuário forneceu explicitamente naquele
  notebook. É o comportamento padrão do Gemini Notebook.
- **Conhecimento geral / ferramentas externas**: a resposta pode se
  basear no conhecimento geral do modelo e, em interfaces que suportam
  isso, em buscas na web em tempo real. É o comportamento típico do
  assistente Gemini de propósito geral fora do contexto de um notebook.

Notebooks podem, em alguns fluxos, sincronizar ou aparecer dentro do app
Gemini mais amplo — mas a integração exata entre os dois produtos é uma
área que muda com frequência e deve ser verificada na documentação atual
em vez de assumida como fixa.

## Privacidade

Como qualquer produto que processa documentos potencialmente sensíveis do
usuário, vale revisar a política de privacidade e os termos de uso oficiais
do Google antes de enviar informações confidenciais a um notebook,
especialmente em contas pessoais versus contas gerenciadas por uma
organização, que podem ter políticas de retenção e uso de dados
diferentes. Este documento não substitui a leitura da política oficial —
veja [`referencias.md`](./referencias.md).

## Boas práticas

- Mantenha cada notebook focado em um projeto ou pergunta de pesquisa
  específica; misturar fontes de assuntos muito diferentes tende a
  degradar a qualidade das respostas.
- Prefira fontes primárias e bem estruturadas a resumos de terceiros,
  quando disponíveis.
- Sempre abra pelo menos as citações mais importantes de uma resposta
  antes de reutilizá-la em um contexto sério (um relatório, uma decisão,
  um trabalho acadêmico).
- Ao usar a descoberta automática de fontes, revise manualmente quais
  resultados fazem sentido incluir — o sistema lista candidatos, não
  garante relevância ou qualidade.

## Leitura relacionada

- [`grounding-e-fontes.md`](./grounding-e-fontes.md)
- [`notebook-e-canvas.md`](./notebook-e-canvas.md)
- [`limitacoes-e-confiabilidade.md`](./limitacoes-e-confiabilidade.md)
- [`referencias.md`](./referencias.md)
