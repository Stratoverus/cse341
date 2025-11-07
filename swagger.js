const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Week 02 CSE 341 Contacts Project',
    description: 'Week 02 routes '
  },
  host: 'localhost:3000',
  schemes: ['https', 'http']
};

const outputFile = './swagger-output.json';
const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc).then(() => {
  require('./server.js'); // Your project's root file
});