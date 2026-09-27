# Semana 5 — Construção de Instruções com o Método PARTS

## 1. Introdução

O método **PARTS** é uma abordagem utilizada para criar instruções mais estruturadas e direcionadas para modelos de Inteligência Artificial Generativa, como o **Google Gemini**.

Em vez de fazer uma solicitação genérica para a IA, o método organiza o prompt em diferentes componentes, fornecendo contexto e critérios mais claros para orientar a resposta.

Isso é importante porque modelos de linguagem não interpretam uma solicitação apenas pelo seu objetivo final. A qualidade da resposta também depende das informações, restrições, contexto e formato fornecidos na instrução.

---

## 2. O que é o método PARTS?

O método **PARTS** pode ser utilizado como uma estrutura para elaboração de prompts mais completos.

A sigla representa:

- **P — Persona**
- **A — Act**
- **R — Recipient**
- **T — Theme**
- **S — Structure**

Cada componente possui uma função específica na construção da instrução.

---

## 3. P — Persona

A **Persona** define qual papel ou perfil a Inteligência Artificial deve assumir durante a execução da tarefa.

Isso ajuda a estabelecer um contexto de atuação para o modelo.

### Exemplo

```text
Atue como um professor de programação especializado em Java.
```

Nesse caso, o modelo recebe uma orientação sobre o tipo de conhecimento e abordagem esperados.

A persona não transforma o modelo literalmente em um profissional daquela área. Ela funciona como uma instrução contextual que influencia a forma como a resposta será construída.

---

## 4. A — Act

**Act** representa a ação que deve ser realizada.

É a parte responsável por especificar claramente **o que a IA precisa fazer**.

### Exemplo

```text
Explique o conceito de herança em Programação Orientada a Objetos.
```

Uma instrução pouco específica poderia ser:

```text
Fale sobre herança.
```

Já uma instrução mais direcionada define exatamente a operação esperada:

```text
Explique o conceito de herança em Programação Orientada a Objetos e apresente um exemplo em Java.
```

Quanto mais clara for a ação solicitada, menor tende a ser a ambiguidade da tarefa.

---

## 5. R — Recipient

**Recipient** define para quem o conteúdo está sendo produzido.

Esse componente é importante porque diferentes públicos possuem diferentes níveis de conhecimento.

### Exemplo

```text
Explique o conceito para estudantes do 4º semestre de Desenvolvimento de Software.
```

A explicação para um estudante de graduação pode utilizar termos técnicos que não seriam adequados para uma criança ou para uma pessoa sem conhecimento prévio em programação.

Portanto, o destinatário influencia:

- nível de profundidade;
- vocabulário;
- quantidade de exemplos;
- complexidade da explicação;
- quantidade de conhecimento prévio considerado.

---

## 6. T — Theme

**Theme** especifica o tema ou assunto que deve ser abordado.

Ele delimita o conteúdo da resposta.

### Exemplo

```text
O tema é o funcionamento de APIs REST utilizando Spring Boot.
```

Podemos combinar o tema com a ação:

```text
Explique tecnicamente como funciona uma API REST utilizando Spring Boot.
```

Isso reduz a possibilidade de a resposta abordar conceitos que não fazem parte do objetivo principal.

---

## 7. S — Structure

**Structure** define como a resposta deve ser organizada.

Esse componente é especialmente importante quando precisamos que a saída tenha um formato específico.

### Exemplo

```text
Organize a resposta em:
1. Definição
2. Funcionamento
3. Exemplo de código
4. Vantagens
5. Conclusão
```

Também podemos determinar outros formatos:

```text
Apresente as informações em uma tabela.
```

ou:

```text
Utilize tópicos curtos e exemplos práticos.
```

Dessa forma, não controlamos apenas **o conteúdo**, mas também a maneira como ele será apresentado.

---

# 8. Exemplo completo utilizando PARTS

Uma instrução genérica poderia ser:

```text
Explique APIs REST.
```

Embora seja válida, ela possui pouca especificação.

Utilizando PARTS, podemos construir:

```text
Persona:
Atue como um desenvolvedor backend especializado em Java e Spring Boot.

Act:
Explique como uma API REST funciona e como implementar seus principais endpoints.

Recipient:
A explicação será destinada a estudantes de Desenvolvimento de Software que já possuem conhecimentos básicos de Java.

Theme:
APIs REST utilizando Spring Boot, HTTP, endpoints, métodos GET, POST, PUT e DELETE.

Structure:
Organize a resposta em:
1. Conceito
2. Funcionamento
3. Métodos HTTP
4. Exemplo de implementação em Spring Boot
5. Exemplo de requisições
6. Erros comuns
7. Resumo final
```

