import express from 'express';
import { newsController } from '../controllers/news/newsController.js'

const router = express.Router();

router.post('/', newsController.newNews);

export default router;