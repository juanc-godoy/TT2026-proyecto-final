import express from 'express';
import cors from 'cors'
import productRouter from './src/routes/products.routes.js';
import authRouter from './src/routes/auth.routes.js'

const app= express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.status(200).send("Servidor API funcionando correctamente")
})

app.use("/api",productRouter)
app.use("/auth/login", authRouter)

app.use((req,res)=>{
    res.status(404).send("Ruta Inválida")
})
const PORT=3000
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))