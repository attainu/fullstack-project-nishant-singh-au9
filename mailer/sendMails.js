const nodemailer = require("nodemailer");

let transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "bankbergfinance@gmail.com",
    pass: "capstone@project",
  },
});


//


//  register mail
const RegisterMail = (email, account) => {
  let mailOptions = {
    from: "bankbergfinance@gmail.com",
    to: email,
    subject: "Welcome you are registered",
    text: `Hi, welcome to Bank Berg Finance, We are happy to see you on board your and account number is ${account}`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log("error", err);
    console.log("mail sent!");
  });
};

// login mail
const LoginMail = (email) => {
  let mailOptions = {
    from: "bankbergfinance@gmail.com",
    to: email,
    subject: "Login Notification",
    text: "We have noticed a login from your account",
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log("error", err);
    console.log("mail sent!");
  });
};

//add addmoney mail
const AddMoneyMail = (email, amount, curBalance) => {
  let mailOptions = {
    from: "bankbergfinance@gmail.com",
    to: email,
    subject: "Add Money Successfull",
    text: `Dear User you have successfully added Rs ${amount} in your account and you current balance is Rs ${curBalance}.`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log("error", err);
    console.log("mail sent!");
  });
}


//money transfer mail
const MoneyTransferMail = (email, amount, curBalance, toAccount, ) => {
  let mailOptions = {
    from: "bankbergfinance@gmail.com",
    to: email,
    subject: "Money Transfer Successfull",
    text: `Dear User you have successfully transferred Rs ${amount} to xxxx${toAccount} and you current balance is Rs ${curBalance}.`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log("error", err);
    console.log("mail sent!");
  });
}

const MoneyReceivedMail = (email, amount, curBalance, fromAccount, ) => {
  let mailOptions = {
    from: "bankbergfinance@gmail.com",
    to: email,
    subject: "Money Received Successfully",
    text: `Dear User you have successfully received Rs ${amount} from xxxx${fromAccount} and you current balance is Rs ${curBalance}.`,
  };

  transporter.sendMail(mailOptions, (err, data) => {
    if (err) console.log("error", err);
    console.log("mail sent!");
  });
}

module.exports = {RegisterMail, LoginMail, AddMoneyMail, MoneyTransferMail, MoneyReceivedMail}

