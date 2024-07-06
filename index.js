const express = require("express");
const app = express();
const mongoose = require("mongoose");
const userRoute = require("./Apis/UserRoutes");
const eventRouter = require("./Apis/EventRoute");

const cors = require("cors");
require("dotenv").config();

mongoose
  .connect(process.env.mongoURI)
  .then(() => console.log("DB Connected!"))
  .catch(() => console.log("Error connecting DB"));

// var whitelist = ["http://localhost:5173", "http://localhost:5174"];
// var corsOptions = {
//   origin: function (origin, callback) {
//     if (whitelist.indexOf(origin) !== -1) {
//       callback(null, true);
//     } else {
//       callback(new Error("Not allowed by CORS"));
//     }
//   },
// };
// app.use(cors(corsOptions));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(userRoute);
app.use(eventRouter);

const PORT = 8089;
app.listen(PORT, () => {
  console.log("Server Connected at " + PORT);
});
