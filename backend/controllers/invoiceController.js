const Invoice = require("../models/Invoice");

const createInvoice = async (req, res) => {
  try {
    const user = req.user; 
    const {
      invoiceNumber,
      invoiceDate,
      dueDate,
      billFrom,
      billTo,
      items,
      notes,
      paymentTerms, 
    } = req.body;

    let subTotal = 0;
    let taxTotal = 0;
    items.forEach((item) => {
      subTotal += item.unitPrice * item.quantity;
      taxTotal +=
        (item.unitPrice * item.quantity * (item.taxPercent || 0)) / 100;
    });
    const total = subTotal + taxTotal;

    const invoice = new Invoice({
      user,
      invoiceNumber,
      invoiceDate,
      dueDate,
      billFrom,
      billTo,
      items,
      notes,
      paymentTerms,
      subTotal,
      taxTotal,
      total,
    });

    await invoice.save();
    res.status(201).json(invoice);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error in creating invoice", error: error.message });
  }
};

const getInvoice = async (req, res) => {
  try {
    const invoices = await Invoice.find({ user: req.user._id }) // fetch only user's invoices
      .populate("user", "name email");
    res.json(invoices);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error in getting invoices", error: error.message });
  }
};

// GET INVOICE BY ID
const getInvoiceById = async (req, res) => {
  try {
    const invoice = await Invoice.findById(req.params.id).populate(
      "user",
      "name email"
    );
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });
    res.json(invoice);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error in getting invoice", error: error.message });
  }
};

const updateInvoice = async (req, res) => {
  try {
    const {
      invoiceNumber,
      invoiceDate,
      dueDate,
      billFrom,
      billTo,
      items,
      notes,
      paymentTerms, // fixed typo
      status,
    } = req.body;

    const invoice = await Invoice.findById(req.params.id);
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });

    // Calculate totals if items are updated
    let subTotal = invoice.subTotal;
    let taxTotal = invoice.taxTotal;
    if (items && items.length > 0) {
      subTotal = 0;
      taxTotal = 0;
      items.forEach((item) => {
        subTotal += item.unitPrice * item.quantity;
        taxTotal +=
          (item.unitPrice * item.quantity * (item.taxPercent || 0)) / 100;
      });
    }
    const total = subTotal + taxTotal;

    // Update invoice
    const updatedInvoice = await Invoice.findByIdAndUpdate(
      req.params.id,
      {
        invoiceNumber,
        invoiceDate,
        dueDate,
        billFrom,
        billTo,
        items: items || invoice.items,
        notes: notes || invoice.notes,
        paymentTerms: paymentTerms || invoice.paymentTerms,
        status: status || invoice.status,
        subTotal,
        taxTotal,
        total,
      },
      { new: true }
    );

    res.json(updatedInvoice);
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error in updating invoice", error: error.message });
  }
};

// DELETE INVOICE
const deleteInvoice = async (req, res) => {
  try {
    const invoice = await Invoice.findByIdAndDelete(req.params.id);
    if (!invoice) return res.status(404).json({ message: "Invoice not found" });
    res.json({ message: "Invoice deleted successfully" });
  } catch (error) {
    console.error(error);
    res
      .status(500)
      .json({ message: "Error in deleting invoice", error: error.message });
  }
};

module.exports = {
  createInvoice,
  getInvoice,
  getInvoiceById,
  updateInvoice,
  deleteInvoice,
};
