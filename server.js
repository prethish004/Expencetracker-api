const express=require('express')
const mongoose = require('mongoose');
const app=express()
const port =process.evn.PORT || 3001
const Expense=require('./module/expense')
const bodyparaser=require('body-parser')
//app.get is input
mongoose.connect('mongodb+srv://prethish0409:prethish004@cluster0.ledqsqs.mongodb.net/newDb?retryWrites=true&w=majority').then(()=>{console.log("db")})
app.get('/',async(req,res)=>{
    const expenes=await Expense.find();
    res.send(expenes)
});   
app.use(express.json());
app.get('/expences/:id',async(req,res)=>{
    try{
    const id=req.params.id;
    const ex=await Expense.findById(id);
    if(ex){
        res.send(ex);
    }
    else{
        res.send("No Expence with that id");
    }
    }catch(err){
        res.send(err);
    }
});   
app.delete('/expences/:id',async(req,res)=>{
    try{
    const id=req.params.id;
    const ex=await Expense.findByIdAndDelete(id);
    if(ex){
        res.send(ex);
    }
    else{
        res.send("No Expence with that id");
    }
    }catch(err){
        res.send(err);
    }
}); 
app.put('/expences/:id',async(req,res)=>{
    const id=req.params.id;
    const updateObj=req.body;
    const updatedObj=await Expense.findByIdAndUpdate(id,{$set:updateObj},{new:true})
    res.send(updatedObj);

}); 

app.post('/api',async(req,res)=>{
    console.log(req.body);
    const newExpense =req.body;
    await Expense.create(newExpense);
    console.log(newExpense)
    
});   
 
// app.get('/expences',(req,res)=>{
//     res.send('<h1>hello hell 👹👹👹👹</h1>');
// })
// app.post('/expence',(req,res)=>{
//     res.send('<h1>hello hell 👌👌👌👌</h1>');
// })
// app.get('/expenc',(req,res)=>{
//     res.send('<h1>hello hell 🔱🔱🔱🔱</h1>');
// })
app.listen(port,()=>{
    console.log(`hijhvjhvjs ${port}`)
})
