import express from "express";
import authRouter from "./routes/admRouter.js";
import newsRouter from "./routes/newsRouter.js";
import { errorHandler } from "./middlewares/errorHandler.js";
import cors from 'cors';

import multer from 'multer';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = 3300;

app.use(cors())

app.use(express.json());

app.use('/auth', authRouter);
app.use('/news', newsRouter);

app.use(errorHandler);

app.get('/', (req, res) => {
    console.log(`teste app listen na porta ${port}`);
    res.send('API ACAJU Rodando!');
});

// multer, parte de upload de arquivos sem tempo para separar no  middleware e rotas bunitinho


const uploadDir = path.join(__dirname, 'uploads');
if (!fs.existsSync(uploadDir)) {
    fs.mkdirSync(uploadDir);
}

app.use('/uploads', express.static(uploadDir));

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, uploadDir); 
    },
    filename: function (req, file, cb) {
        // Gera um nome único para as fotos não se substituírem
        const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9);
        cb(null, uniqueSuffix + path.extname(file.originalname));
    }
});

const upload = multer({ storage: storage });

app.post('/upload', upload.single('cover'), (req, res) => {
    if (!req.file) {
        return res.status(400).json({ error: "Nenhum arquivo enviado no campo 'cover'." });
    }
    
    const imageUrl = `http://localhost:3300/uploads/${req.file.filename}`;
    return res.status(201).json({ url: imageUrl });
});

app.post('/upload-multiple', upload.array('gallery', 10), (req, res) => {
    if (!req.files || req.files.length === 0) {
        return res.status(400).json({ error: "Nenhum arquivo enviado no campo 'gallery'." });
    }

    const imageUrls = req.files.map(file => {
        return `http://localhost:3300/uploads/${file.filename}`;
    });

    return res.status(201).json({ urls: imageUrls });
});

// fim do multer

app.listen(port, () => {
    console.log(`http://localhost:3300`);
});