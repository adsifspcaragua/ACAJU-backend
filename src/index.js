import express from "express";

const app = express();
const port = 3000;

app.get('/', (req, res) => {
    console.log(`teste app listen na porta ${port}`);
     res.send('API ACAJU Rodando!'); 
});

app.listen(port, () => {
    console.log(`http://localhost:3000`);
});