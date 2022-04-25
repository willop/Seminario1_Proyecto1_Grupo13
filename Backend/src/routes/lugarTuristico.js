const {Router} = require('express');
const router = Router ()


router.post('/vistaLugar',(req,res) =>{
    const {nombre} = req.body;
    res.send(nombre)
});

module.exports = router;