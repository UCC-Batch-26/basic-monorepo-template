import { connect } from 'mongoose';

export async function db(uri) {
  try {
    await connect(uri);
  } catch (error) {
    console.log('Failed to connect to the database', error);
  }
}
