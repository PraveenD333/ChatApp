import dotenv from 'dotenv'
dotenv.config({ quiet: true })
import express from 'express'
import cors from 'cors'
import userRoute from './Routes/user.routes.js';
import messagerouter from './Routes/message.routes.js';


const app = express();


app.use(express.json());

app.use(cors({
  origin: 'https://praveen-chatapp.vercel.app',
  methods:['GET','POST','PUT','DELETE','OPTIONS'],
  allowedHeaders:['Content-Type','Authorization'],
  credentials:true
  }));


app.use("/api/auth",userRoute);
app.use("/api/messages",messagerouter);



export default app
