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
    const client = [...dadosJson].find(user => user.usuario_id === id);
    if (client) {
        res.json(client);
    } else {
        res.status(404).json({ message: 'Client not found' });
    }
});

app.get('/api/client/:id/transacoes', (req, res) => {
    const { id } = req.params;
    const getTransacoes = JSON.parse(readFileSync(path.join(__dirname, 'data', 'TransacoesData', 'TransacoesData.json'), 'utf-8'));
    const transacao = getTransacoes.find(t => t.id === id);
    if (transacao) {
        res.json(transacao);
    } else {
        res.status(404).json({ message: 'Transaction not found' });
    }
});

app.get('/api/client/:id/investimentos', (req, res) => {
    const { id } = req.params;  
    
    const getInvestimentos = JSON.parse(readFileSync(path.join(__dirname, 'data', 'InvestimentosData', 'InvestimentosData.json'), 'utf-8'));
    const investimento = [getInvestimentos].find(i => i.id === id);
    if (investimento) {
        res.json(investimento);
    } else {
        res.status(404).json({ message: 'Investment not found' });
    }
});

app.get('/api/client/:id/orcamento', (req, res) => {
    const { id } = req.params;      
    const getOrcamento = JSON.parse(readFileSync(path.join(__dirname, 'data', 'OrcamentoData', 'OrcamentoData.json'), 'utf-8'));
    const orcamento = getOrcamento.find(o => o.id === id);
    if (orcamento) {
        res.json(orcamento);
    } else {
        res.status(404).json({ message: 'Budget not found' });
    }
});
app.get('/api/client/:id/metas' , (req, res) => {
    const { id } = req.params;
    const getMetas = JSON.parse(readFileSync(path.join(__dirname, 'data', 'MetasData', 'MetasData.json'), 'utf-8'));
    const meta = getMetas.find(m => m.id === id);
    if (meta) {
        res.json(meta);
    } else {
        res.status(404).json({ message: 'Goal not found' });
    }
});

app.get('/api/client/:id/conta', (req, res) => {
    const { id } = req.params;
    const getConta = JSON.parse(readFileSync(path.join(__dirname, 'data', 'ContaData', 'ContaData.json'), 'utf-8'));
    const conta = getConta.find(c => c.id === id);
    if (conta) {
        res.json(conta);
    } else {
        res.status(404).json({ message: 'Account not found' });
    }
});

app.get('/api/client/:id/cartao', (req, res) => {
    const { id } = req.params;
    const getCartao = JSON.parse(readFileSync(path.join(__dirname, 'data', 'CartaoData', 'CartaoData.json'), 'utf-8'));
    const cartao = getCartao.find(c => c.id === id);
    if (cartao) {
        res.json(cartao);
    } else {
        res.status(404).json({ message: 'Card not found' });
    }
});

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'front', 'index.html'));
});
app.listen(PORT, (req, res) => {
    console.log(`🚀 Servidor rodando em http: ${PORT}`);

});