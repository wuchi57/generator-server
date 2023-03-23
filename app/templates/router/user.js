const express = require('express')
const router = express.Router()

router.get('/userInfo', (req, res) => {
  res.json({
    code: 200,
    msg: '获取用户信息成功',
    data: {
      name: 'admin',
      password: 'fake-password'
    }
  })
})

module.exports = router
