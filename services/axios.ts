import axios from 'axios'

const baseURL = process.env.NEXT_PUBLIC_VERCEL_URL
    ? `${process.env.NEXT_PUBLIC_VERCEL_URL}`
    : "http://localhost:3000"

export const api = axios.create({
    baseURL: baseURL
})

