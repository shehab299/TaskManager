require("dotenv").config();
const { connectDB } = require("./db/connect");
const app = require("./app");

const start = async () => {
  try {
    await connectDB();
    app.listen(process.env.PORT);
    console.log("Server is Running");
  } catch (err) {
    console.log(err);
  }
};

start();
