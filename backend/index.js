const router = require('./routes');
const connection = require('./databases/config/db');
const cors = require('cors');
const express = require('express');
const app = express();

connection();

app.use(express.json());
app.use(cors());

app.use('/api/tasks', router);

const port = process.env.PORT || 3001;
app.listen(port, () => console.log(`🛸 Listening on port ${port}`));
