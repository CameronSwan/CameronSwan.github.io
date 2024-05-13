import { Hono } from 'hono'
import { logger } from 'hono/logger'
import { projectsRoute } from './routes/projects'

const app = new Hono()
app.use(logger())

app.get('/test', c => c.json({"message": "test"}))

app.route('/api/projects', projectsRoute)

export default app