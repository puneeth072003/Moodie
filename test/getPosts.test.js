const assert = require('assert');
const sinon = require('sinon');
const getPosts = require('../src/Controller/getPosts'); // Replace with the actual file name

describe('getPosts', () => {
  it('should send a response with modified JSON data', (done) => {
    const req = { body: { username: 'KillerBoi935' } };
    const res = {
      send: sinon.spy(),
      status: sinon.spy(),
    };

    getPosts(req, res);

    // Simulate the Python script output
    const pythonOutput = '{"Overall": "test-overall"}';
    req.pythonProcess = { stdout: { emit: (event, data) => { if (event === 'data') { res.send(JSON.stringify({ Suggestion: 'test-suggestion', Overall: 'test-overall' })); done(); } } } };
    req.pythonProcess.stdout.emit('data', pythonOutput);
  });

  it('should send a 500 error response if JSON parsing fails', (done) => {
    const req = { body: { username: 'KillerBoi935' } };
    const res = {
      send: sinon.spy(),
      status: sinon.stub().returns({ send: sinon.spy() }),
    };

    getPosts(req, res);

    req.pythonProcess = { stdout: { emit: (event, data) => { if (event === 'data') { res.status(500).send('Error parsing JSON data'); done(); } } } };
    req.pythonProcess.stdout.emit('data', 'Invalid JSON');
  });
});