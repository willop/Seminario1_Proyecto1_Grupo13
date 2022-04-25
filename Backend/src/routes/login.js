const { Router } = require('express');
const router = Router();

router.post('/login',async (req, res) => {
    try{
        res.json({
            response: "login"
        });
    } catch (error) {
        res.json({
            response: 0
        });
    }
});

module.exports = router;