const express = require('express');
var bodyParser = require('body-parser');
const app = express();
const cors = require('cors')
require('dotenv').config();

//settings
app.set('port', 5000)
app.use(bodyParser.json({ limit: '10mb', extended: true }));
app.use(bodyParser.urlencoded({ limit: '10mb', extended: true }))
app.use(express.json())
app.use(cors());

//ROUTES
// traducir
app.use('/',require('./routes/traducir'));

//SERVER LISTENING
app.listen(app.get('port'), () => {
    console.log('Backend on port', app.get('port'));
});