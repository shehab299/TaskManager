const mongoose = require("mongoose");


const connectDB = async () => {
  await mongoose.connect(process.env.CONNECTION_STRING, {
    family:4,
  });
};

module.exports = {connectDB};
