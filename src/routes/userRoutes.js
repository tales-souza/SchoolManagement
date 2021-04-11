import { Router } from 'express';
import userController from '../controllers/UserController';
import verifyLogin from '../middlewares/verifyLogin'

const router = new Router();

router.post('/', userController.store);
router.get('/', verifyLogin, userController.index);
router.get('/:id', userController.show)
router.put('/:id',verifyLogin, userController.update);
router.delete('/:id', userController.delete);





export default router;
