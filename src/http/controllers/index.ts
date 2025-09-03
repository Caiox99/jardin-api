import express, { Request, Response } from "express";
import cors from "cors";
const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("🚀 API de Rotas - Trabalho da Faculdade");
});

app.post("/rota", (req: Request, res: Response) => {
  const { origem, destino } = req.body;

  if (!origem || !destino) {
    return res.status(400).json({ erro: "Origem e destino são obrigatórios!" });
  }

  const rotaExemplo = {
    origem,
    destino,
    distancia: "12 km",
    tempoEstimado: "25 minutos",
    caminho: ["Ponto A", "Ponto B", "Ponto C", "Destino"],
  };

  res.json(rotaEx
