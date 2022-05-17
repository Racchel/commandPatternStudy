import { DatabaseLib } from '../../node-modules/database-lib/index.js';

export const CreateDBConnection = () => {
  const config = {
    user: '',
    password: '',
    database: '',
  };

  const conn = new DatabaseLib();
  return conn.create(config);
};
