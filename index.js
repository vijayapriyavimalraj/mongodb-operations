import express from 'express'
import cors from 'cors'
import productsRouter from './routes/products.js'

const app=express()
app.use(cors())
app.use('/products',productsRouter)

app.get('/',(req,res)=>
res.send("viji"))
app.listen(3000,()=>
{
    console.log("SERVER STARTED")
}
)