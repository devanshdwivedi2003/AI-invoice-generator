const { GoogleGenerativeAI } = require("@google/generative-ai");
const Invoice = require("../models/Invoice");
require("dotenv").config();

const ai = new GoogleGenerativeAI(process.env.GOOGLE_API_KEY);

const parseInvoiceFromText = async (req, res) => {
  const { text } = req.body;
  if (!text) {
    return res.status(400).json({ message: "Text is required" });
  }

  try {
    const Prompt = `You are an expert invoice data extraction AI. Extract data from the invoice text below and return only valid JSON in this format:
    {
      "clientName": "string",
      "email":"string (if available)",
      "address": "string (if available)",
      "items": [
        {
          "name": "string",
          "quantity": number,
          "unitPrice": number
        }
      ]
    }
    --TEXT__START--
    ${text}
    --TEXT__END--`;

    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const response = await model.generateContent(Prompt);
    const responseText = response.response.candidates[0].content.parts[0].text;

    const cleanedJSON = responseText
      .replace(/```json/g, "")
      .replace(/```/g, "")
      .trim();

    let parsedData = {};
    try {
      parsedData = JSON.parse(cleanedJSON);
    } catch (e) {
      console.warn("Invalid JSON from AI:", cleanedJSON);
    }

    res.status(200).json(parsedData);
  } catch (error) {
    console.error("Error in parsing invoice with AI", error);
    res.status(500).json({
      message: "Failed to parse invoice data from text",
      error: error.message,
    });
  }
};

const generateReminderText = async (req, res) => {
  const { invoiceId } = req.body;
  if (!invoiceId) {
    return res.status(400).json({ message: "Invoice ID is required" });
  }

  try {
    const invoice = await Invoice.findById(invoiceId);
    if (!invoice) {
      return res.status(404).json({ message: "Invoice not found" });
    }

    const Prompt = `You are an expert invoice reminder AI. Generate a friendly, professional reminder in JSON format.
    {
      "subject": "string",
      "body": "string"
    }
    --DETAILS--
    clientName: ${invoice.billTo.clientName},
    invoiceNumber: ${invoice.invoiceNumber},
    amountDue: ${invoice.total.toFixed(2)},
    dueDate: ${new Date(invoice.dueDate).toLocaleDateString()}
    --END--`;

    const model = ai.getGenerativeModel({ model: "gemini-1.5-flash-latest" });
    const response = await model.generateContent(Prompt);
    const responseText = response.response.candidates[0].content.parts[0].text;

    res.status(200).json({ reminderText: responseText });
  } catch (error) {
    console.error("Error in generating reminder with AI", error);
    res.status(500).json({
      message: "Failed to generate reminder",
      error: error.message,
    });
  }
};

const getDashboardSummary = async (req, res) => {
  try {
    const invoices = await Invoice.find({ user: req.user.id });
    if (!invoices || invoices.length === 0) {
      return res.status(404).json({ message: "No invoices found" });
    }

    const totalInvoice = invoices.length;
    const paidInvoice = invoices.filter((i) => i.status === "paid");
    const unpaidInvoice = invoices.filter((i) => i.status !== "paid");
    const totalRevenue = paidInvoice.reduce((acc, i) => acc + i.total, 0);
    const totalDue = unpaidInvoice.reduce((acc, i) => acc + i.total, 0);

    const dataSummary = {
      totalInvoices: totalInvoice,
      paidInvoices: paidInvoice.length,
      unpaidInvoices: unpaidInvoice.length,
      totalRevenue: totalRevenue.toFixed(2),
      totalDue: totalDue.toFixed(2),
      recentInvoices: unpaidInvoice.slice(0, 5).map((i) => i.invoiceNumber),
    };

    res.status(200).json(dataSummary);
  } catch (error) {
    console.error("Error in getting dashboard summary", error);
    res.status(500).json({
      message: "Failed to fetch dashboard summary",
      error: error.message,
    });
  }
};

module.exports = {
  parseInvoiceFromText,
  generateReminderText,
  getDashboardSummary,
};
