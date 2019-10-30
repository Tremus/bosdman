const server = require('./createServer');
const { port } = require('./Config');

server.listen(port, () => console.log(`ExpressJS running on https://localhost:${port}`));
