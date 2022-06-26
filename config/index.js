const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://chitkara-ip.vercel.app/'
export const cloud_name = 'lakshaythegupta'