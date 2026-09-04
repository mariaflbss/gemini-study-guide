# Engenharia de prompts

## O que é

Engenharia de prompts é a prática de estruturar deliberadamente as
instruções dadas a um modelo de linguagem para aumentar a probabilidade de
obter uma resposta útil, precisa e no formato desejado. Não é sobre
"convencer" o modelo com truques — é sobre reduzir a ambiguidade da tarefa
até o ponto em que existe um caminho claro e provável para a resposta
certa.

## Por que a estrutura do prompt importa tecnicamente

Um modelo de linguagem gera texto prevendo, token a token, o que é mais
provável vir a seguir, dado tudo o que veio antes (o prompt e o histórico
da conversa). Isso tem uma consequência direta: **tudo que está no prompt
influencia a distribuição de probabilidade da resposta** — incluindo
informações irrelevantes, ambiguidades e a ordem em que as instruções
aparecem. Um prompt bem estruturado reduz o espaço de respostas
plausíveis até restar principalmente a resposta que o usuário realmente
quer.

## Elementos que compõem um bom prompt

### Contexto

Informação de fundo necessária para a tarefa fazer sentido: quem é o
público, qual é o objetivo maior, o que já foi tentado. Sem contexto, o
modelo precisa assumir um cenário genérico, que pode não ser o que o
usuário tinha em mente.

### Objetivo

Uma descrição explícita do que conta como sucesso. "Escreva sobre
marketing" é vago; "Escreva um parágrafo explicando por que grounding
reduz — mas não elimina — respostas incorretas, para um público sem
conhecimento técnico prévio" define um alvo específico.

### Restrições

Limites explícitos: tamanho, tom, formato, o que evitar. Restrições
reduzem drasticamente o espaço de respostas válidas — por exemplo, "sem
emojis, tom profissional, no máximo 3 parágrafos" elimina uma fração
grande de respostas plausíveis, mas erradas para o caso de uso.

### Formato de saída

Pedir explicitamente uma estrutura (uma lista, uma tabela, um JSON, um
número específico de seções) tende a produzir saídas mais consistentes e
mais fáceis de processar depois, especialmente quando a resposta será
usada por outro sistema.

### Exemplos (few-shot)

Fornecer um ou mais exemplos do tipo de entrada e saída esperada — uma
técnica chamada *few-shot prompting* — costuma melhorar a aderência ao
formato e ao estilo desejados, mais do que apenas descrever o formato em
palavras.

### Decomposição de problemas

Tarefas complexas tendem a ter resultados melhores quando divididas em
etapas explícitas, em vez de pedidas de uma vez em um único prompt vago.
Isso vale tanto para prompts únicos (pedir ao modelo para "pensar passo a
passo") quanto para fluxos de múltiplas interações, em que cada etapa
usa o resultado da anterior.

### Perguntas de comparação e síntese

Ao lidar com múltiplas fontes ou opções (como no Gemini Notebook), pedir
explicitamente uma comparação estruturada ("compare X e Y nos seguintes
critérios...") tende a produzir respostas mais analíticas do que pedir um
resumo geral, que tende a misturar as fontes sem diferenciá-las.

### Verificação

Pedir ao modelo para citar de onde tirou uma informação, sinalizar
incertezas, ou revisar a própria resposta antes de finalizá-la, pode
reduzir — embora não eliminar — erros. Isso é especialmente relevante em
contextos ancorados em fontes: pedir explicitamente citações torna mais
fácil auditar a resposta depois.

## Exemplos

**Prompt vago:**

```text
Me fale sobre inteligência artificial.
```

Resultado provável: uma resposta genérica, sem direção clara sobre
profundidade, público ou formato.

**Prompt estruturado:**

```text
Contexto: estou escrevendo a introdução de uma apresentação para
colegas de trabalho sem conhecimento técnico de IA.

Objetivo: explicar, em até 4 frases, a diferença entre um modelo de
linguagem responder a partir de conhecimento geral versus responder
ancorado em documentos fornecidos por mim.

Restrições: sem jargão técnico, sem citar nomes de produtos
específicos, tom direto.
```

Resultado provável: uma resposta muito mais alinhada ao uso real
pretendido, porque a tarefa tem um alvo, um público e limites claros.

## Por que essas estruturas funcionam tecnicamente

Cada elemento acima reduz ambiguidade de uma forma diferente:

- **Contexto e objetivo** restringem *o que* deve ser dito.
- **Restrições e formato** restringem *como* deve ser dito.
- **Exemplos** ancoram o modelo em um padrão concreto, o que costuma ser
  mais eficaz do que descrições abstratas do estilo desejado.
- **Decomposição** reduz a chance de o modelo pular etapas de raciocínio
  necessárias para tarefas complexas.
- **Verificação** cria um passo explícito de checagem, em vez de tratar a
  primeira resposta gerada como final.

## Leitura relacionada

- [`grounding-e-fontes.md`](./grounding-e-fontes.md)
- [`notebook-e-canvas.md`](./notebook-e-canvas.md)
