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
      //só terá acesso a esta rota um superusuário.
      const users = await User.findAll({ attributes: ['id', 'nome', 'email'] });
      return res.status(200).json(users);
    } catch (e) {
      return res.status(500).json(e.message);
    }
  }

  async show(req, res) {
    try {

      if(req.userId != req.params.id){
        return res.status(401).json({
          errors: ['Não autorizado']
        })
      }
      const user = await User.findByPk(req.params.id);
      const { id, nome, email } = user;
      
      return res.status(200).json({ id, nome, email });
    } catch (e) {
      return res.status(500).json({
      
      })

    }
  }

  async update(req, res) {
    try {
      if (!req.params.id) {
        return res.status(400).json({
          errors: ['ID Não enviado']
        })
      }

      if (req.params.id != req.userId) {
        return res.status(401).json({
          errors: ['Não autorizado']
        })
      }

      const user = await User.findByPk(req.params.id);

      if (!user) {
        return res.status(400).json({
          errors: ['Usuário não encontrado']
        })
      }
      const newData = await user.update(req.body);
      const { id, nome, email } = newData;



      return res.status(200).json({ id, nome, email });
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


      if (req.params.id != req.userId) {
        return res.status(401).json({
          errors: ['Não autorizado']
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
