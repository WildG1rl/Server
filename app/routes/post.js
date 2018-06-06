let post = require('../controllers/post')
var auth = require("../controllers/auth.js")

module.exports= function(app){
    app.use("/api/posts", auth.logar);
    app.get("/api/posts", controller.listarPosts);
    app.get('/api/posts', post.getPosts)
    app.get('/api/posts/:id', post.getPostById)
    app.post('/api/posts', post.inserirPost)
    app.put('/api/posts/:id', post.updatePostById)
    app.delete('/api/posts/:id', post.removePostById)
}