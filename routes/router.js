const express = require('express')

const router = express.Router()

const controller = require('../controllers/controller')

router.get('/', controller.getHome)

router.post('/addItem/:item', controller.addItem)
router.post('/deleteItem/:item', controller.deleteItem)

module.exports = router;