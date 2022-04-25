const { Router } = require('express');
const router = Router();

router.post('/traducir', (req, res) => {
    res.json({
        traduccion: "hola mundo"
    });
});

module.exports = router;