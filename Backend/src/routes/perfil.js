const {Router} = require('express');
const router = Router ()
const conn = require('../../database/conection');

router.post('/perfil',async (req,res) =>{
    const {username} = req.body;
    try {
        const pool = await conn;
        const lugar = await pool.query(`select * from proyecto.Usuario Pe where Pe.Username = '${username}'`)
        res.status(200).json(lugar.recordsets[0][0])
    } catch (error) {
        console.log('Bad request Vista Lugar: ',error);
        res.status(400).json({})
    }
});

module.exports = router;