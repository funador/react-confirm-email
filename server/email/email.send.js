const nodemailer = require('nodemailer')

// The credentials for the email account you want to send
// mail from 
const credentials = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.MAIL_USER, 
    pass: process.env.MAIL_PASS  
  }
}

// Getting Nodemailer all setup with the credentials to send emails 
const transporter = nodemailer.createTransport(credentials)

// exporting an 'async' function here allows 'await' to be used
// at the end of this function
module.exports = async (to, content) => {
  
  // The from and to addresses for the email that is about to be sent
  const contacts = {
    from: process.env.MAIL_USER,
    to
  }
  
  // Combining the content and contacts into a single object that can
  // be passed to Nodemailer
  const mailContent = Object.assign({}, content, contacts)
  
  // This file is imported into the controller as 'sendEmail'. Because 
  // 'transporter.sendMail()' below returns a promise we can write code like:
  //
  //  sendEmail()
  //   .then(() => doSomethingElse)
  //
  // In the contoller when we are using the sendEmail() function.
  // 
  // If you are running into errors getting Nodemailer working, wrap this line in a
  // try/catch to see what is going wrong
  await transporter.sendMail(mailContent)

}