import db from "../models/index.js";

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

export default connectDB;