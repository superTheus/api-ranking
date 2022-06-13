import { Request, Response } from "express";
import { Player } from "../types";
import { CreateRanking } from "./CreateRanking";

export class CreateRankingController {
    async handle(req: Request, res: Response) {
        const Player: Player = req.body;
        const CreateRankingCase = new CreateRanking();
        const result = await CreateRankingCase.execute(Player);
        return res.status(201).json(result);
    }
}