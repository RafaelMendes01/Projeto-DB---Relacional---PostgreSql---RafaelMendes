const knex = require('../db/conexao');
class UsuariosControllers {

  constructor() {
    this.conexao = knex;
  }

  async create(req, res) {
    const {
      nome,
      email,
      senha,
      produtos
    } = req.body;
    const usuarios = await this.conexao('usuarios').insert({
      nome,
      email,
      senha,
      produtos
    }).debug()
    return res.status(201).json(usuarios)
  }
  async getAll(req, res) {
    const usuarios = await this.conexao('usuarios').debug();
    return res.status(200).json(usuarios);
  }

}

module.exports = UsuariosControllers;