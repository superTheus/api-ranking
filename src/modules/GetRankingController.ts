import { Request, Response } from "express";
import { CreateRanking } from "./createRanking";

export class GetRankingController {
    async handle(req: Request, res: Response) {
        const CreateRankingCase = new CreateRanking();
        const result = await CreateRankingCase.find();
        return res.status(201).json(result);
    }
}