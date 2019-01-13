const { CLIENT_ORIGIN } = require('../config')

module.exports = {

  confirm: id => ({
    subject: 'React Confirm Email',
    html: `
      <a href='${CLIENT_ORIGIN}/confirm/${id}'>
        click to confirm email
      </a>
    `,      
    text: `Copy and paste this link: ${CLIENT_ORIGIN}/confirm/${id}`
  })
  
}