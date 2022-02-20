const express = require('express');
const UsuariosControllers = require('../controllers/UsuariosControllers');
const ProdutosControllers = require('../controllers/ProdutosControllers');
const CaixasControllers = require('../controllers/CaixasControllers');
const routes = express();
const usuariosController = new UsuariosControllers();
const produtosController = new ProdutosControllers();
const caixasController = new CaixasControllers();

routes.get('/', (req, res) => {
  return res.status(200).json("Hello world!!")
})

routes.post('/usuarios', (req, res) => {
  usuariosController.create(req, res)
});
 routes.get('/usuarios', (req, res) => {
  usuariosController.getAll(req, res)
 });

routes.delete('/usuarios', (req, res) => {
  usuariosController.deleteOne(req, res)
});

routes.get('/usuarios/one', (req, res) => {
  usuariosController.getOne(req, res)
});
routes.put('/usuarios', (req,res) =>{
  usuariosController.put(req,res)
});
routes.patch('/usuarios', (req,res) =>{
  usuariosController.patch(req,res)
});
routes.post('/produtos', (req, res) => {
  produtosController.create(req, res)
});
routes.get('/produtos', (req, res) => {
  produtosController.getAll(req, res)
 });
 routes.delete('/produtos', (req, res) => {
  produtosController.deleteOne(req, res)
});
routes.get('/produtos/one', (req, res) => {
  produtosController.getOne(req, res)
});
routes.put('/produtos', (req,res) =>{
  produtosController.put(req,res)
});
routes.patch('/produtos', (req,res) =>{
  produtosController.patch(req,res)
});
routes.post('/caixas', (req, res) => {
  caixasController.create(req, res)
});
routes.get('/caixas', (req, res) => {
  caixasController.getAll(req, res)
 });
 routes.delete('/caixas', (req, res) => {
  caixasController.deleteOne(req, res)
});
routes.get('/caixas/one', (req, res) => {
  caixasController.getOne(req, res)
});
routes.patch('/caixas', (req,res) =>{
  caixasController.patch(req,res)
});

module.exports = routes;