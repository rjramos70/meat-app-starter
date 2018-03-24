"use strict";
exports.__esModule = true;
// Import da classe User e da lista de usuarios Mockados
var users_1 = require("./users");
// Import a biblioteca que irá criar e administrar esse token
// essa dependência esta declarada no arquivo package.json que
// se encontra na raiz do projeto
var jwt = require("jsonwebtoken");
// Import da cosntante de senha
var api_config_1 = require("./api-config");
exports.handleAuthentication = function (req, resp) {
    var user = req.body;
    if (isValid(user)) {
        // Se 'user' veio preenchido, verificar se o mesmo tem permissao de acesso
        var dbUser = users_1.users[user.email];
        var token = jwt.sign({ sub: dbUser.email, iss: 'meat-api' }, api_config_1.apiConfig.secret);
        resp.json({ name: dbUser.name, email: dbUser.email, accessToken: token });
    }
    else {
        resp.status(403).json({ message: 'Dados invalidos' });
    }
};
function isValid(user) {
    if (!user) {
        return false;
    }
    // Se usuario nao for vazio
    var dbUser = users_1.users[user.email];
    return dbUser !== undefined && dbUser.matches(user);
}
