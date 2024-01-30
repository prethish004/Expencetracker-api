const mongoose = require('mongoose');
const expenesSchema =new mongoose.Schema({
    amount:Number,
    des:String,
    title:String,
});
const Expense =mongoose.model('Expence',expenesSchema);
module.exports=Expense;