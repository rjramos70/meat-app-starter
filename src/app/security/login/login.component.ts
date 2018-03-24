import { Component, OnInit } from '@angular/core';
// Import para trabalhar com formulario
import { FormBuilder, FormGroup, Validators } from '@angular/forms'
// Import para loginService
import { LoginService } from './login.service'
import { User } from './user.model'
// Import para usarmos a barra de notificacao ao cliente
import { NotificationService } from '../../shared/messages/notification.service'
// Import para pegar a URL ativa a ser passado para a variavel navigateTo que
// sera o redirecionamento do fluxo apos o usuario se autenticar com sucesso
import { ActivatedRoute, Router } from '@angular/router'

@Component({
  selector: 'mt-login',
  templateUrl: './login.component.html'
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup
  navigateTo: string

  // Injetamos ActivatedRoute para pegar a rota que o fluxo seguira logo apos o
  // usuario se autenticar
  constructor(private fb: FormBuilder,
              private loginService: LoginService,
              private notificationService: NotificationService,
              private activatedRoute: ActivatedRoute,
              private router: Router) { }

  ngOnInit() {
    // Associar os campos do formulario com as variaveis locais da classe
    this.loginForm = this.fb.group({
        email: this.fb.control('', [Validators.required, Validators.email]),
        password: this.fb.control('', [Validators.required])
    })
    // Pegamos a referencia da URl destino atraves do snapshot do parametro
    // 'to' da URL e carregamos na variavel 'navigateTo', e caso ninguem passe
    // uma rota, redirecionaremos para raiz ('/')
    this.navigateTo = this.activatedRoute.snapshot.params['to'] || btoa('/')  // encoda o path
  }

  // metodo de login
  login(){
    this.loginService.login(this.loginForm.value.email,
                            this.loginForm.value.password)
                     .subscribe(user =>
                                    this.notificationService.notify(`Bem vindo, ${user.name}`), // callback de sucesso
                                response => // response e do tipo HttpErrorResponse
                                    this.notificationService.notify(response.error.message),    // callback de error
                                () => {                                                         // le o Observable, que nesse casso e uma funcao
                                        this.router.navigate([atob(this.navigateTo)])           // atob(this.navigateTo) faz o decode do path
                                      }
                                  )
  }

}
