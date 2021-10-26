import { connect } from 'https://deno.land/x/redis/mod.ts'

const redis = await connect({hostname: '127.0.0.1', port: 7000})
await redis.clusterMeet('127.0.0.1', 7000)
await redis.clusterNodes()
