import express from 'express'
import mongoose from 'mongoose'
import router from './router.js'


const PORT = process.env.PORT ?? 4000
const DB_URL = 'mongodb+srv://user:user@cluster0.gfvdh.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())
app.use('/api/v1', router)

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
    } catch (e) {
        console.log(e)
    }
}

startApp()





