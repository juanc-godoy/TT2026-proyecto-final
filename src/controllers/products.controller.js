import * as productsService from "../services/products.service.js"

const notFound="Recurso no encontrado"


export const getAllProducts= async (req,res)=>{
    res.status(200).json(productsService.getAllProducts())
}

export const getProductById= (req,res)=>{
    const reqId= Number(req.params.id)
    if (reqId ===0){
        return res.status(404).json({message: notFound})
    }
    const findedProduct= productsService.getProductById(reqId)
    if  (!findedProduct){
        return res.status(404).json({message: notFound})
    }
    res.status(200).json({producto: findedProduct})
}

export const createProduct= (req,res)=>{
    const {name, price}= req.body
    if (!name || !price){
        return res.status(400).json({message: "Información faltante"})
    }
    const createdProduct= productsService.createProduct({name,price})
    res.status(201).json({
        message:`Producto: ${createdProduct.name}, precio: ${createdProduct.price} creado exitosamente`
    })
}

export const deleteProduct= (req,res)=>{
    const reqId= Number(req.params.id)
    if (isNaN(reqId)){
        return res.status(400).json({message:"id no existe"})
    }
    const deletedProduct= productsService.deleteProduct(reqId)
    if (!deleteProduct){
        return res.status(404).json({message: notFound})
    }
    res.status(200).json({eliminado: deletedProduct})
}