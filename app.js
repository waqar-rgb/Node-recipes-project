const express = require("express");
const app = express();
const cors = require("cors");
// const path = require("path");
require("dotenv").config();
// app.use(express.static(path.join(__dirname, 'view')));
app.use(express.json());
const connecteddb = require("./db");
const port = process.env.PORT || 5000;
app.use(
  cors({
    origin: "http://localhost:4200", 
    methods: "GET,POST",
  })
);
const blogRouter = require("./routes/BlogRoutes");

app.use("/api/blogs", blogRouter);

// database connectivity
connecteddb()
  .then(() => {
    console.log("Datebase successfully connected");
  })
  .catch((error) => {
    console.log("Database error");
  });

app.listen(port, () => console.log(`server running http://localhost:${port}`));
