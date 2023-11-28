import { MongoClient } from 'mongodb';
import process from 'node:process';

const { DB_NAME, DB_USER, DB_PASS, DB_SERVER } = process.env;

const uri = `mongodb+srv://${DB_USER}:${DB_PASS}@${DB_SERVER}/?retryWrites=true&w=majority`;

let db;

export const connectToDatabase = async () => {
  if (!db) {
    const client = new MongoClient(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    try {
      await client.connect();
      console.log('Connected to MongoDB');
      db = client.db(DB_NAME);
      console.log('Hello darkness');
    } catch (error) {
      console.error('Error connecting to MongoDB:', error);
      throw error;
    }
  }

  return db;
};
