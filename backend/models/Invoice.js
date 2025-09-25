const mongoose = require("mongoose");
const itemSchema = new mongoose.Schema({
          name:{type:String,required:true},
          quatity:{type:Number,required:true},
          unitPrice:{type:Number,required:true},
          taxPercent:{type:Number,required:true},
          total:{type:Number,required:true}
})

const invoiceSchema = new mongoose.Schema({
          user:{
                    type:mongoose.Schema.Types.ObjectId,
                    ref:"User",
                    required:true
          },
          invoiceNumber:{type:Number,required:true},
          nvoiceDate:{type:Date,required:true},
          dueDate:{type:Date,required:true},
          billFrom:{businessName:String,email:String,address:String,phone:String},
          billTo:{clientName:String,email:String,address:String,phone:String},
          items:[itemSchema],
          notes:{type:String},
          paymentTerms:{type:String,default:"Net 15"},
          status:{type:String,enum:["paid","unpaid"],default:"unpaid"},
          subTotal:Number,
          taxTotal:Number,
          total:Number,
},{timestamps:true})
    

module.exports=mongoose.model("Invoice",invoiceSchema);