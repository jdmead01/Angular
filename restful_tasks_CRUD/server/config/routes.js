const controller = require("./controller");

module.exports = function(app){
    app.get('/', controller.home)
    app.post('/create/', controller.create)
    app.get('/get/:id/', controller.id)
    app.put('/update/:id/', controller.update)
    app.delete('/destroy/:id/', controller.delete)
    app.post('/generate/', controller.generate)
}