const express=require('express')
const app=express()
const port=8000

app.use(express.json())
//blog post route
let blogs=[]
app.post("/blog",(req,res)=>{
    //const {title,content}=req.body

    blogs.push({...req.body,id:blogs.length+1});
    return res.status(200).json({blogs,message:"blog write successfully"})
})
app.get("/blog",(req,res)=>{
    let data=blogs.filter(blog=>blog.draft!=true)
    return res.status(200).json({data})
})

// get all blogs
app.get("/blog/:id",(req,res)=>{
    const {id}=req.params
    let findSingleBlog=blogs.filter(blog=>blog.id==id)
    return res.status(200).json({findSingleBlog})
})
// update route 
app.patch("/blog/:id",(req,res)=>{
    const {id}=req.params;
    let index=blogs.findIndex(blog=>blog.id==id)
    blogs[index]={...blogs[index],...req.body}
    return res.json({message:"update succesfully"})
})
// delete route
app.delete("/blog/:id",(req,res)=>{
    const{id}=req.params
    let index=blogs.findIndex(blog=>blog.id==id)
    delete blogs[index]
    return res.json({message:"delete succesfully"})
})
app.listen(port,()=>{
    console.log("server is stated");
    
})