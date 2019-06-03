const router = require('express').Router();
const authenticate = require('../middleware/authenticate');

router.get('/private', authenticate, (req, res) => {
    let obj = {
        message: 'Get the authentication successfully',
        _id: req._id,
    };
    res.status(200).send(obj);
});

module.exports = router;