# Apresentação Técnica — Observer Pattern

## Apresentador
João Pedro Lira Amorim

## Tema
Observer Pattern e princípios da orientação a objetos

## Objetivo
Demonstrar a refatoração de um sistema de notificações escolares utilizando o Observer Pattern e princípios da orientação a objetos, tornando o código mais desacoplado, organizado, escalável e de fácil manutenção.

## Cenário de negócio
Uma escola precisa enviar comunicados aos responsáveis por diferentes canais, como e-mail, WhatsApp e Portal Escolar.

## Problemas do código inicial
- A classe `Escola` era responsável por decidir como cada notificação seria enviada.
- A adição de um novo canal exigia modificar a classe `Escola`.
- O código possuía diversos `if`, aumentando o acoplamento e dificultando a manutenção.

## Conceitos aplicados
- **Observer Pattern:** permite que a classe `Escola` notifique automaticamente todos os observadores cadastrados sem conhecer a implementação de cada um.
- **Polimorfismo:** todos os tipos de notificação implementam o método `enviar()`, permitindo que sejam tratados da mesma forma.
- **Abstração:** foi criada uma classe base `Notificacao` para definir o contrato que todos os observadores devem seguir.
- **Encapsulamento:** cada classe de notificação é responsável apenas pelo seu próprio comportamento.
- **Princípio da Responsabilidade Única (SRP):** a classe `Escola` passou a ser responsável apenas por gerenciar e notificar observadores, enquanto cada canal de notificação ficou responsável pelo envio da mensagem.
- **Princípio Aberto/Fechado (OCP):** novos canais de notificação podem ser adicionados sem modificar a classe `Escola`.

## Alterações realizadas
- criação da classe `Comunicado` para representar os dados da mensagem.
- Criação da abstração `Notificacao` para definir o contrato dos observadores.
- Implementação das classes `Email`, `WhatsApp` e `Portal`, cada uma responsável por um tipo de notificação.
- A classe `Escola` passou a apenas cadastrar, remover e notificar observadores.
- Implementação do cadastro, remoção e notificação de observadores.

## Benefícios obtidos
- Redução do acoplamento entre a classe `Escola` e os canais de notificação.
- Eliminação de estruturas condicionais `if` para decidir o tipo de notificação.
- Facilidade para adicionar novos canais sem alterar o código existente.
- Melhor separação de responsabilidades entre as classes.
- Código mais organizado, reutilizável e de fácil manutenção.
- Maior aderência aos princípios da orientação a objetos e ao princípio Aberto/Fechado (OCP).

## Trade-offs
- A solução utiliza mais classes do que a implementação inicial.
- É necessário gerenciar corretamente o cadastro e a remoção dos observadores.
- Para projetos muito pequenos, a implementação pode ser mais complexa do que o necessário.

## Como executar

## Instalar as dependências:

```bash
npm install
```

## Código original:

```bash
npm run before
```

## Código refatorado:

```bash
npm run after
```

## Testes do código original:

```bash
npm run test:before
```

## Testes do código refatorado:

```bash
npm run test:after
```