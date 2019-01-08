const { CLIENT_ORIGIN } = require('../config')

module.exports = {

  confirm: id => ({
    subject: '+50?',
    html: `
      <p>Did this help you in some way?</p>
      <a href='${CLIENT_ORIGIN}/confirm/${id}'>
        click to confirm
      </a>
    `,      
    text: `Copy and paste this link: ${CLIENT_ORIGIN}/confirm/${id}`
  })
  
}