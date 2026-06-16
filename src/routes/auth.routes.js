import { Router } from "express";
const router = Router()

router.post("/", (req,res)=>{
    const {user, pass}= req.body
    res.send(`Bienvenido ${user}`)
})

export default router