const controller = require("./controller");

module.exports = function(app){
    app.get('/tasks', controller.home)
    app.post('/tasks/', controller.create)
    app.get('/tasks/:id/', controller.id)
    app.put('/tasks/:id/', controller.update)
    app.delete('/tasks/:id/', controller.delete)
    app.post('/generate/', controller.generate)
}