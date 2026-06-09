import express from "express";
import authRouter from "./routes/admRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from 'cors';

const app = express();
const port = 3300;

app.use(cors())

app.use(express.json());

app.use('/auth', authRouter);

app.use(errorHandler);

app.get('/', (req, res) => {
    console.log(`teste app listen na porta ${port}`);
     res.send('API ACAJU Rodando!'); 
});

app.listen(port, () => {
    console.log(`http://localhost:3300`);
});