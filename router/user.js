
const { Router } = require('express');
const { usuarioGet, usuarioDelete, usuarioPost, usuarioPut } = require('../controladores/controladores');
const routes = Router();



routes.get('/',usuarioGet)

routes.post('/:idP',usuarioPost)

routes.delete('/', usuarioDelete)


routes.put('/:id',usuarioPut)

module.exports = routes;