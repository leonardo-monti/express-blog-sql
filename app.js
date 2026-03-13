const express =require ('express')
const app= express()
const port = 3000

const connection= require ("./db/connection")

app.get ("/",(req,res)=>{
    res.send ("Hello World")
})

app.listen(port,()=>{
    console.log("Server listening on http://localhost:3000/")
})