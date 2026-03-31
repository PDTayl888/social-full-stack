import axios from 'axios'

export const token = () => localStorage.getItem('token')

export const userClient = axios.create({
     baseURL: 'https://social-full-stack-iu8s.onrender.com/api/users',
     headers: {
          Authorization: `Bearer ${token()}`
     }
})

export const postClient = axios.create({
     baseURL: 'https://social-full-stack-iu8s.onrender.com/api/posts'
})

// use the latest version of the token in local storage
postClient.interceptors.request.use((req) => {
     if (token()) req.headers.Authorization = `Bearer ${token()}`
     return req
})
