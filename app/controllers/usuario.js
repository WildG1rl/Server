let Usuario = require('../models/usuario')
let Post = require('../models/post')
let crypt = require('bcrypt')

module.exports.inserirUsuario = function (req, res) {
    let usuario = new Usuario({
        nome: req.body.nome,
        email: req.body.email,
        senha: bcrypt.hashSync(req, body.senha, 10)
    });

    let promise = Usuario.create(usuario)
    promise.then(
        function (usuario) {
            res.status(201).json({
                _id: usuario._id,
                nome: usuario.nome,
                email: usuario.email
            })
        }
    )
        .catch(
            function (error) {
                res.status(404).send('nao existe');
            }

        )
}

module.exports.listarUsuarios = function(req,res){
    let promise = Usuario.find().exec();
    promise.then(
        function(usuarios){
            res.json(usuarios)
        },
        function(erro){
            res.status(500).end();
        }
    );
}

module.exports.getUsuarios = function (req, res) {
    let promise = Usuario.find()
    promise.then(
        function (usuarios) {
            res.status(201).json(usuarios)
        }
    )
        .catch(
            function () {
                res.status(404).send('nao existe')
            }
        )

}

module.exports.getUsuarioById = function (req, res) {
    let id = req.params.id
    let promise = Usuario.findById(id);
    promise.then(
        function (usuario) {
            res.status(201).json(usuario)
        }
    )
        .catch(
            function (usuario) {
                res.status(404).send('nao existe')
            }
        )
}

module.exports.removeUsuarioById = function (req, res) {
    let id = req.params.id
    let promise = Usuario.findByIdAndRemove(id);
    promise.then(
        function (usuario) {
            res.status(201).json(usuario)
        }
    )
        .catch(
            function (usuario) {
                res.status(404).send('nao existe')
            }
        )
}

module.exports.updateUsuarioById = function (req, res) {
    var decode = jwt.decode(req.query.token);
    let idToken = decoded.user._id;
        
        let promise = Usuario.update(Usuario.findById(idToken), req.body);
        promise.then(
            function(usuario){
                res.json(usuario)
            },
            function(erro){
                res.status(404).send('Post não encontrado');
            }
        );
    };

module.exports.getPostsUsuario = function(req,res){
    let promise = Post.find({'uid':req.params.id}).exec();
    promise.then(
        function(usuario){
          res.status(200).json(usuario);
        },
        function(erro){
          res.status(500).json(erro);
        }
    )
}







