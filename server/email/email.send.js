const nodemailer = require('nodemailer')

// The credentials for the email account you want to send mail from. 
const credentials = {
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    // These environment variables will be pulled from the .env file
    user: process.env.MAIL_USER, 
    pass: process.env.MAIL_PASS  
  }
}

// Getting Nodemailer all setup with the credentials for when the 'sendEmail()'
// function is called.
const transporter = nodemailer.createTransport(credentials)

// exporting an 'async' function here allows 'await' to be used
// as the return value of this function.
module.exports = async (to, content) => {
  
  // The from and to addresses for the email that is about to be sent.
  const contacts = {
    from: process.env.MAIL_USER,
    to
  }
  
  // Combining the content and contacts into a single object that can
  // be passed to Nodemailer.
  const email = Object.assign({}, content, contacts)
  
  // This file is imported into the controller as 'sendEmail'. Because 
  // 'transporter.sendMail()' below returns a promise we can write code like this
  // in the contoller when we are using the sendEmail() function.
  //
  //  sendEmail()
  //   .then(() => doSomethingElse())
  // 
  // If you are running into errors getting Nodemailer working, wrap the following 
  // line in a try/catch. Most likely is not loading the credentials properly in 
  // the .env file or failing to allow unsafe apps in your gmail settings.
  await transporter.sendMail(email)

}