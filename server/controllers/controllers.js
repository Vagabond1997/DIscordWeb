import { ItemModel } from "../database/mydb.js";
import express from "express";
import bodyParser from "body-parser";
import nodemailer from "nodemailer";
const app = express();

app.use(express.json());
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));

// var persons = [
//     {
//         name: 'aman', 
//         address: 'BKT',
//     },
// ]

const defaultController = (req, res) => { res.send("<h1>Hello world from the connection server</h1>") };

// for postman//
// const homeController = (req, res) => {
// console.log(req.body);
// res.json({message: req.body});

// }

//using promises 
// const homeController = async(req, res) => {
//     //getting data 
//     const {firstname, lastname,phone, email,address,message} = req.body;
// // validation checking if user has not forgot to unfill the data
//     if(!firstname || !lastname || !phone || !email || !address || !message) {
//         return res.status(422),json({error:"Please filled the field properly"});
//     }
//     //checking whether user already writing exisitng email or not 
//      ItemModel.findOne({ email: email})
//      .then((userExist) =>{
//         if(userExist) {
//             return res.status(422).json({error: "Email already Exist"});
//         }

//         const Items = new ItemModel({firstname, lastname, email,address,message});

//          Items.save().then(() =>{
//             res.status(201).json({ message: "user registered successfully"});
//          }).catch((err) => res.status(500).json({error: "Failed to registered"}));
     
//         }).catch(err => {console.log(err); });
   

    
// }

const homeController = async(req, res) => {
    console.log('request',req.body);
    //getting data 
    const {firstname, lastname,phone, email,address,message} = req.body;

// validation checking if user has not forgot to unfill the data
    if(!firstname || !lastname || !phone || !email || !address || !message) {
        return res.status(422).json({error:"Please filled the field properly"});
    }
      
    try {
        //checking whether user already writing exisitng email or not 
    // const userExist = await ItemModel.findOne({ email: email});

    // if(userExist) {
    //     return res.status(422).json({error: "Email already Exist"});
    // }
    //  //if user is not existed then 
    // const Items = new ItemModel({firstname, lastname, email,address,message});


    // const userRegister = await Items.save();
    await sendEmail();
    res.status(201).json({message: "user registered successfully"});

    // if(userRegister) {
    //     res.status(201).json({message: "user registered successfully"});
    // } else {
    //     res.status(500).json({error: "Failed to registered"});
    // }

    } catch (err){ 
        console.log(err);

    }

    
   

    
}

const sendEmail = async() => {
    // let testAccount = await nodemailer.createTestAccount();

      // create reusable transporter object using the default SMTP transport
      // to connect with smtp 
    let transport = nodemailer.createTransport({
        host: "smtp.gmail.com",
        port: 465,
        secure: true, // true for 465, false for other ports
        auth: {
        user: "jaman.centrix@gmail.com", // generated ethereal user
        pass: "Discord2020vagabond", // generated ethereal password
        },
    });

    var mailOptions = {
        from: 'manishkoju321@gmail.com',
        to: 'jaman.centrix@gmail.com',
        subject: 'Hello!',
        // html: email_content.content
    };

    transport.sendMail(mailOptions, function (error, info) {
        if (error) {
            console.log(error);
        } else {
            console.log('Message sent: ' + info.message);
            transport.close();
        }
    })
}

export {defaultController,homeController};