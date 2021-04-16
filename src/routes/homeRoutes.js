import { Router } from 'express';
import userController from '../controllers/UserController';
import alunoController from '../controllers/AlunoController'
const router = new Router();

router.post('/', (req, res) => {
  res.send('ok')
});

/*router.post('/users', userController.store);*/

export default router;
