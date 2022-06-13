import { Router } from "express";
import { rankingRoute } from "./ranking.routes";

const routes = Router();

routes.get("/", (req, res) => {
    const html = `
        <html>
            <body>
                <h2>Bem Vindo a API de Ranking</h2>
                <a href="https://gitlab.com/j.matheussouza2019/ranking-api" > Documentação </a>
            </body>
        </html>
    `;
    res.send(html);
  });
routes.use("/ranking", rankingRoute);

export {routes}