const {Router} = require('express');
const router = Router ()


router.get('/home',(req,res) =>{
    res.send('Hola')
});

module.exports = router;