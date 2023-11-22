import express from "express";
import cors from 'cors';
import connectDb from './DB/ConnectDB.js'
import DataAssets from './Routes/DataAssets.js'

connectDb()

const app = express();
app.use(cors());


app.use('/api', DataAssets)

app.use('/', (req,res)=>{
    console.log('hi I am connected to server');
    res.send('finally i am connected to the browser d3.js')
   
})



const PORT= process.env.PORT||3000;


app.listen(PORT, (error)=>{
    if(error){
        console.log(`Getting Error:${error}`);
    }
    console.log("i am live");
})