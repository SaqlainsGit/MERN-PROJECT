import axios from "axios"

const API = axios.create({
    baseURL : "http://localhost:5000/api"
});

API.interceptors.request.use((req) => {
    const user = JSON.parse(localStorage.getItem("user"))
    if(user?.token){
        req.headers.Authorization = user.token;
    }
    return req;
})

export const register = (data) => API.post("/auth/register",data)
export const login = (data) => API.post("/auth/login",data)

export const getMovies = () => API.get("/movies")
export const searchMovies = (query) => API.get(`/movies/search?q=${query}`)
export const sortMovies = (by) => API.get(`/movies/sorted?by=${by}`)
export const getMovie=(id)=>API.get(`/movies/${id}`)
export const addMovie = (movie) => API.post(`/movies`,movie)
export const updateMovie = (id,movie) => API.put(`/movies/${id}`,movie)
export const deleteMovie = (id) => API.delete(`/movies/${id}`)

export default API;