const { Router } = require('express');
const router = Router();
const conexion = require('../../database/conection');

router.post('/login',async (req, res) => {
    const username = req.body.username;
    const password = req.body.password;
    try{
        const match = await conexion;
        const result = await match.query(`
            SELECT ID_usuario
            FROM proyecto.Usuario
            WHERE Username = '${username}' and Password = '${password}';
        `);
        res.status(200).json({
            response: true,
            idUsuario: result.recordset[0].ID_usuario
        });
    } catch (error) {
        res.status(404).json({
            response: false
        });
    }
});

module.exports = router;