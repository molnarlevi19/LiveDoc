import Fastify from 'fastify'
import { prisma } from './db.js'

const app = Fastify({ logger: true })

app.get('/health', async () => {
  await prisma.$queryRaw`SELECT 1`
  return { status: 'ok' }
})

app.addHook('onClose', async () => {
  await prisma.$disconnect()
})

await app.listen({ 
    host: '0.0.0.0', 
    port: Number(process.env.SERVER_PORT ?? 3000) 
})
