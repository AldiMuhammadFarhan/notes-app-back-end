/* eslint-disable linebreak-style */
const Hapi = require('@hapi/hapi');
const routes = require('./routes');

const init = async () => {
  const server = Hapi.server({
    port: 5000,
    host: 'localhost',
    //jika menggunakan EC2 jalankan lewat kode di bawah
    //host: process.env.NODE_ENV !== 'production' ? 'localhost' : '172.31.36.19',
    // taruh kode di bawah ini di script package.json 
    // "start-prod": "NODE_ENV=production node ./src/server.js",
    // "start-dev": "nodemon ./src/server.js",
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });
  server.route(routes);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
};

init();
