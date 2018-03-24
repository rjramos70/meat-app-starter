import { Injectable } from '@angular/core'
import { HttpClient } from '@angular/common/http'

import { Observable } from 'rxjs/Observable'
import 'rxjs/add/operator/do'
// Import para podermos filtrar qual evento queremos do Observable
import 'rxjs/add/operator/filter'

import { MEAT_API } from '../../app.api'

import { User } from './user.model'

// Impor para redirecionamento da rota para a tela de autenticacao
import { Router, NavigationEnd } from '@angular/router'


@Injectable()
export class LoginService {

  user: User
  lastUrl: string   // armazena a ultima URL do usuario, pois o mesmo sera redirecionado logo apos se autenticar

  // Injetamos o Rouer para redicionamento da rota
  constructor(private http: HttpClient,
              private router: Router){

      // Vamos nos inscrever no Observable para ficar verificando as URLs navegadas
      this.router.events.filter( e => e instanceof NavigationEnd) // filtramos para pegar a NavigationEnd
                        .subscribe( (e: NavigationEnd) => this.lastUrl = e.url ) // como ja filtramos, podemos tipar a variavel 'e' e salvar na variavel
  }

  isLoogedIn(): boolean{
    return this.user !== undefined
  }

  login(email: string, password: string): Observable<User>{
    return this.http.post<User>(`${MEAT_API}/login`,
                        {email: email, password: password})
                    .do(user => this.user = user)
  }

  // metodo que faz o logout do usuario
  logout(){
    // basicamente o que precisamos fazer e destruir o usuario logado
    this.user = undefined
  }

  // metodo que direciona para a tela de autenticacao
  // parametro path que e opcional(?), que sera a URL de redirecionamento apos
  // o usuario se autenticar
  handleLogin(path: string = this.lastUrl){
    this.router.navigate(['/login', btoa(path)])  // btoa(path) encoda o path
  }
}
