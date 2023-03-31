const mongoose = require("mongoose");
const dbUser = process.env.DB_USER;
const dbPassword = process.env.DB_PASS;

const conn = async () => {
  try {
    const dbconn = await mongoose.connect(
      `mongodb+srv://${dbUser}:${dbPassword}@cluster0.v9olbjo.mongodb.net/?retryWrites=true&w=majority`
    );

    console.log("Conectou ao banco!");

    return dbconn;
  } catch (error) {
    console.log(error);
  }
};

conn();

module.exports = conn;

// connection
