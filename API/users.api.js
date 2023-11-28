import { getAllUsers } from '../database/users.js';

export const getUsers = async () => {
  return await getAllUsers();
};
