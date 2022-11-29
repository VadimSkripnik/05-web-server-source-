const {Schema, model} = require("mongoose")

const schema = new Schema({
    data: {
        type: String
    },
    category: {
        type: String
    },
    sourceOfIncome: {
        type: String
    },
    color: {
        type: String
    },
    nameCardReceipt: {
        type: String
    },
    profit: {
        type: Number
    },
    cardId: {
        type: String
    },
    user: { type: Schema.Types.ObjectId, ref: "User"},
}, {
    timestamps: true
})

module.exports = model("Receipt", schema)