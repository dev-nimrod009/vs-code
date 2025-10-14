import cors from 'cors'
import mongoose from 'mongoose'
import bcrypt from 'bcrypt'
import express from 'express'

const app = express()
app.use(cors({
    origin: 'http://localhost:5173',
    methods: ["PUT", "DELETE", "GET", "POST"],
    allowedHeaders: ["Content-Type"],
    credentials: true
}))
app.use(express.json())

mongoose.connect("mongodb://localhost:27017/flight-app")
const userSchema = new mongoose.Schema({
    age: { type: String, },
    gender: { type: String, },
    email: { type: String, required: true, unique: true },
    phoneNumber: { type: Number, required: true, unique: true },
    password: { type: String, required: true, },
    fullName: { type: String }

})
const User = mongoose.model('User', userSchema)


app.post('/api/user-signin', async (req, res) => {
    try {

        const { password, email } = req.body
        const employee = await User.findOne({ email })
        if (!employee) {
            return res.status(401).json({ message: 'Error.Invalid Credentials!!' })
        }
        const acceptThem = await bcrypt.compare(password, employee.password)
        if (!acceptThem) {
            return res.status(401).json({ message: 'Error.Invalid Details' })
        }
        return res.status(200).json({ message: 'You have successfuly logged in' })
    } catch (err) {
        console.log(err)
        return res.status(500).json({ message: 'Error.Server experienced some difficulty' })
    }
})
app.post('/api/user-registration',
    async (req, res) => {
        try {
            const { fullName, email, phoneNumber, password, age, gender } = req.body

            const existingUser = await User.findOne({ email })

            if (existingUser) {
                return res.status(400).json({ message: 'Error.The email used has registered someones account' })
            }

            const hashedPassword = await bcrypt.hash(password, 10)
            const newUser = new User({
                fullName, password: hashedPassword, age, gender, email, phoneNumber
            })
            await newUser.save()

            console.log('success')
            return res.status(200).json({ message: 'Account created successfully' })

        } catch (err) {
            console.log(err)
            return res.status(500).json({ message: 'Error.Server experienced a difficulty.' })
        }

    })

app.listen(3001, () => {
    console.log("the server is listening on port:3001")
})