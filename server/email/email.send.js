const nodemailer = require('nodemailer')

module.exports = async (to, content) => {
  
  const credentials = {
    host: 'smtp.gmail.com',
    port: 465,
    auth: {
      user: process.env.MAIL_USER, 
      pass: process.env.MAIL_PASS  
    }
  }

  const contacts = {
    from: process.env.MAIL_USER,
    to
  }
  
  const mailContent = Object.assign({}, content, contacts)
  
  const transporter = nodemailer.createTransport(credentials)
  await transporter.sendMail(mailContent)

}