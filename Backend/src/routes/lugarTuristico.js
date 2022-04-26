const {Router} = require('express');
const router = Router ()
const conn = require('../../database/conection');

router.post('/vistaLugar',async (req,res) =>{
    const {nombre} = req.body;
    try {
        const pool = await conn;
        const lugar = await pool.query(`select * from proyecto.Lugar Lu where Lu.Nombre = '${nombre}'`)
        res.status(200).json(lugar.recordsets[0][0])
    } catch (error) {
        console.log('Bad request Vista Lugar: ',error);
        res.status(400).json({})
    }
});

module.exports = router;