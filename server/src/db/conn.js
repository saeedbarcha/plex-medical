require("dotenv").config()

const mongoose = require("mongoose");
const MONGO_URI = process.env.MONGO_URI;
mongoose
  .connect(MONGO_URI, {
    dbName: "PlexMedical",
    useNewUrlParser: true,
    // useCreateIndex:true,
    useUnifiedTopology: true,
    // useFindAndModify: false
  })
  .then(() => console.log("Connected to mongodb successfully..."))
  .catch((err) => console.log("not connected to DB" + err));
