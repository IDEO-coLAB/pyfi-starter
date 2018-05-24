const express = require('express');
const PyFi = require('pyfi');

const app = require('express')();
const server = require('http').Server(app);
const io = require('socket.io')(server);

app.use(express.static('public'));


const py = PyFi({
    path: './python', // equivalent to setting PYTHONPATH
    imports: [{
      import: ['slow_task'],
      from: 'example',
    }],
  });

py._.attachClientSocketIO(io);


py._.onReady(() => {
  server.listen(3000, () => {
    console.log('listening on port 3000!');
  });
});
