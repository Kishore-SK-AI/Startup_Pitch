import axios from "axios";

const api = axios.create({
    baseURL: import.meta.env.VITE_API_URL || 'https://startup-pitch-mt6u.onrender.com',
    withCredentials: true,
    headers: {
        "Content-Type": "application/json",
    },
});

// changed something


export default api;