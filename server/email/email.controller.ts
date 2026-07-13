import { Request, Response } from 'express'
import User from '../user.model'
import sendEmail from './email.send'
import msgs from './email.msgs'
import templates from './email.templates'

// The callback that is invoked when the user submits the form on the client.
export const collectEmail = (req: Request, res: Response) => {
  const { email } = req.body

  User.findOne({ email })
    .then(user => {

      // We have a new user! Send them a confirmation email.
      if (!user) {
        User.create({ email })
          .then(newUser => sendEmail(newUser.email, templates.confirm(newUser._id.toString())))
          .then(() => res.json({ msg: msgs.confirm }))
          .catch(err => console.log(err))
      }

      // We have already seen this email address. But the user has not
      // clicked on the confirmation link. Send another confirmation email.
      else if (user && !user.confirmed) {
        sendEmail(user.email, templates.confirm(user._id.toString()))
          .then(() => res.json({ msg: msgs.resend }))
      }

      // The user has already confirmed this email address
      else {
        res.json({ msg: msgs.alreadyConfirmed })
      }

    })
    .catch(err => console.log(err))
}

// The callback that is invoked when the user visits the confirmation
// url on the client and a fetch request is sent in componentDidMount.
export const confirmEmail = (req: Request, res: Response) => {
  const { id } = req.params

  User.findById(id)
    .then(user => {

      // A user with that id does not exist in the DB. Perhaps some tricky
      // user tried to go to a different url than the one provided in the
      // confirmation email.
      if (!user) {
        res.json({ msg: msgs.couldNotFind })
      }

      // The user exists but has not been confirmed. We need to confirm this
      // user and let them know their email address has been confirmed.
      else if (user && !user.confirmed) {
        User.findByIdAndUpdate(id, { confirmed: true })
          .then(() => res.json({ msg: msgs.confirmed }))
          .catch(err => console.log(err))
      }

      // The user has already confirmed this email address.
      else  {
        res.json({ msg: msgs.alreadyConfirmed })
      }

    })
    .catch(err => console.log(err))
}
