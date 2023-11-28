import Koa from 'koa';
import { connectToDatabase } from './database/index.js';
import process from 'node:process';

import bodyParser from 'koa-bodyparser';
import { router } from './routes/users.routes.js';

const app = new Koa();
app.use(bodyParser());

app.use(router.routes());
app.use(async (ctx) => {
  ctx.body = 'Hello World';
});

app.listen(process.env.PORT, () => {
  console.log(`app runs on http://localhost:${process.env.PORT}`);
});
