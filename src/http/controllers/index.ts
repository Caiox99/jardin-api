// index.ts
import express, { Application, Request, Response } from "express";
import cors from "cors";

// Criação do app Express
const app: Application = express();
const PORT: number = Number(process.env.PORT) || 3000;

// Middlewares
app.use(cors());
app.use(express.json());

// Rota inicial (teste)
app.get("/", (req: Request, res: Response): void => {
  res.send("🚀 API de Rotas - Jardin");
});

// Exemplo de rota para calcular rota entre dois pontos
app.post("/rota", (req: Request, res: Response): void => {
  const { origem, destino } = req.body as { origem: string; destino: string };

  if (!origem || !destino) {
    res.status(400).json({ erro: "Origem e destino são obrigatórios!" });
    return;
  }

  // Simulação de rota (mock)
  const rotaExemplo = {
    origem,
    destino,
    distancia: "12 km",
    tempoEstimado: "25 minutos",
    caminho: ["Ponto A", "Ponto B", "Ponto C", "Destino"],
  };

  res.json(rotaExemplo);
});

// Inicializa servidor
app.listen(PORT, (): void => {
  console.log(`🚀 Servidor rodando em http://localhost:${PORT}`);
});