O resultado é uma instrução muito mais direcionada.

---

# 9. Comparação entre os dois prompts

### Prompt genérico

```text
Explique APIs REST.
```

Características:

- pouca contextualização;
- público não especificado;
- profundidade indefinida;
- formato indefinido;
- possibilidade maior de respostas genéricas.

### Prompt utilizando PARTS

```text
Atue como um desenvolvedor backend especializado em Java e Spring Boot.

Explique como APIs REST funcionam para estudantes de Desenvolvimento de Software que possuem conhecimentos básicos de Java.

Aborde HTTP, endpoints e os métodos GET, POST, PUT e DELETE.

Organize a resposta em definição, funcionamento, exemplo em Spring Boot, exemplos de requisições, erros comuns e resumo final.
```

Características:

- define o contexto;
- especifica a tarefa;
- define o público;
- delimita o tema;
- determina a estrutura da resposta.

---

# 10. Por que o PARTS melhora a interação com a IA?

Modelos como o Gemini utilizam modelos de linguagem capazes de gerar respostas a partir dos padrões presentes na instrução fornecida.

Um prompt com pouca informação deixa mais decisões abertas para o modelo.

Por outro lado, uma instrução estruturada fornece mais restrições e contexto.

Podemos representar isso de forma simplificada:

```text
Prompt genérico
      ↓
Poucas restrições
      ↓
Maior espaço para interpretação
      ↓
Resposta potencialmente mais genérica
```

Enquanto:

```text
Prompt estruturado
      ↓
Contexto + objetivo + público + tema + formato
      ↓
Menor ambiguidade
      ↓
Resposta mais direcionada
```

Isso não significa que um prompt maior sempre produzirá uma resposta melhor. O objetivo é fornecer **informações relevantes**, e não simplesmente aumentar o tamanho da instrução.

---

# 11. Relação com Engenharia de Prompt

O método PARTS está relacionado ao conceito de **Prompt Engineering**, ou Engenharia de Prompt.

Prompt Engineering consiste na elaboração e refinamento sistemático das instruções fornecidas a modelos de IA para obter resultados mais adequados a determinado objetivo.

Algumas práticas relacionadas incluem:

- definição clara da tarefa;
- fornecimento de contexto;
- definição do público;
- especificação do formato de saída;
- utilização de exemplos;
- estabelecimento de restrições;
- avaliação e refinamento do resultado.

Portanto, o PARTS pode ser utilizado como uma estrutura prática para transformar uma solicitação informal em uma instrução mais precisa.

---

# 12. Processo de refinamento

A construção de um prompt não precisa acontecer em uma única tentativa.

Um processo eficiente pode seguir o ciclo:

```text
Definir objetivo
      ↓
Criar instrução
      ↓
Executar no Gemini
      ↓
Avaliar resultado
      ↓
Identificar problemas
      ↓
Refinar instrução
      ↓
Executar novamente
```

Por exemplo, se a resposta estiver muito complexa, podemos alterar o componente relacionado ao destinatário:

```text
Explique para iniciantes em programação.
```

Se a resposta estiver muito extensa, podemos alterar a estrutura:

```text
Responda utilizando no máximo 500 palavras.
```

Se estiver abordando assuntos fora do objetivo:

```text
Concentre-se exclusivamente em APIs REST com Spring Boot.
```

---

# 13. Conclusão

O método PARTS fornece uma maneira estruturada de elaborar instruções para ferramentas de Inteligência Artificial Generativa.

Seus principais componentes são:

| Componente | Função |
|---|---|
| **Persona** | Define o papel ou contexto de atuação |
| **Act** | Define a ação que deve ser realizada |
| **Recipient** | Define o público da resposta |
| **Theme** | Define o assunto ou escopo |
| **Structure** | Define o formato da resposta |

A principal vantagem da abordagem é transformar uma solicitação vaga em uma instrução com **objetivo, contexto, público, escopo e formato definidos**.

Assim, a interação com ferramentas como o Google Gemini deixa de ser apenas uma conversa baseada em perguntas e passa a envolver um processo mais sistemático de **formulação, avaliação e refinamento de instruções**.
