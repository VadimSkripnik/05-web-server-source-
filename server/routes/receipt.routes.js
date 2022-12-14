const express = require("express");
const Receipt = require("../models/Receipt")
const router = express.Router({ mergeParams: true});

router.get("/", async (req, res) => {
     try {
       const list = await Receipt.find()
       res.status(200).send(list)
     } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
     }
})

module.exports = router;