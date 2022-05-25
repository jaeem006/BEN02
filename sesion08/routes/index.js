var router = require('express').Router();

router.get('/', (req, res) => {
	res.send("Bienvenido a BeduShop")
})

router.use('/productos', require('./productos'));

module.exports = router;