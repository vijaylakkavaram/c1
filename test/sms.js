/* var springedge = require('springedge');

var params = {
  'apikey': '670e0613', // API Key 
  'sender': 'vijay', // Sender Name 
  'to': [
    '918247640051'  //Moblie Number 
  ],
  'message': 'Hello from Nexmo'
};

springedge.messages.send(params, 5000, function (err, response) {
  if (err) {
    return console.log(err);
  }
  console.log(response);
}); 
 */
const Nexmo = require('nexmo')

const nexmo = new Nexmo({
  apiKey: '670e0613',
  apiSecret: 'nJGZULv7nLtWdbwJ'
})
const from = 'vijay kumar'
const to = 918142060192
const text = 'HI VIJAY'

nexmo.message.sendSms(from, to, text)
/* 
curl -X POST  https://rest.nexmo.com/sms/json \
-d api_key=670e0613 \
-d api_secret=nJGZULv7nLtWdbwJ \
-d to=918247640051 \
-d from="NEXMO" \
-d text="Hello from Nexmo" */