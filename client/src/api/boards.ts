import axios from 'axios';

const BASE_URL = 'http://localhost:3001';

export function getBoards(userId: string) {
  return axios.post(`${BASE_URL}/boards`, { userId });
}

export function getBoardById(userId: string, boardId: string) {
  return axios.get(`${BASE_URL}/boards/${userId}/${boardId}`);
}
