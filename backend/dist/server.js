"use strict";
exports.__esModule = true;
// Refatorando os importd de JavaScript em Typescript
var jsonServer = require("json-server");
// Imports de biblioteca que podem ler arquivos no disco
var fs = require("fs");
// Importando os modulos HTTPS
var https = require("https");
// Import da classe de autenticacao de login e senha
var auth_1 = require("./auth");
// Import do middleware de autorizacao
var authz_1 = require("./authz");
var server = jsonServer.create();
var router = jsonServer.router('db.json');
var middlewares = jsonServer.defaults();
// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);
// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser);
// Iremos criar abaixo nossas middlewares personalizadas de nossa aplicacao
// para tratamento de login e senha
server.post('/login', auth_1.handleAuthentication);
server.use('/orders', authz_1.handleAuthorization);
// Use default router
server.use(router);
var options = {
    cert: fs.readFileSync('./backend/keys/cert.pem'),
    key: fs.readFileSync('./backend/keys/key.pem')
};
var port = 3001;
https.createServer(options, server).listen(port, function () {
    console.log("JSON Server is running on https://localhost:" + port);
});
