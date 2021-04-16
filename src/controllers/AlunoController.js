import Aluno from '../models/Aluno';

class AlunoController {

  async store(req, res) {
    try {
      const novoAluno = await Aluno.create(req.body);
      return res.status(201).json(novoAluno);
    } catch (e) {
      res.status(400).json({ errors: e.errors.map((err) => err.message) })
    }
  
  }

  async index(req, res) {
    const alunos = await Aluno.findAll();
    return res.status(200).json(alunos);
  }


}


export default new AlunoController();
