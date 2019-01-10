const express = require("express");
const nodeMailer = require("nodemailer");
const bodyParser = require("body-parser");
const cors = require("cors");
const next = require("next");
const dev = process.env.NODE_ENV !== 'production';
const PORT = process.env.PORT || 3000;
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare()
.then(() => {
  const server = express();

  server.use(bodyParser.json());
  server.use(cors());

  server.post("/send-email", cors(), function(req, res) {

    let transporter = nodeMailer.createTransport({
      host: 'smtp.gmail.com',
      port: 465,
      secure: true,
      auth: {
          user: 'm.agha46@gmail.com',
          pass: '80pokpok'
      }
  });
    let mailOptions = {
      from: req.body.email, // sender address
      to: "m.agha46@gmail.com",
      subject: "Request from " + req.body.name,
      html: `Name: ${req.body.name} <br /><br />
             Phone number: <a tel:${req.body.phone}>${req.body.phone}</a> <br /><br />
             Email: ${req.body.email} <br /><br />
             Message: ${req.body.items}`
    };
    transporter.sendMail(mailOptions, (error, info) => {
      if (error) {

        res.status(400);
        res.json({ error });
      }
      console.log("Message sent: ");
      res.json({ msg: "You email has been sent" });
    });
  });
  const options = {
    root: __dirname + '/static/',
    headers: {
      'Content-Type': 'text/plain;charset=UTF-8',
    }
  };
  server.get('/robots.txt', (req, res) => (
    res.status(200).sendFile('robots.txt', options)
  ));

  const sitemapOptions = {
    root: __dirname + '/static/',
    headers: {
      'Content-Type': 'text/xml;charset=UTF-8',
    }
  };
server.get('/sitemap.xml', (req, res) => (
  res.status(200).sendFile('sitemap.xml', sitemapOptions)
));

  server.get("*", (req, res) => {
    return handle(req, res);
  });
  server.listen(PORT, (err) => {
    if (err) throw err
    console.log('> It is Ready on http://localhost:3000')
  })
})
.catch((ex) => {
  console.error(ex.stack)
  process.exit(1)
})
