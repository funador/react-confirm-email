const router = require('express').Router()
const emailController = require('./email.controller')

router.post('/', emailController.postEmail)
router.get('/confirm/:id', emailController.confirmEmail)

module.exports = router