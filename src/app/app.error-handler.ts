<<<<<<< HEAD
import { HttpErrorResponse } from '@angular/common/http'
import { Observable } from 'rxjs/Observable'
import 'rxjs/add/observable/throw'

// Import para tratamento do ErrorHandler
// NgZone sera usada para criarmos as zonas das mensagens de ErrorHandler
import { ErrorHandler, Injectable, Injector, NgZone } from '@angular/core'

// Import para utilizarmos NotificationService
import { NotificationService } from './shared/messages/notification.service'

// Import da LoginService para quando houver erro 404, direcionar o usuario para
// a pagina de login.
import { LoginService } from './security/login/login.service'

@Injectable() // Por ser um provider, todo provider precisa declarar @Injectable()
// a interface ErrorHandler e a padrao do Angular, que basicamente imprime o erro
// se nao o tratarmos.
export class ApplicationErrorHandler extends ErrorHandler {

  constructor(private ns: NotificationService,
              private injector: Injector,  // Se usassemos 'LoginService', seria gerado dependencia ciclica, com isso usamos 'Injector'
              private zone: NgZone
             ){
    // como foi criado esse construtor padrao, o construtor da classe Pai
    // parou de ser chamado, com isso basta fazer uma chamada ao construtor
    // do ErrorHandler fazendo uma chamada ao super(). Ele tem um parametro,
    // mas nas versoes mais novas ele ficou DEPRECATED e entao nao precisa ser
    // declarado.
    super()
  }

  // Essa classe handleError ja tem um metodo 'handleError', porem essse nao pode
  // ser static, esse tem que ser um metodo de instancia.
  handleError(errorResponse: HttpErrorResponse | any){

    // Vamos gerar um erro forcado para testarmos nosso novo ErrorHandler
    // this.ns.notify('ERRO para teste!')

    // Primeiro verificamos se o erro e uma instancia de HttpErrorResponse
    if(errorResponse instanceof HttpErrorResponse){
      // Os objetos que retornam do backend trazem uma mensagem padrao, vamos recuperar essas mensagens
      const message = errorResponse.error.message

      // Cria uma zona para que o metodo execute todas as mensagens de erro igualmente
      // --> Metodo run() pode executar uma funcao monitorada, com isso iremos colocar todo o switch dentro dessa funcao
      this.zone.run( () => {
        // Se sim, verificamos e tratamos qual o tipo de erro.
        switch(errorResponse.status){
          case 401: // quando se faz um request e acessa algum recurso protegido sem autenticacao, direcionar usuario para pagina de login
            this.injector.get(LoginService).handleLogin()
            break;

          case 403: // esta tentando fazer algo que nao tem permissao, tentou acessar algo, ou tentou sem autenticacao
            this.ns.notify(message || 'Usuario nao autorizado.')
            break;

          case 404: // quando URL nao encontrada
            this.ns.notify(message || 'Recurso nao encontrado. Verifique o console para maiores detalhes.')
            break;

        }
      })
        
    }

    /*
    let errorMessage: string
    if(error instanceof HttpErrorResponse){
      const body = error.error  // ja tras o erro em JSon
      errorMessage = `Erro ${error.url}: ${error.status} - ${error.statusText || ''}  ${body}`
    }else{
      errorMessage = error.message ? error.message : error.toString()
    }
    console.log(errorMessage)
    return Observable.throw(errorMessage)
    */

    // substitui o codigo acima usando o metodo 'handleError' da classe Pai
    super.handleError(errorResponse)
=======
import { Response } from '@angular/http'
import { Observable } from 'rxjs/Observable'

export class ErrorHandler {

  static handleError(error: Response | any){

    let errorMessage: string
    if(error instanceof Response){
      errorMessage = `Erro ${error.status} ao acessar a URL ${error.url} - ${error.statusText}`
    }else{
      errorMessage = error.toString()
    }
    console.log(errorMessage)
    return Observable.throw(errorMessage)

>>>>>>> 0a747c5df288d7552378e93a01d4725ba48820e0
  }

}
