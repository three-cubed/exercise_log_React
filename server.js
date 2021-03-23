// Port 5005 is indicated as the proxy in /client/package.json

const express = require('express');
const app = express();
const bodyParser = require('body-parser');
app.use(bodyParser.json());
const mongoose = require('mongoose');

const appRouter = require('./routes/routes');
app.use('/', appRouter);

if (process.env.NODE_ENV !== 'production'){
    require('dotenv').config({ path: './.env' });
}

mongoose.connect(process.env.DATABASE_URL,
    { useNewUrlParser: true, useUnifiedTopology: true },
    () => { console.log('Connected to MongoDB'); });

const PORT = process.env.PORT || 5005;
app.listen(PORT);
console.log(`listening to (port) ${PORT}`);
