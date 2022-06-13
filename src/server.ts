import express, { Request, Response } from 'express';
import cors from 'cors';

import {routes} from './routes';

const app = express();

app.listen(3333);

app.use((req: Request, res: Response, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    app.use(cors());
    next();
});

app.use(express.json())

app.use(routes)