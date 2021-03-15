const express = require("express");
const router = express.Router();
const jwt = require("jsonwebtoken");
const keys = require("../../config/keys");
const User = require("../../models/User");
const bcrypt = require("bcryptjs");
const {AddMoneyMail, MoneyTransferMail, MoneyReceivedMail} = require('../../mailer/sendMails')

//load transaction model
const Transactions = require('../../models/Transaction')

router.get('/transactionhealth', (req, res) => {
    return res.send('transaction route is working')
})

router.post('/addMoney', (req, res) => {
    let token = req.headers['x-access-token']
    if(!token) return res.status(500).send({auth : false,error : "No token provided"})
    jwt.verify(token,keys.secretOrKey, (err, data) => {
        if(err) return res.status(500).send({auth : false,error : "Invalid Token"})
        User.findById(data.id, { password: 0, date: 0, _id: 0 }, (err, result) => {
            User.updateOne({_id : data.id}, {balance:  result.balance + req.body.amount}, (err, updatedbalance) => {
                if (err) throw err
                let trans = {
                    email: result.email,
                    amount: req.body.amount,
                    type: 'CR',
                    curBalance : result.balance + req.body.amount,
                    about: 'Add Money'
                }
                Transactions.create(trans,(err, transaction) => {
                    AddMoneyMail(trans.email, trans.amount, trans.curBalance)
                    return res.send({message: `Rs ${req.body.amount} successfully added to your account`})
                })
            })
        })
    })
})

//sendMoney to same bank:
router.post('/sendmoney', (req, res) => {
    let token = req.headers['x-access-token']
    if(!token) return res.status(500).send({auth : false,error : "No token provided"})
    jwt.verify(token,keys.secretOrKey, (err, data) => {
        if(err) return res.status(500).send({auth : false,error : "Invalid Token"})
        User.findById(data.id, { password: 0, date: 0, _id: 0 }, (err, result) => {
            if(err){ console.log(err)
            return res.send(err)}
            if(bcrypt.compareSync(req.body.transactionPassword, result.transactionPassword)){
                if(req.body.amount > 0){
                    if(result.balance >= req.body.amount){
                        User.findOne({account: req.body.account}, (err, recepient) => {
                            if(! recepient){return res.send({error: 'Invalid Recepient'})}
                            else{
                                User.updateOne({_id : data.id}, {balance:  result.balance - req.body.amount}, (err, updatedbalance) => {
                                    if (err) throw err
                                    let trans = {
                                        email: result.email,
                                        amount: req.body.amount,
                                        type: 'DR',
                                        curBalance : result.balance - req.body.amount,
                                        about: 'Money Transfer'
                                    }
                                    Transactions.create(trans,(err, transaction) => {
                                        if (err) throw err
                                        User.updateOne({account: req.body.account}, {balance : recepient.balance + req.body.amount}, (err, updatedbenificiary) => {
                                            if(err) throw err
                                            let benf = {
                                                email: recepient.email,
                                                amount: req.body.amount,
                                                type: 'DR',
                                                curBalance : recepient.balance + req.body.amount,
                                                about: 'Money Received'
                                            }
                                            Transactions.create(benf, (err, received) => {
                                                if(err) throw err
                                                MoneyTransferMail(trans.email, trans.amount, trans.curBalance, toAccount= req.body.account.slice(-4))
                                                MoneyReceivedMail(benf.email, benf.amount, benf.curBalance, fromAccount= result.account.slice(-4))
                                                return res.send({message: `Rs ${req.body.amount} successfully transferred`})
                                            })
                                        })
                                    })
                                })  
                            }
                        })
                     }else{
                         res.send({error: 'Insufficient Balance'})
                     }
                }else{
                    return res.send({error: 'Invalid Amount'})
                }
            }else{
                return res.send({ error : 'Incorrect Transaction Password'})
            }
        })
    })
})













//             User.updateOne({_id : data.id}, {balance:  result.balance - req.body.amount}, (err, updatedbalance) => {
//                 if (err) throw err
//                 let trans = {
//                     email: result.email,
//                     amount: req.body.amount,
//                     type: 'DR',
//                     curBalance : result.balance - req.body.amount,
//                     about: 'Money Transfer'
//                 }
//                 Transactions.create(trans,(err, transaction) => {
//                         User.findOne({account: req.body.account}, (err, recepient) => {
//                             if(! recepient){return res.send({error: 'Invalid Recepient'})}
//                             else{
//                                 User.updateOne({account: req.body.account}, {balance : recepient.balance + req.body.amount}, (err, updatedbenificiary) => {
//                                     if(err) throw err
//                                     let benf = {
//                                         email: recepient.email,
//                                         amount: req.body.amount,
//                                         type: 'DR',
//                                         curBalance : recepient.balance + req.body.amount,
//                                         about: 'Money Received'
//                                     }

//                                     Transactions.create(benf, (err, received) => {
//                                         if(err) throw err
//                                         MoneyTransferMail(trans.email, trans.amount, trans.curBalance, toAccount= req.body.account.slice(-4))
//                                         MoneyReceivedMail(benf.email, benf.amount, benf.curBalance, fromAccount= result.account.slice(-4))
//                                         return res.send({message: `Rs ${req.body.amount} successfully transferred`})
//                                     })
//                                 })
//                             }
//                         })
//                 })
//             })
//         })
//     })
// })




// router.post('/addMoney', (req, res) => {
//     let token = req.headers['x-access-token']
//     if(!token) return res.status(500).send({auth : false,error : "No token provided"})
//     jwt.verify(token,keys.secretOrKey, (err, data) => {
//         if(err) return res.status(500).send({auth : false,error : "Invalid Token"})
//         User.findById(data.id, { password: 0, date: 0, _id: 0 }, (err, result) => {
//             User.updateOne({_id : data.id}, {balance:  result.balance + req.body.amount}, (err, updatedbalance) => {
//                 if (err) throw err
//                 let trans = {
//                     email: result.email,
//                     amount: req.body.amount,
//                     type: 'CR',
//                     curBalance : result.balance + req.body.amount,
//                     about: 'Add Money'
//                 }
//                 Transactions.create(trans,(err, transaction) => {
//                     AddMoneyMail(trans.email, trans.amount, trans.curBalance)
//                     return res.send({message: `Rs ${req.body.amount} successfully added to your account`})
//                 })
//             })
//         })
//     })
// })

module.exports=router