export const API_URL = process.env.NODE_ENV === 'production' 
  ? 'https://react-email-confirm-server.now.sh'
  : 'http://localhost:8080'