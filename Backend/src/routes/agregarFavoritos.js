const { Router } = require('express');
const router = Router();
const conexion = require('../../database/conection');

router.post('/agregarFavoritos', async (req, res) => {
    const idUsuario = req.body.idUsuario;
    const idLugar = req.body.idLugar;
    try {
        const pool = await conexion;
        const result = await pool.query(`
        insert into proyecto.Favorito(ID_usuario, ID_lugar)
        values(${idUsuario}, ${idLugar})`);

        res.json({
            response: true
        });
    } catch (error) {
        console.log(error);
        res.json({
            response: false
        });
    }
});

module.exports = router;