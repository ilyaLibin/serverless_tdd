const qs = require('qs');
const dynamodb = require('./src/dynamodb.js');
const validateWebhook = require('./src/paddle.js')
module.exports.paddleHook = async (event, context, callback) => {
  const req = qs.parse(event.body, { ignoreQueryPrefix: true })
  const isValid = validateWebhook(req);

  if (isValid) {
    const d = await dynamodb.put({
      TableName: 'Licenses',
      Item: {
        created_at: Date.now(),
        application: 'vocabjuice',
        email: 'google@google.com',
        uuid: 'hololoshenki',
        verified: false
      }
    })

    const response = {
      statusCode: 200,
      body: JSON.stringify(isValid)
    };

    callback(null, response);
  }
};
