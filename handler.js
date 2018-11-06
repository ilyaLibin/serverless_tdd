'use strict';

module.exports.endpoint = (event, context, callback) => {
  const file = event
  console.log(file)
  const response = {
    statusCode: 200,
    body: JSON.stringify({
      message: `Hello, the current time is ${new Date().toTimeString()}.`,
    }),
  };

  callback(null, response);
};
