import { Hono } from 'hono'
import { zValidator } from '@hono/zod-validator'
import { z } from 'zod'


type Project = {
    id: number,
    name: string
}

const fakeProjects: Project[] = [
    {id: 1, name: 'Project 1'},
    {id: 2, name: 'Project 2'},
    {id: 3, name: 'Project 3'}
]

const projectSchema = z.object({
    id: z.number().int().positive().min(1),
    name: z.string()
})
const createProjectSchema = projectSchema.omit({id: true})

type Expense = z.infer<typeof projectSchema>

export const projectsRoute = new Hono()
.get('/', async(c) => {
    return c.json({projects: fakeProjects})
})
.get('/:id{[0-9]+}', async(c) => {
    const id = Number.parseInt(c.req.param('id'))
    const project = fakeProjects.find(project => project.id === id)
    if (!project) return c.notFound()
    return c.json({project})
})
.post('/', zValidator('json', createProjectSchema), async(c) => {
    const project = await c.req.valid('json')
    fakeProjects.push({...project, id: fakeProjects.length + 1})
    c.status(201)
    return c.json(project)
})
.delete('/:id{[0-9]+}', async(c) => {
    const id = Number.parseInt(c.req.param('id'))
    const index = fakeProjects.findIndex(project => project.id === id)
    if (index === -1) return c.notFound()
    const deletedExpense = fakeProjects.splice(index, 1)[0]
    return c.json({deletedExpense})
})
// .put()