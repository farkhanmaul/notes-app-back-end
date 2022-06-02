/* eslint-disable linebreak-style */
// POST = membuat
// GET = menampilkan
// PUT = mengubah
// DELETE = menghapus
// chrome://flags = Block insecure private network requests = (disable)
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();
  console.log(`Server berlari pada ${server.info.uri}`);
};
init();
