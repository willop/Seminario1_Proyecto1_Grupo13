const { Router } =require('express'); 
const router = Router();
const aws = require('aws-sdk')
const aws_keys = require('../../aws/credentials');
const {lugarMasVisitado,lugarMenosVisitado,lugarMasVotado,holaGuate} = require('../helpers/infoChatbot');

router.post('/chatbot', async (req, res) => {
    
    const {mensaje,username} = req.body;

    const lexruntime = new aws.LexRuntime(aws_keys.lex);

    const params = mapToLex(mensaje,username)

    let data = {}
    let msg = ""
    await lexruntime.postText(params,function(err,data){
        if (err) {
           msg = "Hubo un problema al comunicarse con el bot, pongase en contacto con el administrador."
        }
        else {
            slots = data
            msg = data.message
        } 
    }).promise();

    //obteniendo data
    let informacion = "";
    if (msg.toLowerCase() == "mostrarlugarmasvotado"){
        informacion = await lugarMasVotado()
    }else if ( msg.toLowerCase() == "mostrarlugarmasvisitado"){
        informacion = await lugarMasVisitado()
    }else if ( msg.toLowerCase() == "mostrarlugarmenosvisitado"){
        informacion = await lugarMenosVisitado()
    }else if ( msg.toLowerCase() == "mostrarholaguate"){
        informacion = await holaGuate()
    }

    res.json({respuesta : informacion})

});

const mapToLex = (mensaje,username) => {
    return {
        botAlias: process.env.BOTALIAS, /* required, has to be '$LATEST' */
        botName: process.env.BOTNAME, /* required, the name of you bot */
        inputText: mensaje, /* required, your text */
        userId: username, /* required, arbitrary identifier */
      };
};

module.exports = router;