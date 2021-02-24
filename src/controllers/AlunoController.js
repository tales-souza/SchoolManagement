import Aluno from '../models/Aluno';

class AlunoController {

  async store(req, res) {
    const novoAluno = await Aluno.create(req.body);
    return res.status(201).json(novoAluno);
  }
}



export default new AlunoController();
