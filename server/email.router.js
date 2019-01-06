const router = require('express').Router()
const User = require('./user.model')
const templates = require('./email.templates')
const sendEmail = require('./email.send')

const msgs = {
  confirm: 'Email sent, please click to confirm',
  confirmed: 'Your email is confirmed!',
  already: 'Your email was already confirmed',
  resend: 'Confirmation email resent, maybe check your spam?',
  noFind: 'Could not find you!'
}

router.post('/', (req, res) => {
  const { email } = req.body
  
  User.findOne({ email })
    .then(user => {
      
      if (!user) {
        User.create({ email })
          .then(newUser => {
            return sendEmail(newUser.email, templates.confirm(newUser._id))
          })
          .then(() => res.json({ msg: msgs.confirm }))
          .catch(err => console.log(err))
      }

      else if (user && !user.confirmed) {
        sendEmail(user.email, templates.confirm(user._id))
          .then(() => res.json({ msg: msgs.resend }))
      }

      else {
        res.json({ msg: msgs.already })
      }

    })
    .catch(err => console.log(err))
})

router.get('/confirm/:id', (req, res) => {
  const { id } = req.params

  User.findById(id)
    .then(user => {
      // need an else if here?
      if (!user.confirmed) {
        User.findByIdAndUpdate(id, { confirmed: true })
          .then(user => {
            if (!user) {
              return res.status(404).json({ msg: msgs.noFind })
            }
            res.json({ msg: msgs.confirmed })
          })
          .catch(err => console.log(err))
      }
      else  {
        res.json({ msg: msgs.already })
      }

    })
  
})

module.exports = router