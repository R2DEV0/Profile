const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

const app = express();

const port = 8000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
    console.log('We are live on port 8000');
});

app.post('/api/v1', (req,res) => {
    var data = req.body;

var smtpTransport = nodemailer.createTransport({
    service: 'Gmail',
    port: 465,
    auth: {
        user: 'R2Devo@gmail.com',
        pass: 'vhmmwfljplhrtvbb'
    }
});

var mailOptions = {
    from: data.email,
    to: 'r2devo@gmail.com',
    subject: 'Someone is contacting you!',
    html: `<p>${data.name}</p>
            <p>${data.email}</p>
            <p>${data.message}</p>`
};

smtpTransport.sendMail(mailOptions,
    (error, response) => {
        if(error) {
            res.send(error)
        }else {
            res.send('Success')
        }
        smtpTransport.close();
    });
});