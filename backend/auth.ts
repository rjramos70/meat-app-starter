import { Request, Response } from 'express'

// Import da classe User e da lista de usuarios Mockados
import { User, users } from './users'

// Import a biblioteca que irá criar e administrar esse token
// essa dependência esta declarada no arquivo package.json que
// se encontra na raiz do projeto
import * as jwt from 'jsonwebtoken'

// Import da cosntante de senha
import { apiConfig } from './api-config'


export const handleAuthentication = (req: Request, resp: Response) => {
  const user: User = req.body
  if(isValid(user)){
    // Se 'user' veio preenchido, verificar se o mesmo tem permissao de acesso
    const dbUser = users[user.email]
    const token = jwt.sign({ sub: dbUser.email, iss: 'meat-api'}, apiConfig.secret)
    resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token})
  }else{
    resp.status(403).json({message: 'Dados invalidos'})
  }
}


function isValid(user: User): boolean {
  if(!user){
    return false
  }
  // Se usuario nao for vazio
  const dbUser = users[user.email]
  return dbUser !== undefined && dbUser.matches(user)
}
