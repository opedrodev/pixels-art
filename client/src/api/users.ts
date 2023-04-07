import axios from 'axios';
import { ILogin } from '../interfaces';

const BASE_URL = 'http://localhost:3001';

export function login(credentials: ILogin) {
  return axios.post(`${BASE_URL}/users/login`, credentials);
}
