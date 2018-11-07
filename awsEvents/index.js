const { execSync } = require('child_process');
module.exports.dynomodb = {
  put: async (params) => await JSON.parse(execSync(`sam local generate-event s3 put`))
}

module.exports.sqs = {
  receiveMessage: async (params) => await JSON.parse(execSync(`sam local generate-event sqs receive-message`))
}


module.exports.paddle = {
  success: () => ({ resource: '/paddle',
  path: '/paddle',
  httpMethod: 'POST',
  headers: 
   { Accept: '*/*',
     'CloudFront-Forwarded-Proto': 'https',
     'CloudFront-Is-Desktop-Viewer': 'true',
     'CloudFront-Is-Mobile-Viewer': 'false',
     'CloudFront-Is-SmartTV-Viewer': 'false',
     'CloudFront-Is-Tablet-Viewer': 'false',
     'CloudFront-Viewer-Country': 'US',
     'Content-Type': 'application/x-www-form-urlencoded',
     Host: 'zmd4vlv4wc.execute-api.us-east-1.amazonaws.com',
     'User-Agent': 'Paddle',
     Via: '1.1 d3617d950023ee8165fc850d9a6b0b97.cloudfront.net (CloudFront)',
     'X-Amz-Cf-Id': 'cYSSr3F_AYBM_IQJd6b_8M-0y3EOeWl3pPc7Ik5pPniwiWJxZZ8xBw==',
     'X-Amzn-Trace-Id': 'Root=1-5be1f61b-57b34cf2a446720c5c79181c',
     'X-Forwarded-For': '34.237.3.244, 54.182.230.54',
     'X-Forwarded-Port': '443',
     'X-Forwarded-Proto': 'https',
     'X-NewRelic-ID': 'VQEHWFBXCRACVVJVAgcCUFA=',
     'X-NewRelic-Transaction': 'PxQDAlYHClZTVVhQVgEEU1QHFB8EBw8RVU4aVlsIUABWBghYAwADUVEGAUNKQV0EBlJVA1IIFTs=' },
  multiValueHeaders: 
   { Accept: [ '*/*' ],
     'CloudFront-Forwarded-Proto': [ 'https' ],
     'CloudFront-Is-Desktop-Viewer': [ 'true' ],
     'CloudFront-Is-Mobile-Viewer': [ 'false' ],
     'CloudFront-Is-SmartTV-Viewer': [ 'false' ],
     'CloudFront-Is-Tablet-Viewer': [ 'false' ],
     'CloudFront-Viewer-Country': [ 'US' ],
     'Content-Type': [ 'application/x-www-form-urlencoded' ],
     Host: [ 'zmd4vlv4wc.execute-api.us-east-1.amazonaws.com' ],
     'User-Agent': [ 'Paddle' ],
     Via: 
      [ '1.1 d3617d950023ee8165fc850d9a6b0b97.cloudfront.net (CloudFront)' ],
     'X-Amz-Cf-Id': [ 'cYSSr3F_AYBM_IQJd6b_8M-0y3EOeWl3pPc7Ik5pPniwiWJxZZ8xBw==' ],
     'X-Amzn-Trace-Id': [ 'Root=1-5be1f61b-57b34cf2a446720c5c79181c' ],
     'X-Forwarded-For': [ '34.237.3.244, 54.182.230.54' ],
     'X-Forwarded-Port': [ '443' ],
     'X-Forwarded-Proto': [ 'https' ],
     'X-NewRelic-ID': [ 'VQEHWFBXCRACVVJVAgcCUFA=' ],
     'X-NewRelic-Transaction': 
      [ 'PxQDAlYHClZTVVhQVgEEU1QHFB8EBw8RVU4aVlsIUABWBghYAwADUVEGAUNKQV0EBlJVA1IIFTs=' ] },
  queryStringParameters: null,
  multiValueQueryStringParameters: null,
  pathParameters: null,
  stageVariables: null,
  requestContext: 
   { resourceId: 'e8tfva',
     resourcePath: '/paddle',
     httpMethod: 'POST',
     extendedRequestId: 'P9NkTEghoAMFopA=',
     requestTime: '06/Nov/2018:20:14:19 +0000',
     path: '/dev/paddle',
     accountId: '419892788374',
     protocol: 'HTTP/1.1',
     stage: 'dev',
     domainPrefix: 'zmd4vlv4wc',
     requestTimeEpoch: 1541535259563,
     requestId: '8b0de106-e200-11e8-ac58-b1f85a254166',
     identity: 
      { cognitoIdentityPoolId: null,
        accountId: null,
        cognitoIdentityId: null,
        caller: null,
        sourceIp: '34.237.3.244',
        accessKey: null,
        cognitoAuthenticationType: null,
        cognitoAuthenticationProvider: null,
        userArn: null,
        userAgent: 'Paddle',
        user: null },
     domainName: 'zmd4vlv4wc.execute-api.us-east-1.amazonaws.com',
     apiId: 'zmd4vlv4wc' },
  body: 'alert_name=payment_succeeded&balance_currency=GBP&balance_earnings=213.17&balance_fee=86.12&balance_gross=478.22&balance_tax=203.12&checkout_id=3-dd11333fecbcf15-1b3bc0e465&country=AU&coupon=Coupon+0&currency=GBP&customer_name=customer_name&earnings=829.75&email=kuhn.lois%40example.net&event_time=2018-11-06+20%3A14%3A19&fee=0.47&ip=128.97.96.155&marketing_consent=1&order_id=6&passthrough=Example+String&payment_method=card&payment_tax=0.41&product_id=3&product_name=Example+String&quantity=88&receipt_url=https%3A%2F%2Fmy.paddle.com%2Freceipt%2F7%2F5797614b3fcfc4f-f324d9e010&sale_gross=906.3&used_price_override=false&p_signature=gtX4fRr3EgmOYZ%2FGJpq6YYSuVau%2F3bAeV%2FwiAWOZFqc2IWcpmUNJvs5R4vwGXuyAWqkj67L%2B48By7HFjdxnQwUU3WNXv16Tzna2x%2F8UAk5ObiO2A1t3gwt3TVQgmMRQ2Pm83KGj%2BH%2Frq%2BXUXpmDbLlZ5paFuGZ%2FeI0iEuQgSCMpWloF1IS0CTxfwbp1hbX1yPuSbM9W3QqOHQBL%2B%2Bb60LuzhFPq1iX%2BFJBsbVZwk426Txjywhg%2BBn%2FcbH%2F9arU4q6aR8AmEGmmlIFCl%2FpTrZ6jZ0m6ueiGABBBcYSDCPGMSkye3X9DcT%2FX4aw4I4gvkEOBkHuti41ttc8r4WPBWg%2FvdL5QfTeB6WIj9wcnVgueAB0ZpszACye6w8bn83PXzoqsLGyQeEPCN3%2BUbX4P3%2Fyn7W4P0T%2BWrzKCruJaoQaXAhVuFvybRoTarIIni3%2FqkrdixKBdU%2F7qpYomUmDQIADmbQayqePrMLrOMON5TD5aDt%2BRjxJ0YDG9wkUPgbINviuZ4Xe23ge8FREGtiK%2FMeJ57CMsz8yejB%2Bfuw3WrLwIN%2F7t93586OtnMijlo5pRQ%2BX3DtZiaLpgJD6X7jfssu90Nw%2BTZRhZSWAh7pFSG%2FnS4vxG8bOGpljPnQfYWKepTFmtY2Dt6fiFtNKQAaCrkz%2BKjiUlhp%2Fw%2FctHrMLEudlCI%3D',
  isBase64Encoded: false })
}