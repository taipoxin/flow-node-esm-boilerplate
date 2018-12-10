import makeDebug from 'debug';

// for using debug, you can create .env file and
// add paste there "DEBUG=*" for instant debugging

const debug = makeDebug('app');

debug('hello from %s', 'app');

export default { a: 10 };
