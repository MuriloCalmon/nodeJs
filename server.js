// import { createServer } from 'node:http'

// const server = createServer((request, response) => {
//     response.write('Hello World')

//     response.end()
// })

// server.listen(3333)

import { fastify } from 'fastify'


const server = fastify()

server.post('/videos', () => {
    return 'Hello world'
})

server.get('/videos', () => {
    return 'Hello music'
})

server.put('/videos/:id', () => {
    return 'Hello fast'
})

server.delete('/videos/:id', () => {
    return 'Hello fast'
})

server.listen({
    port:3333,
})
