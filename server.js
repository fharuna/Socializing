const express = require('express');
const connect = require("./config/mongoose.js").start();

const app = express();
const PORT = process.env.port || 3001;

app.use(express.json());
app.use(express.urlencoded({extended: true}));

app.use(required('./routes'));

app.listen(PORT, () => console.log(`Connected on localhost:${PORT}`));