let usuario = require('../controllers/usuario')
let auth = require('../controllers/auth.js')

module.exports= function(app){
    app.post('/api/usuarios/singin', auth.logar) 
    app.use('/api/usuarios', auth.checar)
    app.get("/api/usuarios", controller.listarUsuarios)
    app.get('/api/usuarios', usuario.getUsuarios)
    app.get('/api/usuarios/:id', usuario.getUsuarioById)
    app.post('/api/usuarios', usuario.inserirUsuario)
    app.put('/api/usuarios/:id', usuario.updateUsuarioById)
    app.delete('/api/usuarios/:id', usuario.removeUsuarioById)
    app.get("/api/usuarios/:id/posts", controller.getPostsUsuario)
}