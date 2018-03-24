// Refatorando os importd de JavaScript em Typescript
import * as jsonServer from 'json-server'
import { Express } from 'express'

// Imports de biblioteca que podem ler arquivos no disco
import * as fs from 'fs'
// Importando os modulos HTTPS
import * as https from 'https'

// Import da classe de autenticacao de login e senha
import { handleAuthentication } from './auth'
// Import do middleware de autorizacao
import { handleAuthorization } from './authz'

const server: Express = jsonServer.create()
const router = jsonServer.router('db.json')
const middlewares = jsonServer.defaults()

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares)

// To handle POST, PUT and PATCH you need to use a body-parser
// You can use the one used by JSON Server
server.use(jsonServer.bodyParser)

// Iremos criar abaixo nossas middlewares personalizadas de nossa aplicacao
// para tratamento de login e senha
server.post('/login', handleAuthentication)
server.use('/orders', handleAuthorization)


// Use default router
server.use(router)

const options = {
  cert: fs.readFileSync('./backend/keys/cert.pem'),
  key: fs.readFileSync('./backend/keys/key.pem')
}
const port = 3001
https.createServer(options, server).listen(port, () => {
  console.log(`JSON Server is running on https://localhost:${port}`)
})
