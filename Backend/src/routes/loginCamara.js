const { Router } = require('express');
const router = Router();

router.post('/loginCamara',async (req, res) => {
    try{
        res.json({
            response: "loginCamara"
        });
    } catch (error) {
        res.json({
            response: 0
        });
    }

});

module.exports = router;