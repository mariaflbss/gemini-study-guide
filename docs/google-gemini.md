# Google Gemini

> Documentação técnica de aprofundamento. Para uma introdução visual e
> acessível, veja a seção "Gemini" no site. Este arquivo assume que você já
> passou por lá e quer entender os conceitos com mais profundidade.

## O que é

Gemini é o nome da família de modelos de inteligência artificial
multimodais desenvolvidos pelo Google, e também o nome do assistente de IA
construído sobre esses modelos (disponível em `gemini.google.com` e em
aplicativos móveis). O mesmo nome é usado tanto para os modelos (a
tecnologia) quanto para o produto de consumo (a interface de chat) — essa
ambiguidade é comum na documentação oficial e vale a pena ter em mente ao
ler outras fontes.

Historicamente, o Google organizou a família Gemini em gerações numeradas
(por exemplo, a geração 1.5, depois a 2.x, depois a 3.x), com variantes
dentro de cada geração otimizadas para diferentes equilíbrios entre
capacidade de raciocínio, velocidade e custo — variantes normalmente
chamadas de algo como "Pro" (mais capaz, para tarefas complexas) e "Flash"
(mais rápida e barata, para tarefas de alto volume). **O nome exato de cada
variante e sua disponibilidade mudam com frequência**, e modelos mais
antigos são descontinuados ao longo do tempo. Por isso, este documento
propositalmente evita fixar números de versão como fato permanente — para
saber qual é a geração atual, consulte a documentação oficial listada em
[`referencias.md`](./referencias.md).

## Multimodalidade

O traço técnico mais importante do Gemini é ter sido projetado desde o
início como multimodal, em vez de ganhar suporte a outras mídias como um
recurso adicionado depois. Na prática, isso significa que texto, imagens,
áudio, vídeo e documentos (como PDFs) podem ser combinados dentro de uma
mesma janela de contexto e processados pelo mesmo modelo, em vez de
depender de sistemas separados costurados externamente.

Isso tem implicações concretas:

- Uma pergunta pode se referir a uma imagem, um trecho de áudio e um
  parágrafo de texto ao mesmo tempo, e o modelo pode relacionar essas
  informações entre si.
- Documentos longos (contratos, artigos, relatórios) podem ser fornecidos
  na íntegra, sem que o usuário precise resumir ou recortar manualmente o
  conteúdo antes de perguntar algo sobre ele.
- A saída também pode ser multimodal em alguns contextos — por exemplo,
  gerar ou editar imagens além de texto, dependendo do modelo e da
  interface usada.

## Contexto e janela de contexto

"Contexto" é o conjunto de informação que o modelo tem disponível no
momento de gerar uma resposta: a conversa até aquele ponto, arquivos
anexados, instruções do sistema, e assim por diante. A "janela de
contexto" é o limite de quanto texto (medido em *tokens*, unidades de
processamento que aproximam pedaços de palavras) o modelo consegue
considerar de uma vez.

Modelos Gemini são conhecidos por suportarem janelas de contexto
relativamente grandes em comparação com muitos concorrentes, o que é parte
do motivo pelo qual produtos como o Gemini Notebook conseguem trabalhar
com múltiplos documentos extensos simultaneamente. O tamanho exato da
janela de contexto varia por modelo e por plano de acesso, e deve ser
verificado na documentação oficial em vez de assumido.

## Raciocínio

Modelos Gemini mais recentes oferecem modos de "raciocínio estendido" (às
vezes chamados de *thinking*), em que o modelo pode dedicar mais etapas de
processamento interno antes de responder, o que tende a melhorar o
desempenho em tarefas de lógica, matemática e problemas de múltiplas
etapas — ao custo de respostas mais lentas e, tipicamente, mais caras
quando cobradas por uso de API. Alguns modelos expõem esse comportamento
como um parâmetro configurável (um "nível" de raciocínio), permitindo
escolher entre respostas mais rápidas e mais superficiais ou mais lentas e
mais aprofundadas.

## Ferramentas e integrações

O Gemini pode ser combinado com ferramentas externas — busca na web,
execução de código, acesso a URLs específicas, chamadas de função para
sistemas externos — dependendo da interface e do plano de acesso. Essas
ferramentas ampliam o que o modelo consegue fazer além de gerar texto a
partir do que já sabe: por exemplo, buscar uma informação atual na web ou
executar um trecho de código Python para validar um cálculo.

O Gemini Notebook e o Gemini Canvas, documentados em arquivos separados
nesta pasta, são exemplos de produtos construídos sobre os modelos Gemini,
cada um com um propósito e uma forma de interação específicos.

## Limitações gerais

Como qualquer modelo de linguagem, o Gemini pode:

- gerar respostas plausíveis, mas factualmente incorretas (frequentemente
  chamadas de "alucinações");
- ter um conhecimento geral com uma data de corte, ou seja, não saber
  sobre eventos posteriores ao período em que foi treinado, a menos que
  tenha acesso a ferramentas de busca em tempo real;
- interpretar mal instruções ambíguas ou imagens de baixa qualidade;
- variar em desempenho dependendo do idioma, domínio e complexidade da
  tarefa.

Para uma discussão mais aprofundada sobre confiabilidade, veja
[`limitacoes-e-confiabilidade.md`](./limitacoes-e-confiabilidade.md).

## Leitura relacionada

- [`gemini-notebook.md`](./gemini-notebook.md) — o produto de pesquisa
  ancorada em fontes.
- [`gemini-canvas.md`](./gemini-canvas.md) — o espaço de criação e edição.
- [`grounding-e-fontes.md`](./grounding-e-fontes.md) — como respostas
  ancoradas em fontes reduzem (mas não eliminam) erros.
- [`referencias.md`](./referencias.md) — fontes oficiais usadas nesta
  documentação.
