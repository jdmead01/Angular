const controller = require("./controller");

module.exports = function(app){
    // app.get('/', controller.home)
    app.get('/cakes', controller.getAll)
    app.post('/cakes/', controller.create)
    app.get('/cakes/:id/', controller.id)
    app.put('/cakes/:id/', controller.update)
    app.delete('/cakes/:id/', controller.delete)
    app.post('/generate/', controller.generate)
}