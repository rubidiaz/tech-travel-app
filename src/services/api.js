import axios from 'axios';

const api = axios.create({
    baseURL: 'https://629004dc665ea71fe12c09ce.mockapi.io'
});

export default api;
