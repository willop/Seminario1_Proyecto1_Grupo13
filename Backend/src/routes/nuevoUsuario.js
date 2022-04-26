const { Router } = require('express');
const router = Router();
const conexion = require('../../database/conection');
const { v4: uuidv4 } = require('uuid');//generar id random
const aws_keys = require('../../aws/credentials');
const aws = require('aws-sdk');
require('dotenv').config();

router.post('/nuevoUsuario', async (req, res) => {
    const username = req.body.username;
    const name = req.body.name;
    const nacionalidad = req.body.nacionalidad;
    const edad = req.body.edad;
    const password = req.body.password;
    const foto = req.body.foto;

    let ruta = "foto_perfil/" + uuidv4() + ".png";

    // console.log(req.body);


    try {
        //imagen en S3
        const buff = new Buffer.from(foto, 'base64');
        // conexion a awsS3
        let s3 = new aws.S3(aws_keys.s3);
        const params = {
            Bucket: process.env.BUCKET_S3,
            Key: ruta,
            Body: buff,
            ContentType: "image"
        };
        const putResult = s3.putObject(params).promise();
        // console.log("resultado bucket: ", putResult);
        
        //inser DB
        const match = await conexion;
        const result = await match.query(`
            INSERT INTO proyecto.Usuario(Username,Nacionalidad,Edad,Password,Foto,Nombre_usuario)
            values('${username}','${nacionalidad}','${edad}','${password}','${ruta}','${name}');
        `);
        res.status(200).json({
            response: true
        });
    } catch (error) {
        res.json({
            response: false
        });
    }
});

module.exports = router;