'use strict';

// tests for currentTime
// Generated by serverless-mocha-plugin
const awsEvents = require('../awsEvents');
const dynamodb = require('../src/dynamodb.js');
const mochaPlugin = require('serverless-mocha-plugin');
const expect = mochaPlugin.chai.expect;
let wrapped = mochaPlugin.getWrapper('paddleHook', '/handler.js', 'paddleHook');

describe('paddleHook', () => {
  before(async () => {
    return await dynamodb.delete({
      TableName: 'Licenses',
      Key:{
        email: "google@google.com",
        uuid: "hololoshenki"
      }
    }).promise()
  });

  it('receive an event', async () => {
    const event = await awsEvents.paddle.success();
    return wrapped.run(event).then((response) => {
      expect(response).eql({ statusCode: 200, body: 'true' });
    });
  });

  it('save data to database', async () => {
    const event = await awsEvents.paddle.success();

    return wrapped.run(event)
      .then(async (response) => {
        const item = await dynamodb.get({
          TableName: 'Licenses',
          Key:{
            email: "google@google.com",
            uuid: "hololoshenki"
          }
        }).promise()

        expect(item.Item).to.not.be.undefined
        // expect(1).to.be.equal(1)

    })
  });
});
