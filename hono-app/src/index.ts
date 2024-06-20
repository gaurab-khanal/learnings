import { Hono } from 'hono'

const app = new Hono()

async function authMiddleware(c: any, next: any) {
  if (c.req.header("Authorization")) {
    // do validation
    await next();
  } else {
    return c.text('Unauthorized', 401);
  }
}

app.use(authMiddleware);

app.get('/:age/', async (c) => {
  // body, headers, query parameters, middlewares, connecting to a database
  const body = await c.req.json();
  console.log(body);
  console.log(c.req.header("Authorization"));
  console.log(c.req.query("name"));
  console.log(c.req.param("age"));
  return c.text('Hello Hono!')
})

export default app
