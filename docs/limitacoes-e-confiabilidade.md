# Limitações e confiabilidade

> Uma resposta convincente não é automaticamente uma resposta correta.

Este documento reúne, de forma crítica e deliberadamente cautelosa, as
principais limitações a ter em mente ao usar qualquer ferramenta do
ecossistema Gemini — ou qualquer sistema baseado em modelos de linguagem,
de forma geral.

## Alucinações

"Alucinação" é o termo comumente usado para descrever quando um modelo de
linguagem gera uma afirmação que soa coerente e confiante, mas que é
factualmente incorreta ou não tem base real. Isso acontece porque o
modelo é, no fundo, um sistema que prevê sequências de texto prováveis —
não um sistema que consulta uma base de fatos verificados antes de
responder (a menos que esteja explicitamente ancorado em fontes ou
ferramentas de busca, como discutido em
[`grounding-e-fontes.md`](./grounding-e-fontes.md)).

Grounding reduz a frequência de alucinações, mas não as elimina —
inclusive a própria documentação do Google, referente ao Gemini Notebook,
reconhece explicitamente que a ancoragem em fontes "parece reduzir o
risco" de alucinações, sem afirmar que o elimina.

## Respostas incorretas mesmo com fontes corretas

Mesmo quando a fonte usada é confiável e atual, o modelo pode:

- resumir de forma imprecisa;
- perder nuance ou contexto importante ao condensar um trecho longo;
- combinar informações de partes diferentes do documento de um jeito que
  pareça correto, mas distorça o significado original.

## Fontes inadequadas ou desatualizadas

A qualidade de uma resposta ancorada em fontes está diretamente limitada
pela qualidade das fontes fornecidas. Um sistema de grounding bem
implementado é fiel à fonte — o que significa que fontes de baixa
qualidade, tendenciosas ou desatualizadas produzem respostas igualmente
limitadas, mesmo com citações perfeitamente rastreáveis.

## Interpretação equivocada

Instruções ambíguas, imagens de baixa qualidade, áudio com ruído, ou
perguntas que dependem de contexto implícito (não dito explicitamente)
aumentam a chance de o modelo interpretar mal o que foi pedido. Prompts
mais estruturados, como discutido em
[`engenharia-de-prompts.md`](./engenharia-de-prompts.md), reduzem esse
risco, mas não o eliminam.

## Excesso de confiança

Modelos de linguagem tipicamente não comunicam incerteza de forma
confiável por padrão — uma resposta errada pode soar tão confiante quanto
uma resposta certa. Isso é agravado pela presença de citações e formatação
polida, que podem transmitir uma sensação de rigor mesmo quando o
conteúdo subjacente está equivocado.

## Limitações de contexto

Mesmo com janelas de contexto grandes, existe um limite para quanta
informação um modelo consegue considerar de uma vez, e nem toda
informação dentro do contexto recebe o mesmo "peso" de atenção — partes
muito extensas de texto podem ter trechos relevantes ofuscados por
volume. Isso é especialmente relevante em notebooks com muitas fontes
longas.

## Limitações do modelo

Diferentes modelos (e diferentes gerações do mesmo modelo) têm
capacidades diferentes de raciocínio, precisão factual e compreensão
multimodal. Uma limitação observada em uma versão específica de um modelo
não é necessariamente permanente — mas também não deve ser presumida como
resolvida sem verificação.

## Disponibilidade não é o mesmo que capacidade

Um recurso estar disponível na interface (por exemplo, um botão para gerar
um determinado formato) não garante que o resultado terá qualidade
suficiente para o uso pretendido em todos os casos. Disponibilidade é uma
questão de acesso; capacidade é uma questão de desempenho real na tarefa
— as duas devem ser avaliadas separadamente.

## A necessidade de revisão humana

Nenhuma das limitações acima é motivo para não usar essas ferramentas —
mas todas reforçam a mesma conclusão prática: **saída gerada por IA,
mesmo ancorada em fontes e com citações, deve ser revisada por uma pessoa
antes de ser usada em decisões importantes, publicações, ou qualquer
contexto onde um erro tenha consequências reais.**

Ferramentas como o Gemini Notebook tornam essa revisão mais fácil, ao
apontar exatamente qual trecho da fonte sustenta cada afirmação — mas
tornar a verificação mais fácil não é o mesmo que torná-la desnecessária.

## Leitura relacionada

- [`grounding-e-fontes.md`](./grounding-e-fontes.md)
- [`gemini-notebook.md`](./gemini-notebook.md)
- [`referencias.md`](./referencias.md)
