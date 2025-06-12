const express = require('express');
const routes = require('./src/routes');
const cors =require('cors')
// Initialize Database Connection
const connectDB = require('./db');

// Initialize Express App
const app = express();
app.use(express.json());
app.use(cors({
  origin:true,
  credentials:true,
  exposedHeaders:["set-cookie"]
}))
const PORT = process.env.PORT || 3000;


app.use("/api/v0.1", routes);


connectDB().then(() => {
  app.listen(PORT, () => {
    console.log(`🚀 Server is running on port ${PORT}`);
  });
});
