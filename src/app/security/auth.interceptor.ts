import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'

// Import Injectable para injetar o LoginService
import { Injectable, Injector } from '@angular/core'

// Import do LoginService que sera injetado para trabalhar no interceptor
import { LoginService } from './login/login.service'

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  // Criando o construtor para injetar as classes
  // constructor(private loginService: LoginService){}

  // Injector e uma referencia para um mecanismo de injecao de dependencia do angular,
  // entao atraves do injector voce pode obter qualquer objeto que esteja registrado
  // dentro do container de injecao de dependencia, exemplo, uma referencia para o
  // NatiticationService, uma referencia para o LoginService.
  constructor(private injector: Injector){}

  // resquest = objeto que eu quero interceptar e modificar
  // next     = um objeto que representa o proximo interceptor na fila de
  //            interceptors, ou ultimo objeto responsavel por fazer a chamada
  //            final ao backend ou a qualquer lugar.
  // Quando o interceptor do request termina, ele precisa passar esse objeto para
  // o next para que ele faca para o resto da fila, resto da cadeia.
  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {

    // obter uma referencia para nosso LoginService
    const loginService = this.injector.get(LoginService)

    // nesse ponto e que iremos colocar nosso token personalizado caso nosso usuario esteja autenticado
    if(loginService.isLoogedIn()){
      // Ja que usuario esta autenticado, vamos incluir um header
      // como a instancia de HttpRequest e imutavel, teremos que clonar a instancia e setar o header
      const authRequest = request.clone(
              { setHeaders: {'Authorization' : `Bearer ${loginService.user.accessToken}`} })
      // alteramos o authRequest

      // processar o request alterado
      return next.handle(authRequest)
    }else{
      // Nao fez nada no request e chamou o next
      return next.handle(request)
    }


  }

}
