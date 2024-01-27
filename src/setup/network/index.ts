import axios from 'axios';

const Service = axios.create({
  baseURL: import.meta.env.VITE_APP_API_URL,
  headers: {
   
  },
});

// Service.interceptors.request.use(
//   (config: any) => {
//     const token = window.localStorage.getItem('accessToken');
//     if (token) {
//       config.headers.Authorization = `Bearer ${token}`;
//     }
//     return config;
//   },`
//   (error: AxiosError) => {
//     return Promise.reject(error);
//   }
// );

export default Service;
