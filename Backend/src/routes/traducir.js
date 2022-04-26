const { Router } = require('express');
const router = Router();

const keys = require('../../aws/credentials')
const aws = require('aws-sdk');

const translate = new aws.Translate(keys);

router.post('/traducir', async (req, res) => {
    const text = req.body.texto;
    const language = req.body.idioma;

    let params = {
        SourceLanguageCode: 'auto',
        TargetLanguageCode: language,
        Text: text || 'Default'
    };
    const traduccion = await translate.translateText(params).promise();
    
    const response = {
        statusCode: 200,
        body: {
            traduccion: traduccion.TranslatedText
        },
    };
    res.json(response);
});

module.exports = router;


