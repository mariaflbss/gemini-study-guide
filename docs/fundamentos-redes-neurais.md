# Como uma Rede Neural Aprende

## Fundamentos de redes neurais e aprendizado supervisionado

Esta documentação técnica acompanha o **Neural Network Playground — Como uma IA aprende?**. O objetivo é explicar os conceitos que a experiência interativa representa de forma visual.

## 1. O que é uma rede neural artificial?

Uma Rede Neural Artificial (RNA) é um modelo matemático e computacional formado por unidades de processamento interconectadas, chamadas neurônios artificiais. Em aprendizado de máquina, esses modelos podem reconhecer padrões, classificar dados e produzir previsões a partir de exemplos.

Quando se diz que uma máquina "aprende", isso não significa consciência. Significa que seus parâmetros internos são ajustados iterativamente para reduzir o erro entre suas previsões e os resultados esperados.

## 2. Estrutura básica

Uma rede neural pode ser organizada em:

- **Camada de entrada:** recebe os dados.
- **Camadas ocultas:** combinam informações e permitem representar relações não lineares.
- **Camada de saída:** produz a previsão final.
- **Pesos:** controlam a influência das conexões entre neurônios.
- **Vieses:** deslocam a resposta dos neurônios e aumentam a flexibilidade do modelo.

Um neurônio calcula uma combinação ponderada das entradas, adiciona um viés e aplica uma função de ativação.

## 3. Propagação direta

Na **propagação direta (forward pass)**, os dados percorrem a rede até produzir uma previsão.

De forma simplificada:

**entradas → soma ponderada → ativação → próxima camada → previsão**

Para um neurônio, uma forma comum de representar a soma é:

`z = x₁w₁ + x₂w₂ + ... + b`

A função de ativação transforma esse valor antes que ele seja encaminhado à próxima etapa.

## 4. Função de perda

Depois da previsão, a saída da rede é comparada ao valor esperado. A diferença é medida por uma **função de perda (loss)**.

A loss transforma o erro da previsão em um valor que pode ser acompanhado durante o treinamento. Em geral, o objetivo do treinamento é encontrar parâmetros que reduzam essa medida de erro.

## 5. Backpropagation e ajuste

O treinamento pode ser resumido pelo ciclo:

**DADOS → PREVISÃO → ERRO → AJUSTE → NOVA PREVISÃO**

O **backpropagation** calcula como o erro se relaciona aos parâmetros da rede e fornece a informação necessária para atualizá-los. Um algoritmo de otimização utiliza essas informações para alterar os pesos e vieses.

O projeto usa uma implementação didática desse processo para que o efeito dos ajustes possa ser observado diretamente.

## 6. Taxa de aprendizado

A taxa de aprendizado determina o tamanho dos passos usados nas atualizações dos parâmetros.

- Uma taxa muito pequena pode tornar o treinamento lento.
- Uma taxa muito alta pode produzir oscilações ou dificultar a convergência.

Por isso, alterar a taxa de aprendizado no Playground muda o comportamento observado durante o treinamento.

## 7. Funções de ativação

Funções de ativação introduzem não linearidade no modelo. Entre as funções conhecidas estão:

- **Sigmoid:** produz valores entre 0 e 1 e é comum em saídas de classificação binária.
- **Tanh:** produz valores entre -1 e 1.
- **ReLU:** `max(0, z)` e é muito utilizada em redes neurais profundas.

Sem não linearidade, empilhar transformações lineares não permitiria representar muitos padrões complexos.

## 8. Fronteira de decisão

Em um problema de classificação, a rede pode produzir uma região que separa classes diferentes. Essa separação é chamada de **fronteira de decisão**.

Padrões simples, como dados separáveis por uma linha, podem ser resolvidos com modelos pequenos. Padrões como círculos, XOR e espirais exigem representações não lineares mais expressivas.

## 9. Datasets e complexidade

O Playground utiliza diferentes padrões para mostrar essa diferença:

- **Linha:** separação aproximadamente linear.
- **Círculo:** exige uma fronteira não linear.
- **XOR:** apresenta classes que não podem ser separadas por uma única linha.
- **Espiral:** combina separação não linear e maior complexidade geométrica.

O objetivo não é estabelecer uma regra universal sobre qual arquitetura sempre resolve cada padrão, mas permitir observar que a dificuldade do problema influencia o comportamento do treinamento.

## 10. Loss e acurácia

**Acurácia** indica a proporção de classificações corretas. **Loss** mede o erro segundo a função escolhida.

As duas métricas fornecem informações diferentes. Uma rede pode apresentar boa acurácia e ainda possuir previsões com níveis de confiança inadequados, dependendo do problema e da função de perda utilizada.

## 11. O que influencia o aprendizado?

O comportamento do treinamento depende de fatores como:

- arquitetura da rede;
- quantidade de neurônios;
- taxa de aprendizado;
- qualidade e quantidade dos dados;
- ruído;
- número de épocas;
- função de ativação e de perda.

Pouca capacidade pode levar a **underfitting**. Capacidade excessiva combinada a dados inadequados pode favorecer **overfitting**.

## 12. Limitações

O Playground é didático. Ele simplifica conceitos e implementações para que o comportamento seja observável no navegador.

Redes neurais reais podem envolver arquiteturas, funções de perda, otimizadores, regularização e conjuntos de dados muito mais complexos. Além disso, modelos de machine learning não possuem consciência nem compreensão humana; seu comportamento depende dos dados, da representação e do processo de otimização.

## 13. Exemplo simplificado

Considere uma entrada com dois valores, pesos e um viés. O neurônio primeiro calcula uma soma ponderada e depois aplica uma função de ativação. A previsão é comparada ao alvo e o erro participa do ajuste dos parâmetros.

Esse cálculo é **uma simplificação didática**. Em um treinamento real, o backpropagation depende das derivadas da função de perda e das funções de ativação ao longo da rede.

## 14. Relação com o Playground

| Conceito | Representação na experiência |
|---|---|
| Entradas | Pontos no plano cartesiano |
| Pesos | Conexões entre neurônios |
| Previsão | Saída da rede |
| Loss | Gráfico de perda |
| Acurácia | Métrica de classificação |
| Fronteira de decisão | Regiões formadas no plano |
| Taxa de aprendizado | Controle do tamanho dos ajustes |
| Épocas | Repetições do treinamento |

## 15. Conclusão

Uma rede neural aprende por meio de um ciclo iterativo de previsão, medição de erro e ajuste de parâmetros. A experiência interativa torna esse ciclo observável e permite perceber como alterações nos dados e nos parâmetros influenciam o treinamento.

O objetivo do Playground não é esconder a matemática, mas criar uma ponte visual para que conceitos abstratos possam ser investigados antes de serem estudados em maior profundidade.
