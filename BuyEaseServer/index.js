const express = require('express')
const cors = require('cors')
const jwt = require('jsonwebtoken')
require('dotenv').config()
const app = express()

const port = process.env.PORT || 4000

// Middleware
app.use(cors({ origin: 'http://localhost:5173', optionsSuccessStatus: 200 }))
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

// Database Collections
const usersCollection = client.db('BuyEase').collection('users')
const productsCollection = client.db('BuyEase').collection('products')

const dbConnect = async () => {
  try {
    await client.connect()
    console.log('BuyEaseServer successfully connected to MongoDB!')

    // Get User
    app.get('/user/:email', async (req, res) => {
      const query = { email: req.params.email }
      const user = await usersCollection.findOne(query)

      res.send(user)
      console.log(`user: ${user}`)
    })

    // Insert Users Collection
    app.post('/users', async (req, res) => {
      const user = req.body
      const query = { email: user.email }
      const existingUser = await usersCollection.findOne(query)
      if (existingUser) {
        return res.send({ message: 'User already exists' })
      } else {
        const result = await usersCollection.insertOne(user)
        res.send(result)
      }
    })
  } catch (error) {
    console.log(error.name, error.message)
  }
}

dbConnect().catch(console.dir)

// API
app.get('/', (req, res) => {
  res.send('BuyEaseServer is Running')
})

// JWT

app.post('/authentication', async (req, res) => {
  const userEmail = req.body
  const token = jwt.sign(userEmail, process.env.ACCESS_TOKEN_SECRET, {
    expiresIn: '10d',
  })
  res.send({ token })
})

app.listen(port, () => {
  console.log(`BuyEaseServer is running on port: ${port}`)
})
