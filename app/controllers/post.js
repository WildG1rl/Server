let Usuario = require('../models/usuario');
let Post = require('../models/post');
let jwt = require('jsonwebtoken');

module.exports.inserirPost = function(req ,res){
    let decoded = jwt.decoded(req.query.token);
    let idTokenUser = decoded.user._id;
    let post = {
        texto: req.body.texto,
        uid: req.body.uid
    }
    let promise = Post.create(post)
    promise.then(
        function(post){
            res.status(201).json(post)
        }

    ) 
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}

module.exports.listarPosts = function(req, res){
    let promise = Post.find().exec();
    promise.then(
        function(posts){
            res.json(posts)
        },
        function(erro){
            res.status(500).end();
        }
    );
};

module.exports.getPosts = function(req, res){
    let promise = Post.find()
    promise.then(
        function(posts){
            res.status(201).json(posts)
        }
    )
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}
module.exports.getPostById = function(req, res){
    let id = req.params.id
    let promise = Post.findById(id)
    promise.then(
        function(post){
            res,status(201).json(post)
        }
    )
    .catch(
        function(){
            res.status(404).send('nao existe')
        }
    )
}
module.exports.removePostById = function(req, res){
    let id = req.params.id
    let promise = Post.findByIdAndRemove(id)
    post.then(
        function(post){
            uid = post.uid;
            (function(){
                if(idTokenUser == uid){
                    let promise = Post.findByIdAndRemove(id);
                    promise.then(
                        function(post){
                            res.status(200).json(post);
                        },
                        function(erro){
                            res.status(500).json(erro);
                        }
                    )
                }
            })();
        },
        function(erro){
            res.status(404).send('Post não encontrado');
        }
    ) 
};
module.exports.updatePostById = function(req, res){
    var decode = jwt.decode(req.query.token);
    let id = req.params.id;
    let idPostUsuario = req.body.uid;
    let idToken = decoded.user._id;
    if(idToken==idPostUsuario){
        let promise = Post.update(Post.findById(id), req.body);
        promise.then(
            function(post){
                res.json(post)
            },
            function(erro){
                res.status(404).send('Post não encontrado');
            }
        );
    };
}