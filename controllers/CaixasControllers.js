const knex = require('../db/conexao');
class CaixasControllers {

  constructor() {
    this.conexao = knex;
  }

  async create(req, res) {
    const {
      id_usuario,
      id_produto,
      quantidade_produto
    } = req.body;
    const caixas = await this.conexao('caixa').insert({
      id_usuario,
      id_produto,
      quantidade_produto
    }).debug()
    return res.status(201).json(caixas)
  }

  async getAll(req, res) {
    const caixas = await this.conexao('caixa').debug();
    return res.status(200).json(caixas);
  }
  async getOne(req, res) {
    const { id } = req.body;
    const caixas = await this.conexao('caixa').where('id', id).first().debug();
    return res.status(200).json(caixas);
  }

  async deleteOne(req, res) {
    const { id } = req.body;
    const caixas = await this.conexao('caixa').del().where('id', id).debug();
    return res.status(200).json(caixas);
  }
  async put(req,res) {
    const{
      id, 
      id_usuario,
      id_produto,
      quantidade_produto }= req.body;
    const caixas = await this.conexao('caixa').where('id' , id).update({
      id_usuario,
      id_produto,
      quantidade_produto
    }).debug()
    return res.status(200).json(caixas);
}
}

module.exports = CaixasControllers;