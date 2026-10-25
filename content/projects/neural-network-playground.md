---
title: "Neural Network Playground — Como uma IA aprende?"
summary: "Uma experiência interativa para visualizar, em tempo real, como uma rede neural ajusta seus parâmetros durante o aprendizado supervisionado."
featured: true
origin: embaixadora-estudantil-google
week: 3
kind: Projeto educacional interativo
tags: [Inteligência Artificial, Redes Neurais, Aprendizado Supervisionado, Gemini Canvas]
tech: [HTML, CSS, JavaScript, Canvas]
problem: "Conceitos como pesos, erro, backpropagation e fronteira de decisão podem ser difíceis de compreender apenas por fórmulas ou texto."
objective: "Criar uma experiência visual que permita observar o ciclo de dados, previsão, erro, ajuste e novo aprendizado de uma rede neural simples."
tool: Gemini Canvas
process: |
  O projeto transforma os fundamentos de redes neurais em uma experiência manipulável. O usuário pode escolher conjuntos de dados, alterar ruído, taxa de aprendizado e quantidade de neurônios, treinar a rede e acompanhar a evolução da loss, da acurácia e da fronteira de decisão.

  A experiência foi organizada para conectar cada elemento visual a uma etapa conceitual do aprendizado: DADOS → PALPITE → ERRO → AJUSTE → APRENDIZADO.
prompts:
  - "Crie uma experiência educacional interativa que explique como uma rede neural aprende, permitindo visualizar dados, previsões, erro, ajuste dos pesos e evolução do treinamento."
  - "Refine a experiência para que o usuário consiga comparar diferentes padrões de dados e observar como taxa de aprendizado, ruído e quantidade de neurônios afetam o treinamento."
results:
  - "Uma rede neural simplificada com treinamento real em JavaScript e visualização de seus estados durante o processo."
  - "Conjuntos de dados como linha, círculo, XOR e espiral para mostrar diferentes níveis de complexidade."
  - "Gráfico de loss, acurácia, fronteira de decisão e representação visual das conexões da rede."
  - "Controles para treinar, pausar, avançar manualmente, reiniciar e alterar parâmetros do experimento."
learning: |
  O projeto mostrou como uma representação interativa pode transformar uma sequência matemática em um processo observável. Também reforçou que a visualização é uma camada didática: ela ajuda a perceber o comportamento do modelo, mas não substitui a compreensão dos fundamentos matemáticos.
links:
  demo: /labs/neural-network-playground.html
  live: https://sites.google.com/view/neural-network-playground/full-page-embed
cover:
  src: "/assets/projects/neural-network-playground-cover.jpg"
  alt: "Prévia real do Neural Network Playground, com a rede neural e os dados do experimento visíveis."
---

## Sobre o projeto

O projeto nasceu do eixo de desafios de aprendizagem e representações interativas da jornada de Embaixadora Estudantil do Google. A proposta foi materializar um conceito técnico complexo em uma experiência que pudesse ser explorada em vez de apenas lida.

## Documentação técnica

A documentação associada explica os fundamentos de redes neurais, propagação direta, função de perda, backpropagation, funções de ativação, classificação, datasets e limitações do modelo.

[Consultar a documentação técnica](/docs/fundamentos-redes-neurais.pdf)

## Limite didático

O Playground é uma representação simplificada para aprendizagem. Ele não pretende reproduzir a complexidade de frameworks de machine learning nem substituir uma implementação profissional de redes neurais.
