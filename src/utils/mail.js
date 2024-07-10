const nodemailer = require("nodemailer");
let configOptions = {
  host: process.env.MAIL_HOST,
  port: process.env.MAIL_HOST,
  secure: false,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASS,
  },
};

const transporter = nodemailer.createTransport(configOptions);

async function sendMail(to, code) {
  const info = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject: "Hello ✔",
    text: `Tasdiqlash kodi ${code}`,
    html: `Tasdiqlash kodi <b>${code}?</b>`,
  });
}

module.exports = sendMail;
