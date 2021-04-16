import { Router } from 'express';
import alunoController from '../controllers/AlunoController'
import verifyLogin from '../middlewares/verifyLogin'

const router = new Router();

router.get('/', verifyLogin,  alunoController.index)
router.post('/', verifyLogin,  alunoController.store);


export default router;
