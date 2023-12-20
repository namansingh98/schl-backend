const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();
const cors = require("cors");
const app = express();
const PORT = process.env.PORT || 4001;
const router = require("././Routes/router");
require("./db/conn");

app.use(cors());
app.use(express.json());
app.use(router);

const Contactmailer = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: process.env.EMAIL_ADDRESS,
    pass: process.env.EMAIL_PASS,
  },
});

app.post("/api/contact", (req, res) => {
  const name = req.body.firstName + req.body.lastName;
  const email = req.body.email;
  const phone = req.body.phone;
  const message = req.body.message;
  const Mail = {
    from: name,
    to: process.env.EMAIL_ADDRESS,
    subject: "Query Submission Form : Admission Regarding",
    html: `<p> Name : ${name}</p>
     <p> Email : ${email}</p>
      <p> Phone : ${phone}</p>
     <p> Message : ${message}</p>
     `,
  };

  Contactmailer.sendMail(Mail, (error) => {
    if (error) {
      res.json({ error: error });
      console.log(error);
    } else {
      res.json({ status: 200, message: "Send" });
      console.log("Message Send");
    }
  });
});

app.listen(PORT, () => {
  console.log(`this is Backed Server is Running on PORT ${PORT}`);
});
