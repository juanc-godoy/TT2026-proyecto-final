import { Router } from "express";
import { getAllProducts,getProductById,createProduct,deleteProduct } from "../controllers/products.controller.js";

const router= Router()

//GET - traer todos los productos
router.get("/products",getAllProducts)
//GET - traer producto por ID
router.get("/products/:id", getProductById)
//POST - crear producto
router.post("/products/create",createProduct)
//DELETE - eliminar producto
router.delete("/products/:id", deleteProduct)

export default router