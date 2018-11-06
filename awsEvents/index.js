const { execSync } = require('child_process');
module.exports.dynomodb = {
  put: async (params) => await JSON.parse(execSync(`sam local generate-event s3 put`))
}

module.exports.sqs = {
  receiveMessage: async (params) => await JSON.parse(execSync(`sam local generate-event sqs receive-message`))
}
