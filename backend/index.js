const express = require('express');
const { createTodo, updateTodo } = require('./types');
const app = express();
const PORT = 3000;

app.use(express.json());

app.use('/',(req,res) => {
    res.send("hello world");
})

// add todo
app.post('/todo',(req,res) => {
    const createPayload = req.body;
    const parsePayload = createTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg:"You send the wrong input",
        })
        return;
    }
    // put it to mongodb
})

// fetch todo 
app.get('/todos',(req,res) => {

})

// update todo
app.put('/completed',(req,res) => {
    const createPayload = req.body;
    const parsePayload = updateTodo.safeParse(createPayload);

    if(!parsePayload.success){
        res.status(411).json({
            msg:"You sent the wrong input"
        })
        return;
    }
})

app.listen(PORT,()=>{
    console.log(`App Listent at ${PORT}`)
})