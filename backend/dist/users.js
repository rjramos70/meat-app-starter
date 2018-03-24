"use strict";
exports.__esModule = true;
var User = (function () {
    function User(email, name, password) {
        this.email = email;
        this.name = name;
        this.password = password;
    }
    // Funcionalidade que compara se o usuario esta
    // na lista de usuario Mockados
    User.prototype.matches = function (another) {
        // Se os dados baterem o mesmo tem permissao de acesso
        return another !== undefined &&
            another.email == this.email &&
            another.password === this.password;
    };
    return User;
}());
exports.User = User;
// Lista de usuario teste que iram trabalhar em memoria
exports.users = {
    "juliana@gmail.com": new User('juliana@gmail.com', 'Juliana', 'juliana23'),
    "amanda@gmail.com": new User('amanda@gmail.com', 'Amanda', 'amanda21')
};
