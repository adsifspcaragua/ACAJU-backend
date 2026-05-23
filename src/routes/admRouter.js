import express from 'express';

const router = express.Router();

router.post('/cadastro');
router.post('/login');
router.delete('/sair');

export default router;