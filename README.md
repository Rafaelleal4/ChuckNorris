# Chuck Norris Memes

## Descrição do Projeto:

O projeto "Chuck Norris Memes" é uma aplicação web que exibe frases e imagens engraçadas relacionadas ao famoso Chuck Norris. O objetivo do projeto é proporcionar uma experiência divertida para os usuários, onde eles podem desfrutar de frases hilárias e memes do Chuck Norris.

## Funcionalidades do Projeto

### Página Inicial:

Exibe frases e imagens aleatórias do Chuck Norris obtidas de uma API externa.
Carrega uma imagem aleatória de uma lista de memes para complementar a frase.
Página de Cadastro:

Permite aos usuários registrar uma nova frase do Chuck Norris e o autor da frase.
Valida os campos de entrada, exibindo mensagens de erro se os campos estiverem vazios.
Exibe uma lista de frases registradas e permite a exclusão de frases.
Tecnologias Utilizadas

## As principais tecnologias e ferramentas utilizadas na construção do projeto são:

- React: 
Para o desenvolvimento do frontend da aplicação.

- React Icons:
Bibiloteca usada para incorporar ícones em componentes React de maneira fácil e conveniente.

- Axios: 
Biblioteca para fazer solicitações à API externa.

- Next.js: 
Framework React para renderização do lado do servidor.

## Inicialização:
Para inicializar o projeto após o clone do repositório, siga estas etapas:

- Navegue para a pasta do frontend e execute npm install para instalar as dependências.
- Em seguida, execute npm start para iniciar o frontend da aplicação.
- Para o backend, navegue para a pasta correspondente e execute npm install.
- Execute npm start para iniciar o servidor backend.
- A aplicação estará disponível em http://localhost:3000.

## Implementações Futuras
O projeto "Chuck Norris Memes" é um trabalho em andamento. Implementações futuras planejadas incluem:

- Adicionar autenticação de usuário.
- Permitir que os usuários curtam frases do Chuck Norris.
- Melhorar a interface do usuário.

## Colaboradores
- Rafael Leal - https://github.com/Rafaelleal4
- Noah Meirelles - https://github.com/noahmeirelles
- Caio Ciccarelli - https://github.com/CaioCicca
- Pablo Couto - https://github.com/pablo-boop
- Lucas Rios - https://github.com/LucasRiosF
- Nathan - https://github.com/nathanhalgumacoisa

## Status do Projeto
O projeto "Chuck Norris Memes" está em andamento e continua a receber melhorias e atualizações conforme necessário.

## Detalhamento da Página

### Arquivo star.js
Este arquivo representa a página inicial da aplicação e é responsável por exibir frases e imagens aleatórias do Chuck Norris.

O componente star é uma função React que renderiza a página inicial.
Ele faz uma solicitação a uma API externa para obter uma frase aleatória do Chuck Norris usando a função personagens.
A resposta da API é armazenada no estado dadosApi usando o hook useState.
### Arquivo personagens.js
Este arquivo exporta a função personagens, que é responsável por fazer a solicitação à API externa.

A URL da API externa é definida como URL_API, que é "https://api.chucknorris.io/jokes/random".
A função personagens usa a biblioteca Axios para fazer uma solicitação GET a essa URL.
A resposta da API é retornada como resposta.data.
### Arquivo memes.js
Este arquivo exporta uma matriz de objetos, onde cada objeto representa um meme do Chuck Norris. Cada objeto contém um id e um link para uma imagem de meme.

### Arquivo Register.js
Este arquivo define duas classes: Registro e ListaRegistro, que são usadas para gerenciar os registros de frases na aplicação.

- A classe Registro é usada para criar objetos que representam uma frase, autor e um contador de corações (inicializado em 0). 
- Os objetos têm um ID gerado aleatoriamente.
A classe ListaRegistro é usada para gerenciar uma lista de registros. 
- Ela possui métodos para adicionar registros, obter todos os registros, verificar campos vazios, obter registros por ID e excluir registros.
### Arquivo teste.js
Este arquivo representa uma página onde os usuários podem registrar frases do Chuck Norris.

- Ele usa os componentes definidos nos arquivos Registro e Cadastro.
- Os estados frase e author são usados para armazenar os valores digitados pelo usuário nos campos de entrada.
- A função add é chamada quando o botão "Registrar" é clicado. Ela cria um novo objeto Registro com os valores dos campos e chama verifyInputs para validar os campos.
- A função verifyInputs verifica se os campos estão vazios e exibe uma mensagem de erro se necessário.
- A função clean é chamada para limpar os campos de entrada após o registro.
### Arquivo cadastro.js
Este arquivo representa uma página semelhante à página teste.js para registrar frases do Chuck Norris.

- Ele usa o hook useState para armazenar o URL da imagem no estado image.
- O componente faz uma solicitação para escolher um meme aleatório da lista de memes quando é montado.
### Arquivo header.js
Este arquivo define o componente Header, que exibe o cabeçalho da aplicação com links para as páginas inicial e de cadastro.

- Ele usa o componente Link do Next.js para criar links internos para as páginas.
- O componente Header é usado em várias partes da aplicação para exibir um cabeçalho consistente.