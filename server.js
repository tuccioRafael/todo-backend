require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

app.use(cors());

const PORT = process.env.PORT;

app.get('/', (req, res) => res.status(200).send())

app.listen(8080, () => console.log('running servidor'));
