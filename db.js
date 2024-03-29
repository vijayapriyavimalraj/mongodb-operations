import {MongoClient} from 'mongodb'
const url="mongodb+srv://vijayapriyavimalraj:vijayapriya@cluster0.vavpklw.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
export const client=new MongoClient(url);
export const connectToDatabase = async()=>{
    try{
      await client.connect();
      console.log("DB CONNECTION SUCCEEDED")
    }
    catch(error)
    {
    console.log(error)
    }
}
