const express = require("express");
const connectDB = require("./db"); 
require('dotenv').config();
const cors = require('cors');





const app = express();



connectDB();


app.use(cors());
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));

app.use("/api/students", require("./routes/students"));
app.use("/api/teachers", require("./routes/teachers"));
app.use("/api/courses", require("./routes/courses"));
