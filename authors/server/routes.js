const controller = require("./controller");

module.exports = function(app){
    app.get('/author', controller.home)
    app.post('/author/new', controller.create)
    app.get('/author/:id', controller.id)
    app.put('/author/:id', controller.update)
    app.delete('/author/:id/', controller.delete)
    app.get('/generate', controller.generate)
}