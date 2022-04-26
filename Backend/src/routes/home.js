const {Router} = require('express');
const router = Router ()
const conn = require('../../database/conection');


router.get('/home',async (req,res) =>{
    try {
        const pool = await conn;
        const lugares = await pool.query(`SELECT * FROM proyecto.Lugar`)
        res.status(200).json({lugares : lugares.recordsets[0]})
    } catch (error) {
        res.status(400).json({lugares : []})
    }
});

module.exports = router;