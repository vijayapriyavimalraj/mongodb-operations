routers/products.js FILE



import express from 'express'
import { createProduct, getProducts } from '../handlers/products.js';
const productsRouter=express.Router();
productsRouter.get('/',getProducts)
productsRouter.post('/',createProduct)
export default productsRouter;
