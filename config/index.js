const dev = process.env.NODE_ENV !== 'production'

export const server = dev ? 'http://localhost:3000' : 'https://linkerr.vercel.app/'
export const cloud_name = 'tarun12'