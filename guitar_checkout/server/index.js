const express = require('express');
const db = require('../database')
const controllers = require('../database/controllers/guitars.js');
const path = require('path')
const morgan = require('morgan');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use(express.static(path.join(__dirname, '../client/dist')));
app.use(morgan('dev'));

app.get('/guitars', controllers.getAll);
app.post('/guitars', controllers.createGuitar);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
