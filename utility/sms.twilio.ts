const twilioSms = async (body: string, to: string) => {
  const accountSid = "AC67998f2e673528dc57f7d3a620b2bce7";
  const authToken = "68b15a426c3030d0a6db6f26e63fccc1";
  const client = require("twilio")(accountSid, authToken);

  client.messages
    .create({
      body: body,
      to: to,
      from: "+12566732568",
    })
    .then((message) => console.log(`sms send 💌  messageSid : ${message.sid}`))
    .done();
};
export default twilioSms;
