const express = require("express");
const { protect } = require("../middlewares/authMiddleware");
const router = express.Router();

const {
          parseInvoiceFromText,
          generateReminderText,
          getDashboardSummary,
}= require("../controllers/aiController")

router.post("/parse-text",protect,parseInvoiceFromText);
router.post("/generate-reminder",protect,generateReminderText);
router.post("/get-summary",protect,getDashboardSummary);    

module.exports=router;