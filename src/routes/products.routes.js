import { Router } from "express";

const router= Router()


//GET - traer todos los productos
router.get("/products", (req,res)=>{
    res.send("Todos los productos")
})

//GET - traer producto por ID
router.get("/products/:id", (req,res)=>{
    const reqId= Number(req.params.id)
    res.send(`Producto ID: ${reqId}`)
})

router.post("/products/create", (req,res)=>{
    const {name, price}= req.body
    res.json({
        message:`Producto: ${name}, precio: ${price} creado exitosamente`
    })
})

router.delete("/products/:id", (req,res)=>{
    const reqId= Number(req.params.id)
    res.send(`Producto ID: ${reqId} eliminado`)
})

export default router