const templates = require('./email.templates')
const sendEmail = require('./email.send')
const User = require('../user.model')
const msgs = require('./email.msgs')

exports.postEmail = (req, res) => {
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
}

exports.confirmEmail = (req, res) => {
  const { id } = req.params

  User.findById(id)
    .then(user => {

      if (!user) {
        res.json({ msg: msgs.noFind })
      }
      
      else if (user && !user.confirmed) {
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
    .catch(err => console.log(err))
}