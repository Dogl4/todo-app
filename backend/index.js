const connection = require('../config/db');
const cors = require('cors');
const express = require('express');
const app = express();

connection();

app.use(express.json());
app.use(cors());

const port = process.env.PORT || 3000;
app.listen(port, () => console.log(`🛸 Listening on port ${port}`));
