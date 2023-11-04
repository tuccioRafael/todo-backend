const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.listen(PORT, () => console.log('running servidor'));
