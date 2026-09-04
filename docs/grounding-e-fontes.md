# Grounding e fontes

## O que é grounding

*Grounding* (ancoragem) é a prática de restringir ou priorizar a resposta
de um modelo de linguagem a um conjunto específico e verificável de
informação — uma fonte, um documento, um resultado de busca — em vez de
depender exclusivamente do conhecimento geral aprendido durante o
treinamento.

A motivação é direta: o conhecimento geral de um modelo é estático (tem
uma data de corte) e probabilístico (o modelo prevê o texto mais provável,
não necessariamente o mais correto). Ao ancorar a resposta em uma fonte
específica, o sistema tem uma referência concreta contra a qual construir
— e, em produtos como o Gemini Notebook, contra a qual **citar**.

## Componentes típicos de um sistema com grounding

Embora a implementação exata de cada produto não seja publicamente
detalhada, sistemas de grounding geralmente envolvem, conceitualmente:

- **Ingestão**: transformar a fonte (PDF, página web, áudio) em um
  formato que o sistema consiga indexar e buscar.
- **Recuperação (retrieval)**: dado uma pergunta, identificar quais
  trechos da fonte são mais relevantes para respondê-la.
- **Geração condicionada**: o modelo gera a resposta usando os trechos
  recuperados como contexto adicional, não apenas a pergunta isolada.
- **Citação**: a resposta final é vinculada de volta aos trechos
  específicos usados, permitindo verificação.

## Fonte não é sinônimo de verdade

Um ponto tecnicamente importante e frequentemente esquecido: ancorar uma
resposta em uma fonte garante que a resposta reflete *o que a fonte diz*,
não que *o que a fonte diz* seja necessariamente correto, atual ou
completo. Se o usuário fornece uma fonte desatualizada, tendenciosa ou
factualmente errada, um sistema de grounding bem implementado vai, com
razão, produzir uma resposta fiel àquela fonte — o que pode significar uma
resposta fiel e ao mesmo tempo incorreta sobre o mundo real.

Isso significa que a qualidade das fontes escolhidas pelo usuário é uma
variável tão importante quanto a qualidade do próprio modelo.

## Por que grounding ajuda

Comparado a uma resposta gerada apenas a partir do conhecimento geral do
modelo, uma resposta ancorada em fontes tende a:

- reduzir a taxa de afirmações inventadas ("alucinações"), porque o
  modelo tem um material concreto para se basear em vez de "preencher
  lacunas" com suposições;
- ser mais verificável, já que aponta para a passagem exata usada;
- refletir melhor informações específicas de nicho, recentes, ou internas
  a uma organização, que provavelmente não fizeram parte dos dados de
  treinamento do modelo.

## Por que grounding não é suficiente

Grounding reduz um tipo específico de erro, mas não elimina outros:

- **Erros de interpretação**: o modelo pode citar a passagem correta e
  ainda assim resumi-la de forma imprecisa.
- **Vieses de seleção**: se o usuário só forneceu fontes de um lado de um
  debate, a resposta vai refletir esse recorte, mesmo perfeitamente
  ancorada.
- **Conflitos entre fontes**: quando fontes diferentes discordam entre
  si, um sistema de grounding precisa lidar com essa contradição de
  alguma forma — e essa forma nem sempre é explícita ou correta.
- **Falsa sensação de segurança**: citações dão uma aparência de rigor
  que pode levar o usuário a verificar menos do que verificaria uma
  resposta sem citações.

Nenhuma dessas limitações é exclusiva do Gemini — elas se aplicam a
qualquer sistema de geração ancorada em recuperação (RAG), independente
do fornecedor.

## Recomendação prática

Trate citações como um ponto de partida para verificação, não como prova
final. Ao usar qualquer ferramenta ancorada em fontes:

1. Verifique se a fonte em si é confiável antes de confiar na resposta.
2. Abra as citações mais importantes e confira se o trecho realmente
   sustenta a afirmação feita.
3. Quando fontes conflitam, peça explicitamente ao sistema para apontar o
   conflito, em vez de aceitar uma síntese que o esconda.

## Leitura relacionada

- [`gemini-notebook.md`](./gemini-notebook.md)
- [`limitacoes-e-confiabilidade.md`](./limitacoes-e-confiabilidade.md)
