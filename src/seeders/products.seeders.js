import db from "../config/firebase.js"
import { collection, addDoc } from "firebase/firestore"

const productsCollection= collection(db, 'products')

const productsSeeders=[
  {
    "price": 12500,
    "name": "Mouse",
    "stock": 1000,
    "origin": "China"
  },
  {
    "price": 300000,
    "name": "Proyector",
    "stock": 10,
    "origin": "Brasil"
  },
  {
    "name": "Monitor LED",
    "origin": "Argentina",
    "stock": 10,
    "price": 400000
  },
  {
    "price": 5000,
    "name": "Pendrive",
    "stock": 100,
    "origin": "China"
  },
  {
    "name": "PC All In One",
    "stock": 10,
    "origin": "Argentina",
    "price": 1750000
  },
  {
    "name": "Mousepad",
    "stock": 200,
    "origin": "China",
    "price": 5000
  },
  {
    "name": "Notebook",
    "origin": "USA",
    "stock": 10,
    "price": 1500000
  },
  {
    "name": "PC Escritorio",
    "origin": "Chile",
    "stock": 10,
    "price": 1600000
  },
  {
    "name": "Teclado",
    "origin": "Malasia",
    "stock": 100,
    "price": 20000
  },
  {
    "name": "Monitor Curvo 32 pulgadas",
    "origin": "Argentina",
    "stock": 10,
    "price": 400000
  }
]

const addProductsToDb= ()=>{
    productsSeeders.forEach( async(product)=>{
        await addDoc(productsCollection,product)
        console.log("agregado",product)
    })
}
addProductsToDb()