const express = require("express");
const mongoose = require("mongoose");
const app = express();
const cors = require("cors");

app.use(cors({ origin: "http://localhost:1234" }));

const router = require("./routes/userRouter");
app.use(express.json());
app.use("/user", router);

const uri =
  "mongodb+srv://bhowmicksujoy22:5GJLvJNkO5FRaFIc@cluster0.ujtw1.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";
let connection = async () => {
  try {
    let conn = await mongoose.connect(uri);
    if (conn)
      app.listen(5000, () => console.log("server running on port: 5000"));
  } catch (error) {
    console.log("Error: ", error);
  }
};
connection(uri);
