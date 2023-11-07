import { fastify } from 'fastify'
import {DatabaseMemory} from './database-memory.js'


const server = fastify()

const databse = new DatabaseMemory()
//reply é como chama o response no lib fastify
server.post('/videos', (request, reply) => {
    const {title, description, duration} = request.body

    databse.create({
        title,
        description,
        duration
    })

    return reply.status(201).send()
})

server.get('/videos', () => {
    const video = databse.list()

    return video
})

server.put('/videos/:id', (request, reply) => {
    const videoId = request.params.id
    
    const {title, description, duration} = request.body

    databse.update(videoId,{
        title,
        description,
        duration
    })

    return reply.status(204).send()
})

server.delete('/videos/:id', () => {
    const videoId = request.params.id

    databse.delete(videoId)

    return reply.status(204).send()

})

server.listen({
    port:3333,
})
