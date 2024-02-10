import { Router } from 'express';
import { handlerCreateUser } from './controllers/user/create';
import { handlerListUsers } from './controllers/user/list';
import { handlerUserLogin } from './controllers/user/login';
import { authMiddleware } from './middlewares/authMiddleware';

const router = Router();

router.post('/user/create', handlerCreateUser);
router.post('/user/login', handlerUserLogin);

router.use(authMiddleware);

router.get('/user/list_users', handlerListUsers);

export default router;
