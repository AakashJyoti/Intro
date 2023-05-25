const mongoose = require("mongoose");

const connectDb = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`MongoDb connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`Db connection error ${error.message}`);
    process.exit();
  }
};

module.exports = connectDb;
