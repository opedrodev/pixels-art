import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export function getBoards(userId: string) {
  return axios.post(`${BASE_URL}/boards`, { userId });
}
