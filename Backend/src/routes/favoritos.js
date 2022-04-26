const { Router } = require('express');
const router = Router();
const conexion = require('../../database/conection');

router.post('/favoritos', async (req, res) => {
    const username = req.body.username;
    try {
        const pool = await conexion;
        const result = await pool.query(`
        select lu.Nombre, lu.Lugar, lu.Foto, lu.Puntuacion, lu.Tipo, lu.Descripcion 
        from proyecto.Usuario us
        inner join proyecto.Favorito fa on us.ID_usuario = fa.ID_usuario
        inner join proyecto.Lugar lu on  fa.ID_lugar = lu.ID_lugar
        where us.Username = '${username}';`);

        res.json({
            lugares: result.recordset
        });
    } catch (error) {
        console.log(error);
        res.json({
            lugares: []
        });
    }
});

module.exports = router;