const {Schema, model} = require("mongoose")

const schema = new Schema({
    color: {
        type: String
    },
    sourceOfIncome: {
        type: String
    },
    cardId: {
        type: String
    }
}, {
    timestamps: true
})

module.exports = model("IncomeCategory", schema)