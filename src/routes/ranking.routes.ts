import { Router } from "express";
import { CreateRankingController } from "../modules/CreateRankingController";
import { GetRankingController } from "../modules/GetRankingController";

const createRankingRoute = new CreateRankingController();
const GetRankingRoute = new GetRankingController();

const rankingRoute = Router();

rankingRoute.post("/", createRankingRoute.handle);
rankingRoute.get("/", GetRankingRoute.handle);

export {rankingRoute}