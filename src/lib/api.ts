import axios from 'axios';

const BASE_URL = 'https://jsonplaceholder.typicode.com';
const http = axios.create({
  baseURL: BASE_URL,
});

export const api = {
  getAlbums: async () => {
    const response = await http.get('/albums');
    return response.data;
  },
}
