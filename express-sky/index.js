const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const usersRouter = require('./src/router/user');

const app = express();

app.use(cors());
app.use(bodyParser.json());

app.use('/api/v1', usersRouter);

app.listen(9010, function() {
    console.log('Server listening on port 9010');
});
