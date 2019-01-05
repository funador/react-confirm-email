const { CLIENT_ORIGIN } = require('./config')

module.exports = {

  confirm: id => ({
    subject: 'Simple Email Confirmation',
    html: `
      <a href='${CLIENT_ORIGIN}/confirm/${id}'>
        click here to confirm
      </a>
    `,      
    text: `Copy and paste this link: ${CLIENT_ORIGIN}/confirm/${id}`
  })
  
}