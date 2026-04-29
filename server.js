import express from 'express';
import cors from 'cors';
import path from 'path';
import dotenv from 'dotenv';


import { readFileSync } from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();
const app = express();
const PORT = process.env.PORT || 1500;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));     

// Routes API

// Static files

// ROTAS API

app.get('/api/client/:id', (req, res) => {
    const { id } = req.params;
    const dadosJson  = JSON.parse(readFileSync(path.join(__dirname, 'data', 'UserSensitveData', 'UserSensitiveData.json'), 'utf-8'));
    const client = dadosJson.find(user => user.usuario_id === id);
    if (client) {
        res.json(client);
    } else {
        res.status(404).json({ message: 'Client not found' });
    }
});

app.get('/api/transacoes', (req, res) => {
    const getTransacoes = JSON.parse(readFileSync(path.join(__dirname, 'data', 'TransacoesData', 'TransacoesData.json'), 'utf-8'));
    res.json(getTransacoes);
});

app.get('/api/investimentos', (req, res) => {
    const getInvestimentos = JSON.parse(readFileSync(path.join(__dirname, 'data', 'InvestimentosData', 'InvestimentosData.json'), 'utf-8'));
    res.json(getInvestimentos);
});

app.get("api/orcamento", (req, res) => {
    const getOrcamento = JSON.parse(readFileSync(path.join(__dirname, 'data', 'OrcamentoData', 'OrcamentoData.json'), 'utf-8'));
    res.json(getOrcamento);
});
app.get("/api/metas", (req, res) => {
    const getMetas = JSON.parse(readFileSync(path.join(__dirname, 'data', 'MetasData', 'MetasData.json'), 'utf-8'));
    res.json(getMetas);
});

app.get("/api/conta", (req, res) => {
    const getConta = JSON.parse(readFileSync(path.join(__dirname, 'data', 'ContaData', 'ContaData.json'), 'utf-8'));
    res.json(getConta);
});

app.get("/api/cartao", (req, res) => {
    const getCartao = JSON.parse(readFileSync(path.join(__dirname, 'data', 'CartaoData', 'CartaoData.json'), 'utf-8'));
    res.json(getCartao);
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
});
app.listen(PORT, (req, res) => {
    console.log(`🚀 Servidor rodando em http: ${PORT}`);

});