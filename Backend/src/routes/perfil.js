const {Router} = require('express');
const router = Router ()


router.post('/perfil',(req,res) =>{
    const {username} = req.body;
    res.send(username)
});

module.exports = router;