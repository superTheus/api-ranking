import { PrismaClient, Ranking } from '@prisma/client'

export class GetRanking {
    async execute (): Promise<Ranking[]> {
        const prisma = new PrismaClient()
        const ranking = await prisma.ranking.findMany({
            orderBy: {
                score: "desc"
            }
        });

        return ranking;
    }
}