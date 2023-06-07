const express = require("express");
const app = express();
const PORT = 54321

app.use(express.json());

app.listen(PORT, () => {
    console.log(`Server is listening on ${PORT}`);
})