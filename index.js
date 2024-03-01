const express = require('express');
const app = express();
const PORT = 8050;

require('dotenv').config();
const DbConfig = require('./config/dbConfig');

app.use(express.json());

const userRoutes = require('../server/routes/userRoutes');

app.use('/api/users', userRoutes);

app.listen(PORT, () => {
    console.log('Server is running at Port', +PORT);
})