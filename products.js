import { connectToDatabase,client } from "../database/db.js"
import {Collection, MongoClient} from 'mongodb'

import axios from "axios"

export const getProducts=async(req,res)=>
{
    await connectToDatabase();
    try {
       
        await connectToDatabase();

        const database = client.db('products');
        const coll = database.collection('product_info');


         const updateResult = await coll.updateOne({ price: 13 }, { $set: { title: "rosemary oil" } }, { upsert: true });
          console.log(updateResult);


             const deleteResult = await coll.deleteOne({ title: "Oil Free Moisturizer 100ml" });
             console.log(deleteResult);


   
       
    } catch (error) {
        console.log(error);
        res.send(error)
    }
}
 export const createProduct=async(req,res)=>
 {
    try{
        const response = await axios.get('https://dummyjson.com/products?limit=10&skip=10&select=title,price');
        const productsData = response.data;
      
        await connectToDatabase();
       
        const database=client.db('products')
        const coll = database.collection('product_info')
      

      const products = productsData.products;
      for (const product of products) {
        await coll.insertOne(product);
    }
   
    const allProducts = await coll.find({title: "Tree Oil 30ml"}).toArray();

    const specificProduct = await coll.findOne({ title: "Brown Perfume" });

    res.json({ message: "Products created successfully", allProducts, specificProduct });
    
    
}
    catch(error)
    {
     console.log(error)
      res.send(error)
    }
  
    
 }