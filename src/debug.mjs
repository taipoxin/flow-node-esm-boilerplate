/**
 * module that configure debug module dinamically
 * using .env file reading
 */

import dotenv from 'dotenv';
import makeDebug from 'debug';

dotenv.load();

if (process.env.DEBUG === '*') {
  // set debug enabled for whole project
  makeDebug.enable('*');
}

export default makeDebug;
