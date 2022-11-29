const {Schema, model} = require("mongoose")

const schema = new Schema({
    data: {
        type: String
    },
    quantityRate: [{type: String}],
    spent: {
        type: Number
    },
    budget: {
        type: Number
    },
    balance: {
        type: Number
    },
    cardId: [{type: String}],
    user: { type: Schema.Types.ObjectId, ref: "User"}
}, {
    timestamps: true
})

module.exports = model("DailyExpense", schema)