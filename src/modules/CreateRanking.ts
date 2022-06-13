import { Player } from "../types";
import { PrismaClient, Ranking } from '@prisma/client'

export class CreateRanking {
    async execute(Player: Player): Promise<Ranking> {
        const prisma = new PrismaClient()
        const newPlayer = await prisma.ranking.create({
            data: {
                playerName: Player.playerName,
                score: Player.score
            }
        });
        
        return newPlayer;
    }

    async find (): Promise<Ranking[]> {
        const prisma = new PrismaClient()
        const ranking = await prisma.ranking.findMany();

        return ranking;
    }
}