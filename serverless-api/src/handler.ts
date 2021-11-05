import {Router} from 'itty-router'

import Posts from './handlers/posts'
import Post from './handlers/post'
import Create from './handlers/create'

const router = Router()

router
  .get('/api/posts', Posts)
  .get('/api/posts/:id', Post)
  .post('/api/create', Create)
  .get('*', () => new Response("Not found", {status: 404}))
export const handleRequest = (request:any) => router.handle(request)
