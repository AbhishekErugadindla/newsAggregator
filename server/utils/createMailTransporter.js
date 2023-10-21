const nodemailer = require("nodemailer");
const smtpTransport = require("nodemailer-smtp-transport");

const createMailTransporter = () => {
  const transporter = nodemailer.createTransport(
    smtpTransport({
      service: "gmail",
      auth: {
        user: "abhishekerugadindla@gmail.com", // Replace with your email
        pass: "abhierugadindla", // Replace with your email password
      },
    })
  );
  return transporter;
};


