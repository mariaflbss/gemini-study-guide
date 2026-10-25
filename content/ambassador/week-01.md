---
number: 1
theme: Auditoria de prompt
summary: Como transformar um pedido curto em um prompt melhor e como fontes e materiais viram um espaço de conhecimento no Gemini.
status: concluida
highlights:
  - Contexto, especificidade e estrutura são as principais alavancas de um prompt
  - Regras, perguntas e personalização refinam a resposta
  - Fontes e materiais podem virar um espaço de conhecimento para estudar
tools:
  - Google Gemini
  - Study Notebooks
applications:
  - Auditar um prompt de estudo antes de enviá-lo
  - Reunir fontes de uma disciplina em um espaço para pesquisar e aprofundar
challenges:
  - id: auditoria-de-prompt
    kind: desafio
    label: Desafio #01
    title: Auditoria de prompt
    description: Melhorar um prompt simples e analisar diferentes maneiras de obter respostas melhores.
    concepts: [Melhoria de prompts, Contexto, Especificidade, Estrutura, Regras, Perguntas, Personalização, Estratégias de interação com IA, Aprendizagem colaborativa]
    modules:
      - type: prompt-compare
        title: Antes e depois
        before:
          label: Prompt original
          text: Tenho uma prova na sexta-feira. Monte um plano de estudos para mim.
        after:
          label: Minha versão melhorada
          text: |
            Exemplo didático de prompt estruturado: "Tenho uma prova de Cálculo na sexta-feira. Tenho 2 horas por dia até a prova e já revisei limites e derivadas. Organize um plano por dia, priorizando os tópicos ainda não revisados, e faça perguntas antes de assumir informações que faltarem."
        lenses:
          - name: Contexto
            question: Qual é a matéria, o formato da prova e o que já foi estudado?
          - name: Especificidade
            question: Quantos dias, quantas horas por dia, quais tópicos?
          - name: Estrutura
            question: Como a resposta deve vir organizada — por dia, por tópico, em tabela?
          - name: Regras
            question: O que a resposta deve respeitar ou evitar?
          - name: Perguntas
            question: A IA deveria me perguntar algo antes de montar o plano?
          - name: Personalização
            question: Como eu aprendo melhor e o que costuma travar meu estudo?
  - id: sessao-gemini-01
    kind: sessao
    label: Sessão de Google Gemini #01
    title: De fontes a espaço de conhecimento
    description: Exploração de como transformar fontes, materiais de estudo, referências e conteúdos em um espaço de conhecimento.
    concepts: [Pesquisar, Estudar, Organizar informações, Aprofundar aprendizados]
  - id: presenca-digital
    kind: presenca
    label: Desafio de presença digital
    title: Compartilhar um aprendizado
    description: Compartilhamento de um aprendizado, descoberta ou truque prático relacionado ao programa, ao Google AI Pro, às atividades do grupo ou aos Study Notebooks.
    concepts: [Aprender em público, Documentar]
project: estudo-notebooklm
evidence: []
---

## Contexto

A primeira semana teve três frentes: a auditoria de prompt (Desafio #01), a primeira sessão de Google Gemini e o desafio de presença digital.

O ponto de partida foi um pedido curto: *"Tenho uma prova na sexta-feira. Monte um plano de estudos para mim."* A pergunta da semana era o que dá para mudar nele para a resposta ficar melhor, e como comparar essas mudanças com as estratégias de outros participantes.

## Aprendizados

**Um prompt é todo o contexto que o modelo enxerga.** O modelo gera a resposta a partir do que está no prompt e no histórico da conversa. Se o pedido não diz a matéria, o prazo ou o formato desejado, o modelo precisa assumir um cenário genérico.

**Contexto e especificidade reduzem a ambiguidade.** Informar quem você é no problema, o que já sabe e o que precisa entregar diminui o espaço de respostas plausíveis. "Plano de estudos" vira algo que cabe na sua sexta-feira.

**Estrutura e regras definem a forma da resposta.** Pedir um formato (por dia, por tópico, em tabela) e declarar limites (tempo disponível, o que evitar) torna a saída mais fácil de usar e de comparar.

**Perguntas e personalização invertem o fluxo.** Em vez de tentar prever tudo, o prompt pode pedir que a IA pergunte o que falta antes de responder e considerar como a pessoa estuda.

**Fontes ancoram o estudo.** Na sessão de Gemini, o foco foi reunir materiais e referências em um espaço próprio para pesquisar e aprofundar. A base conceitual está em [Engenharia de prompts](/guia-gemini/docs/engenharia-de-prompts) e em [Grounding e fontes](/guia-gemini/docs/grounding-e-fontes).

## Experimentação

A documentação desta semana registra a metodologia proposta: comparar um pedido curto com uma versão que explicita contexto, especificidade, estrutura, regras, perguntas e personalização. A execução individual e as respostas comparadas não foram registradas nesta página.

## Aplicação prática

Aplicação prevista: usar a mesma auditoria antes de solicitações acadêmicas e organizar fontes em um espaço de estudo quando houver material relevante.

## Reflexão

A principal aprendizagem documentada é que a qualidade do pedido depende também da qualidade do contexto fornecido e da forma como o resultado será utilizado.

## Próximos passos

Explorar prompts com fontes ancoradas e comparar respostas produzidas a partir de contextos diferentes.
