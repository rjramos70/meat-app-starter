export class User{
  constructor(public email: string,
              public name: string,
              private password: string){}

  // Funcionalidade que compara se o usuario esta
  // na lista de usuario Mockados
  matches(another: User): boolean{
    // Se os dados baterem o mesmo tem permissao de acesso
    return another !== undefined &&
           another.email == this.email &&
           another.password === this.password
  }
}

// Lista de usuario teste que iram trabalhar em memoria
// Tipamos users informando que a chave e do tipo string e o valor do tipo User
export const users: {[ key: string]: User} = {
  "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', 'juliana23' ),
  "amanda@gmail.com": new User('amanda@gmail.com', 'Amanda', 'amanda21' )
}
