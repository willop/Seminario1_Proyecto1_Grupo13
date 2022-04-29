const {Router} = require('express');
const router = Router ()
const conn = require('../../database/conection');
const aws = require('aws-sdk'); //aws
const aws_keys = require('../../aws/credentials');

router.post('/perfil',async (req,res) =>{
    const {username} = req.body;
    try {
        const pool = await conn;
        const lugar = await pool.query(`select * from proyecto.Usuario Pe where Pe.Username = '${username}'`);
        console.table(lugar.recordset[0]);
        var foto = lugar.recordset[0].Foto;
        if(foto!=null){
            // configruacon para s3 para obenter foto en el bucket
            let S3 = new aws.S3(aws_keys.s3);
            let photoParams = {
                Bucket: process.env.BUCKET_S3,
                Key: foto
            };
            S3.getObject(photoParams, function(err,data){
                if(err){
                    res.status(400).json({});
                } else {
                    result = Buffer.from(data.Body).toString('base64');
                    res.status(200).json({
                        ID_usuario: lugar.recordsets[0][0].ID_usuario,
                        Username: lugar.recordsets[0][0].Username,
                        Nacionalidad: lugar.recordsets[0][0].Nacionalidad,
                        Edad: lugar.recordsets[0][0].Edad,
                        Password: lugar.recordsets[0][0].Password,
                        Foto: result,
                        Nombre_usuario: lugar.recordsets[0][0].Nombre_usuario
                    })
                }
            })
        }
        // res.status(200).json(lugar.recordsets[0][0])
    } catch (error) {
        console.log('Bad request Vista Lugar: ',error);
        res.status(400).json({})
    }
});

module.exports = router;