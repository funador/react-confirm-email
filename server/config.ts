export const PORT = process.env.PORT || 8080

export const CLIENT_ORIGIN = process.env.NODE_ENV === 'production'
  ? process.env.CLIENT_ORIGIN
  : 'http://localhost:3000'

export const DB_URL = process.env.NODE_ENV === 'production'
  ? process.env.REACT_CONFIRM_EMAIL_DB_URL
  : 'mongodb://localhost/simple-email-confirmation'
