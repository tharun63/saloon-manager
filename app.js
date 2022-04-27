import express from 'express';
import mongoose from 'mongoose';
import morgan from 'morgan';
import cors from 'cors';
//import {} from 'dotenv/config';
import dotenv from "dotenv";
//import routes
import SaloonRoute from './routes/saloon.js';
import BookingRoute from './routes/booking.js';

const app = express();
dotenv.config();


//database connection
//const MONGO_URI= 'mongodb+srv://tharunrao63:Muthu%40777@cluster0.etgb1.mongodb.net/saloonManagement?retryWrites=true&w=majority';

mongoose.connect(process.env.MONGO_URI,{
    useNewUrlParser: true
}).then(() => {
    console.log("DB connected");
}).catch(err=>{
    console.log('Database not connected'+err)
})

const port = process.env.PORT || 5000;

//middlewares
app.use(morgan('dev'));
app.use(cors())
app.use('/saloons',SaloonRoute);
app.use('/bookings',BookingRoute);
//server connection
app.get('/',(req,res)=>{
    res.send("welcome to saloon app")
    
})
app.listen(port, () => {
    console.log(`server is running on port ${port}`);
});
