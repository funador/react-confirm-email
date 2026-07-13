export const API_URL = process.env.NODE_ENV === 'production'
  ? 'https://react-confirm-email-server.vercel.app'
  : 'http://localhost:8080'