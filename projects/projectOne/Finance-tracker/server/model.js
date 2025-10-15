import mongoose from 'mongoose'

const transactionSchema = new mongoose.Schema({
    date: String,
    description: String,
    category: String,
    amount: Number,
    type: String
})

export default mongoose.model('Transaction', transactionSchema)