import Router from '@koa/router';
import { getUsers } from '../API/users.api.js';

export const router = new Router({
  prefix: '/users',
});

router.get('/', async (ctx) => {
  ctx.body = await getUsers();
});
