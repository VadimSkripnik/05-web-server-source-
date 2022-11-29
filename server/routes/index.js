const express = require("express");
const router = express.Router({ mergeParams: true});

router.use("/auth", require("./auth.routes"))
router.use("/card", require("./card.routes"))
router.use("/dailyExpense", require("./dailyExpense.routes"))
router.use("/incomeCategory", require("./incomeCategory.routes"))
router.use("/rate", require("./rate.routes"))
router.use("/rateCategory", require("./rateCategory.routes"))
router.use("/receipt", require("./receipt.routes"))
router.use("/user", require("./auth.routes"))

module.exports = router;