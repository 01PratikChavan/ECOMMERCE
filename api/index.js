
import express from 'express'
import dotenv from 'dotenv'
import morgan from 'morgan';
import connectDB from './config/database.js';
import authRoutes from '../api/routes/auth.route.js';
//config env
dotenv.config();


const app = express();
console.log(process.env.PORT);
const PORT = process.env.PORT  ;


//connect database
connectDB();

//middleware
app.use(morgan('dev'))
app.use(express.json())

//routes

app.use('/api/auth',authRoutes);

//rest api
app.get('/',(req,res)=>{
    res.send({message:'Welcome to ecommerce'})
})

//port  
app.listen(PORT,()=>{
    console.log('Server running on' ,PORT)
})     