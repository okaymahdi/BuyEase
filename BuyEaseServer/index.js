const express = require('express')
const cors = require('cors')
require('dotenv').config()
const app = express()

const port = process.env.PORT || 4000

// Middleware
app.use(cors())
app.use(express.json())

// MongoDB

const { MongoClient, ServerApiVersion } = require('mongodb')
const uri = `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@cluster0.b1zc0hy.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`

const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
})

const dbConnect = async () => {
  try {
    await client.connect()
    await client.db('admin').command({ ping: 1 })
    console.log('BuyEaseServer successfully connected to MongoDB!')
  } finally {
    await client.close()
  }
}

dbConnect().catch(console.dir)

// API
app.get('/', (req, res) => {
  res.send('BuyEaseServer is Running')
})

app.listen(port, () => {
  console.log(`BuyEaseServer is running on port: ${port}`)
})
