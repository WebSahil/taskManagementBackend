const cors = require("cors")
const exp = require("express")
const userRouter = require("./controller/user")
const user = exp()
user.use(cors())
user.use(exp.json())
require("./connection")
user.use("/user" , userRouter)


user.get("/" , (req , res)=>{
    res.json({status:"Sahil"})
} )

const port = 2001
user.listen(port , ()=>{
console.log("Server is running at " +  port)
})