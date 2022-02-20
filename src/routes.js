const express = require('express');
const routes = express();
const UsuariosControllers = require('../controllers/UsuariosControllers');
const usuariosController = new UsuariosControllers();

routes.get('/', (req, res) => {
    return res.status(200).json("Conexao funcionado")
  });
  routes.post('/usuarios', (req, res) => {
    usuariosController.create(req, res)
  });
//   routes.get('/usuarios', (req, res) => {
//     usuariosController.getAll(req, res)
//   });


module.exports = routes;