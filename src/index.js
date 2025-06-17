import express, { json } from 'express';
import routes from './routes.js';
import cors from 'cors';
import connectDB from "./config/db.js"
import dotenv from "dotenv";
// Initialize Database Connection
dotenv.config();

// Initialize Express App
const app = express();
app.use(json());
app.use(cors({
  origin: 'https://gourav.thegrowthvibes.com',
  credentials:true,
  exposedHeaders:["set-cookie"]
}))
const PORT = process.env.PORT || 5000;


app.use("/api/v0.1/", routes);
app.get("/",(req,res)=>{
  res.send({status:"started"});

})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});
