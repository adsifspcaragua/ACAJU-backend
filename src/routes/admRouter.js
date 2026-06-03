import express from 'express';
import { sessionController } from '../controllers/session/sessionController.js';

const router = express.Router();

router.post('/cadastro', sessionController.cadastro);
router.post('/login', sessionController.login);
// router.delete('/sair');

export default router;