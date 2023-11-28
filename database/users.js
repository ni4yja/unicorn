import { connectToDatabase } from './index.js';

const usersCollection = async () => {
  const db = await connectToDatabase();
  return db.collection('users');
};

export const getAllUsers = async () => {
  const users = await usersCollection();
  const results = await users.find();
  return results.toArray();
};
