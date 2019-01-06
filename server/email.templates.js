const { CLIENT_ORIGIN } = require('./config')

module.exports = {

  confirm: id => ({
    subject: 'Confirm your email',
    html: `
      <a href='${CLIENT_ORIGIN}/confirm/${id}'>
        click to confirm
      </a>
    `,      
    text: `Copy and paste this link: ${CLIENT_ORIGIN}/confirm/${id}`
  })
  
}