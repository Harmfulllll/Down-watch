import nodeMailer from "nodemailer";
import mailFormat from "./emailFormat.js";

async function sendMail(user, details, message) {
  let transporter = nodeMailer.createTransport({
    service: "gmail",
    auth: {
      user: process.env.MAIL_ACCOUNT,
      pass: process.env.MAIL_PASSWORD,
    },
  });

  const body = mailFormat(details, message);
  let mailInfo = transporter.sendMail({
    from: process.env.MAIL_ACCOUNT,
    to: user,
    subject: "Site Status",
    html: body,
  });
}
export default sendMail;
