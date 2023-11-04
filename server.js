require('dotenv').config();
const express = require('express');
const cors = require('cors');
const main = require('./src/database');

const app = express();

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT;

main();

app.get('/', (req, res) => res.status(200).send());

app.listen(8080, () => console.log('running servidor'));
