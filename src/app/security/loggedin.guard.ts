import { CanLoad, Route, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router'
import { Injectable } from '@angular/core'

// Import para injetar o classe de validacao de login
import { LoginService } from './login/login.service'

@Injectable()
export class LoggedInGuard implements CanLoad, CanActivate {

  // Injetamos o servico LoginService para verficacao se o usuario esta autenticado ou nao
  constructor(private loginService: LoginService){}


  // como os dois metodos abaixo precisam validar se o usuario esta autenticado, foi feito uma refatoracao
  // e criado um metodo especifico para verficar se o usuario esta autenticado.
  checkAuthentication(path: string): boolean {
    // constante que retorna se o usuario esta autenticado ou nao
    const loggedIn = this.loginService.isLoogedIn()
    // SE usuario nao autenticado, levar para a pagina de login
    if(!loggedIn){
      this.loginService.handleLogin(`/${path}`) // path que sera passado para redirecionamento apos autenticacao
    }
    return loggedIn
  }

  canLoad(route: Route): boolean {
    console.log('canLoad')
    return this.checkAuthentication(route.path)
  }

  // metodo que trabalha com ativacao do Router
  canActivate(activatedRoute: ActivatedRouteSnapshot, routerState: RouterStateSnapshot): boolean{
    console.log('canActivate')
    return this.checkAuthentication(activatedRoute.routeConfig.path)
  }

}
