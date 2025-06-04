require('dotenv').config();
// const mysql = require('mysql2');

// const DB_Connect = mysql.createConnection({
//   host: process.env.DB_HOST,
//   user: process.env.DB_USER,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_NAME
// });

// DB_Connect.connect(err => {
//   if (err) throw err;
//   console.log('Connected to MySQL!');
// });

// module.exports = DB_Connect;


const db = require('./src/models');

const connectDB = async () => {
  try {
    await db.sequelize.authenticate();
    console.log('✅ Database connected successfully.');
    await db.sequelize.sync(); // Optional: Sync models to DB
  } catch (err) {
    console.error('❌ Unable to connect to the database:', err);
    process.exit(1);
  }
};

module.exports = connectDB;
