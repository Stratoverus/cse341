const router = require('express').Router();

router.use('/', require('./swagger'))
router.use('/contacts', require('./contacts'));
router.get('/', (req, res) => { res.send('Hello World');});




module.exports = router;