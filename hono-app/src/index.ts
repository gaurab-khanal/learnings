import { Hono } from 'hono'

const app = new Hono()

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
