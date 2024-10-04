const express=require('express')
const app=express()
const port=8000

app.use(express.json())
//blog post route
let blogs=[]
app.post("/blog",(req,res)=>{
    //const {title,content}=req.body

    blogs.push({...req.body});
    return res.status(200).json({blogs,message:"blog write successfully"})
})

app.listen(port,()=>{
    console.log("server is stated");
    
})