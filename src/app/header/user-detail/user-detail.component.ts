import { Component, OnInit } from '@angular/core';
// Import para verificarmos se o usuario esta autenticado no sistema
import { LoginService } from '../../security/login/login.service'
// Import para pegar o nome do usuario que se autenticou
import { User } from '../../security/login/user.model'

@Component({
  selector: 'mt-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {

  constructor(private loginService: LoginService) { }

  ngOnInit() {
  }

  // metodo que retorna o usuario autenticado
  user(): User{
    return this.loginService.user
  }

  // metodo que verifica se usuario esta autenticado ou nao
  isLoggedIn(): boolean {
    return this.loginService.isLoogedIn()
  }

  // metodo que faz Login
  login(){
    this.loginService.handleLogin()
  }

  // metodo que faz Logout
  logout(){
    this.loginService.logout()  // metodo ainda nao existe na classe LoginService
  }



}
