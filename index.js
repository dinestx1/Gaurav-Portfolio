import express, { json } from 'express';
import routes from './src/routes.js';
import cors from 'cors';
import connectDB from './db.js'

// Initialize Database Connection

// Initialize Express App
const app = express();
app.use(json());
app.use(cors({
  origin:true,
  credentials:true,
  exposedHeaders:["set-cookie"]
}))
const PORT = process.env.PORT || 3000;


app.use("/api/v0.1", routes);
app.get("/",(req,res)=>{
  res.send({status:"started"});

})

connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});
