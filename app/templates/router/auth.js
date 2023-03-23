const express = require('express')
const router = express.Router()
const auth = require('../utils/auth')

router.all('*', auth.verifyToken)

module.exports = router
