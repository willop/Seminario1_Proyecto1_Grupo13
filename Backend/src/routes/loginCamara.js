const { Router } = require('express');
const router = Router();
const conexion = require('../../database/conection');
const aws_keys = require('../../aws/credentials');
const aws = require('aws-sdk');
require('dotenv').config();


const awsRekognition = new aws.Rekognition(aws_keys.rekognition);
const S3 = new aws.S3(aws_keys.s3);

router.post('/loginCamara',async (req, res) => {
    let username = req.body.username;
    let password = req.body.password;
    let imgS3 = "";
    let ruta = "";


    try{
        const match = await conexion;
        const result = await match.query(`
            SELECT 
                ID_usuario,
                Username,
                Password,
                Foto
            FROM proyecto.Usuario
            WHERE Username = '${username}';
        `);
        console.log("");
        console.table(result.recordset);
        ruta += result.recordset[0].Foto;
        // console.log(ruta);

        // comparacion
        if(ruta != ''){
            // console.log('Entro al if');
            var photoParams = {
                Bucket: process.env.BUCKET_S3,
                Key: ruta
            };
            // console.log(photoParams);

            let a = await S3.getObject(photoParams,function(err,data){
                // console.log(data);
                if (err){ 
                    // console.log(err);
                    return null
                }
                else {
                    // console.log(data);
                    imgS3 = Buffer.from(data.Body,'base64');
                    return imgS3;
                }
            }).promise();

            // console.log(a);

            console.log('antes de entrar a los parametros');
            let params = {
                SimilarityThreshold: 75,
                SourceImage: {
                    Bytes: Buffer.from(password, 'base64')
                },
                TargetImage: {
                    Bytes: imgS3
                } 
            };
            console.log('');
            // llamado al awsRekognition
            awsRekognition.compareFaces(params,function(err,data){
                if (err) {
                    // console.log(err);
                    res.json({
                        response: false
                    });
                } else {
                    // response
                    res.status(200).json({
                        response: true,
                        idUsuario: result.recordset[0].ID_usuario
                    });
                }
            });
        }

        
    } catch (error) {
        res.json({
            response: false
        });
    }

});

module.exports = router;