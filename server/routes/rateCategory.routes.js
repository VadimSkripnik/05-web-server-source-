const express = require("express");
const RateCategory = require("../models/RateCategory")
const router = express.Router({ mergeParams: true});

router.get("/", async (req, res) => {
     try {
       const list = await RateCategory.find()
       res.status(200).send(list)
     } catch (e) {
        res.status(500).json({
            message: "На сервере произошла ошибка. Попробуйте позже"
        })
     }
})

module.exports = router;