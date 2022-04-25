const { Router } = require('express');
const router = Router();

router.post('/nuevousuario',async (req, res) => {
    try{
        res.json({
            response: "nuevoUsuario"
        });
    } catch (error) {
        res.json({
            response: 0
        });
    }
});

module.exports = router;