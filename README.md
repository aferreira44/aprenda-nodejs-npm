# Aprenda Node.js e NPM

## Introdução

[Node.js - Website Oficial](https://nodejs.org/en/)

[Node.js - Documentação](https://nodejs.org/api/)

[NPM - Website Oficial](https://www.npmjs.com/)

[NPM - Documentação](https://docs.npmjs.com/)

## Instalação

```shell
sudo apt-get install -y nodejs
```

### Exibe versão instalada do Node.js

```shell
$ node -v
v6.10.3
```

### Exibe versão instalada do NPM

```shell
$ npm -v
3.10.10
```

### Inicia um projeto com o NPM criando o arquivo package.json com configuração padrão

```shell
npm init -y
```

### Instala um pacote global

```shell
npm install -g <nome-do-pacote>
```

### Instala um pacote local no seu projeto

```shell
npm install <nome-do-pacote>
```

### Instala um pacote local no seu projeto e o salva como dependência de produção no arquivo `package.json`

```shell
npm install --save <nome-do-pacote>
```

### Instala um pacote local no seu projeto e o salva como dependência de desenvolvimento no arquivo `package.json`

```shell
npm install --save-dev <nome-do-pacote>
```

## Exercício

1. Criar uma nova pasta com `mkdir <nome-da-pasta>`
1. Navegar para dentro da pasta criada com `cd <nome-da-pasta>`
1. Executar `npm init -y`
1. Instalar o pacote local do React.js com `npm install --save react`
1. Dê uma olhada no arquivo `package.json` e na pasta `node_modules/` criados na pasta
1. Descubra como desinstalar o pacote React.js do projeto
1. Leia mais sobre o npm na [documentação oficial](https://docs.npmjs.com/).

## Módulos JavaScript

- Especificação para módulos: CommonJS API
- `module.exports`

- `exports` é um *alias* para `module.exports`

- Função `require` é usada para importar um módulo

### Módulo `rectangle.js`

```js
exports.perimeter = function (x, y) {
    return (2 * (x + y));
};

exports.area = function (x, y) {
    return (x * y);
};
```

- Para usar o módulo `rectangle`, devemos usar em nosso código:

```js
var rect = require('./rectangle');
```

### Programação Síncrona vs Programação Assíncrona

- Node, Event Loop, Async I/O and Callbacks

### Callbacks and Error Handling

- O primeiro parâmetro de um callback é de erro

```js

```

## Referências

- [Node.js - Playlist - Canal Rodrigo Branas](https://www.youtube.com/playlist?list=PLQCmSnNFVYnTFo60Bt972f8HA4Td7WKwq)
- [Server-side Development with NodeJS - Coursera](https://www.coursera.org/learn/server-side-development/)
- [Introdução ao NPM - Canal Rafael Dias](https://www.youtube.com/watch?v=WZoVzdi3N9s)