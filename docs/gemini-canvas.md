# Gemini Canvas

> Documentação técnica de aprofundamento. Para uma introdução visual, veja
> a seção "Gemini Canvas" no site.

## O que é

Canvas é um espaço de trabalho interativo dentro do Gemini, lançado em
2025, projetado para criar e editar conteúdo em tempo real de forma
colaborativa com o modelo, em vez de apenas trocar mensagens de chat. Ao
selecionar o modo Canvas e descrever o que se quer criar, o Gemini gera um
primeiro rascunho dentro de um painel dedicado, que pode então ser
refinado por meio de novas instruções ou edição direta.

## Artefatos suportados

Segundo a documentação oficial do produto, o Canvas suporta a criação e
edição de:

- documentos de texto;
- código (com um modo de visualização e edição dedicado);
- aplicações interativas simples;
- apresentações de slides;
- documentos em LaTeX, para conteúdo com formatação matemática ou
  científica complexa (recurso restrito a maiores de 18 anos, segundo a
  documentação oficial).

O conjunto exato de formatos disponíveis pode variar por plataforma
(web, Android, iOS) e por atualizações do produto.

## Fluxo de edição

O fluxo típico documentado pelo Google é:

1. Selecionar Canvas na caixa de prompt e descrever o que se quer criar.
2. O Gemini gera um primeiro rascunho no painel do Canvas.
3. O usuário pode editar o conteúdo diretamente (texto) ou pedir ajustes
   pelo prompt ("mude o tom", "reescreva esta seção", "corrija este
   trecho de código").
4. Para conteúdo selecionado, o Canvas oferece um recurso de "selecionar e
   perguntar" (*select and ask*) ou sugestão de edições, permitindo pedir
   uma mudança pontual sem reescrever tudo.
5. Alterações são salvas automaticamente dentro do espaço do Canvas.

Para artefatos de código, o painel de Canvas expõe uma visualização
específica (modo "Código") com acesso a erros, logs e histórico de
mudanças recentes, além de uma prévia executável quando aplicável (por
exemplo, uma aplicação web simples).

## Do artefato para outros formatos

Um artefato criado no Canvas pode, segundo a documentação, ser transformado
em outros formatos de saída — por exemplo, uma visão geral em áudio, um
questionário, ou exportado (cópia do código, exportação para o Google
Colab no caso de código Python, exportação de documentos como PDF).

## O que o Canvas não é

É importante não confundir o Canvas com um ambiente de desenvolvimento
completo ou um substituto para ferramentas profissionais de edição de
código e documentos. Ele é melhor descrito como um espaço de
prototipagem rápida e colaborativa: bom para gerar e iterar rapidamente
sobre uma primeira versão de algo, não necessariamente para produção de
software complexo ou documentos com requisitos de formatação muito
específicos.

## Limitações

- Como qualquer geração assistida por IA, o conteúdo produzido no Canvas
  pode conter erros — de fato, de lógica, ou de código — e deve ser
  revisado antes de ser usado em um contexto sério.
- A qualidade do resultado depende diretamente da clareza do prompt:
  instruções vagas tendem a produzir artefatos genéricos.
- Recursos como adicionar funcionalidades de IA a um aplicativo criado no
  Canvas, ou trabalhar com LaTeX, podem ter restrições de idade ou de
  plano de acesso, conforme a documentação oficial.

## Sobre este documento

Este documento descreve apenas comportamentos e fluxos publicamente
documentados pelo Google. Nenhuma API, método de integração ou detalhe de
implementação interna foi inventado ou presumido — onde a documentação
oficial não detalha um aspecto (como a arquitetura interna de geração de
código), este documento evita afirmar algo como fato.

## Leitura relacionada

- [`notebook-e-canvas.md`](./notebook-e-canvas.md)
- [`engenharia-de-prompts.md`](./engenharia-de-prompts.md)
- [`limitacoes-e-confiabilidade.md`](./limitacoes-e-confiabilidade.md)
- [`referencias.md`](./referencias.md)
