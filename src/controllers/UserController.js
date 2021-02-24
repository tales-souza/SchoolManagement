import User from '../models/User'

class UserController {

  async store(req, res) {
    try {
      const newUser = await User.create(req.body);
      res.status(201).json(newUser);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) })
    }
  }

  async index(req, res) {
    try {
      const users = await User.findAll();
      return res.status(200).json(users);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  async show(req, res) {
    try {
      const user = await User.findByPk(req.params.id);
      return res.status(200).json(user);
    } catch (e) {
      return res.status(404).json(null)

    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID Não enviado']
        })
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado']
        })
      }

      const newData = await user.update(req.body);
      return res.status(200).json(newData);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) })

    }
  }

  async delete(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID Não enviado']
        })
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado']
        })
      }

      await user.destroy();
      return res.status(200).json(user);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) })

    }
  }

}

export default new UserController();
