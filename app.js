const express =require ('express')
const app= express()
const port = 3000

const connection= require ("./db/connection")

app.get ("/",(req,res)=>{
    res.send ("Hello World")
})


//INDEX//  

app.get ("/posts",(req,res)=>{
    const sql= "SELECT * FROM posts"
    connection.query(sql, (err,results)=>{
        if(err) {
            return res.status(500).json({
                success:false,
                message: "Database query failed"
            })
        }
        res.json({
            success:true,
            message:"Post del database",
            result:results
        })
    })
})

//DESTROY//

app.delete("/posts/:id",(req,res)=>{
    const postId= req.params.id
    const sql="DELETE FROM posts WHERE id = ?"

    connection.query(sql,[postId],(err,result)=>{
        if(err){
            console.error(err)
            return res.status(500).json({
                success:false,
                message:"Error while deleting post"
            })
        }
        if(result.affectedRows===0){
            return res.status(404).json({
                success:false,
                message:"Post not found"
            })
        }
        res.status(204).send()
    })
})

app.listen(port,()=>{
    console.log("Server listening on http://localhost:3000/")
})