import express from 'express';
import cors from 'cors'

const app= express()

app.use(express.json())
app.use(cors())

app.get("/",(req,res)=>{
    res.send("Servidor API funcionando correctamente")
})
app.use((req,res)=>{
    res.status(404).send("Ruta Inválida")
})
const PORT=3000
app.listen(PORT, ()=> console.log(`http://localhost:${PORT}`))