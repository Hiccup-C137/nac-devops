import { createConnection } from 'typeorm';
import User from '../models/User';

const entities = [User];

createConnection({
  type: 'postgres',
  host: 'devopsfiap.postgres.database.azure.com',
  port: 5432,
  username: 'postgres@devopsfiap',
  password: 'nac@1234',
  database: 'postgres',
  entities,
});
