const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbconn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.fjp7kex.mongodb.net/test`
    );

    console.log("Conectou ao banco de dados!");

    return dbconn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;

// connection
