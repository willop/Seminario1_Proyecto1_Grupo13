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
app.use('/',require('./routes/login'));
app.use('/',require('./routes/loginCamara'));
app.use('/',require('./routes/nuevoUsuario'));
app.use('/',require('./routes/traducir'));
app.use('',require('./routes/home'));
app.use('',require('./routes/perfil'));
app.use('',require('./routes/lugarTuristico'));

//SERVER LISTENING
app.listen(app.get('port'), () => {
    console.log('Backend on port', app.get('port'));
});