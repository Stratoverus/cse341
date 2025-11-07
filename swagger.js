const swaggerAutogen = require('swagger-autogen')();

const doc = {
  info: {
    title: 'Week 02 CSE 341 Contacts Project',
    description: 'Week 02 routes '
  },
  host: 'https://cse341-contacts-vi6v.onrender.com/',
  schemes: ['http', 'https']
};

const outputFile = './swagger-output.json';
const routes = ['./server.js'];

swaggerAutogen(outputFile, routes, doc).then(() => {
  require('./server.js'); // Your project's root file
});