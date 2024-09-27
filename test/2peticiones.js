
process.env.NODE_ENV = 'test';
const server = require('../server');
const assert = require('chai').assert;
const chai = require('chai');
const chatHttp = require('chai-http');
chai.use(chatHttp)

//primero verificamos que el servidor ya esta levantado
// eslint-disable-next-line no-undef
before(function (done) {
    server.on("appStarted", function(){
        done();
    });
});


//haremos una prueba haciendo una peticion a la ruta /
//y verificando que el status sea 200
//note que ahora se utiliza el parametro done
// eslint-disable-next-line no-undef
describe('02 prueba peticiones usaremos chai-http', () => {

    //primera prueba para verificar que raiz responda
    // eslint-disable-next-line no-undef
    it('probando el status de el get a la raiz', (done) => {
        chai.request(server)
            .get('/')
            .end((err, res) => {
                assert.equal(res.status, 200);
                done();
            });
    }
    );


    //segunda prueba insertamos una tarea
    //obtendremos el id de la tarea insertada para luego eliminarla
    let idTarea = '';
    // eslint-disable-next-line no-undef
    it('Insertando datos', (done) => {
        chai.request(server)
            .post('/tareas')
            .send({ nombre: 'insertando prueba mocha ABC', hecho:false })
            .end((err, res) => {
                //console.log(res.body);
                idTarea = res.body.id;
                assert.equal(res.status, 200);
                done();
            });
    });


    //verificamos que la nueva tarea este agregada en la ruta /tarea
    // eslint-disable-next-line no-undef
    it('Verificando que la tarea se inserto', (done) => {
        chai.request(server)
            .get('/tareas')
            .end((err, res) => {
                assert.equal(res.status, 200);
                //console.log(res.body);
                let tareas=res.body;
                //console.log(idTarea);
                let tarea=tareas.find(t=>t._id==idTarea);
                assert.equal(tarea._id,idTarea);
                done();
            });
    });


    //ahora eliminamos la tarea que acabamos de agregar
    // eslint-disable-next-line no-undef
    it('Eliminando la tarea insertada', (done) => {
        chai.request(server)
            .delete('/tareas/delete/'+idTarea)
            .end((err, res) => {
                assert.equal(res.status, 204);
                done();
            });
    }
    );
    
});