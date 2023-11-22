import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';

const baseUrl = import.meta.env.VITE_MOVIE_API_URL;
const apiKey = import.meta.env.VITE_MOVIE_API_KEY;

export const axiosFn = axios.create({
  baseURL: `${baseUrl}?apikey=${apiKey}`,
  headers: {
    'Content-Type': 'application/json',
  },
  paramsSerializer: {
    serialize: (p) => qs.stringify(p, { arrayFormat: 'repeat' }),
  },
});

export const Axios = (axiosOptions: AxiosRequestConfig) =>
  axiosFn({
    ...axiosOptions,
  }).then((response) => response.data);
