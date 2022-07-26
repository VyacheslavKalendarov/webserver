import express from 'express'
import mongoose from 'mongoose'



const PORT = process.env.PORT ?? 4000
const DB_URL = 'mongodb+srv://user:user@cluster0.gfvdh.mongodb.net/?retryWrites=true&w=majority'

const app = express()

app.use(express.json())

app.post('/', (req, res) => {
    console.log(req.body)
    res.status(200).json('Сервер работает')
})

async function startApp() {
    try {
        await mongoose.connect(DB_URL)
        app.listen(PORT, () => console.log(`Server has been started on port ${PORT}...`))
    } catch (e) {
        console.log(e)
    }
}

startApp()





