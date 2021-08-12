import { createTransport } from "nodemailer";
/**
 *
 * @param Subject
 * @param message
 * @param emails
 *
 */
const sendEmail = async (subject: string, message: string, emails: string[]) => {
  const transport = createTransport({
    service: "gmail",
    auth: {
      user: "mohammed.f.f.h1998@gmail.com",
      pass: "m0hamm3d.f.f.h1998",
    },
  });
  const mailOptions = {
    from: "mohammed.f.f.h1998@gmail.com", // sender address
    to: emails, // list of receivers
    subject: subject, // Subject line
    html: "<p>" + message + "</p>", // plain text body
  };
  transport.sendMail(mailOptions, function (err, info) {
    if (err) console.log(err);
    else console.log(info);
  });
};
export { sendEmail };
