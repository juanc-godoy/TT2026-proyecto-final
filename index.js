import express from 'express';
import cors from 'cors'
import productRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js'
import dotenv from 'dotenv'
dotenv.config()

const app= express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send("Servidor API funcionando correctamente")
})

app.use("/api/products",productRouter)
app.use("/auth/login", authRouter)

app.use((req,res)=>{
    res.status(404).send("Ruta Inválida")
})
const PORT= process.env.PORT || 3001
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))