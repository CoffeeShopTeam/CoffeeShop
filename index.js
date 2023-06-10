require('dotenv').config();
const express = require("express");
const mongoConnect = require('./src/config/mongoConnect.js');
const app = express();

const PORT = process.env.PORT;
app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
    mongoConnect();
})