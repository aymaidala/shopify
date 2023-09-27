// console.log("my first script code");
// let name = "buttons";
// console.log("i have", name);
// name = 123;
// console.log("i have", name);

// const navTag = document.getElementsByTagName("nav");
// console.log(navTag);
// const signupbutton = document.querySelector(".start-button1");
// console.log(signupbutton);

// function callBackFunction (){  // we declare the function "callBackFunction" here
//     console.log("123")
//     return 456
// }




// signupbutton.addEventListener("click", callBackFunction);
// callBackFunction() // we called or executed or invoked the function //



function average( a, b, c) {
    let sum = a + b + c
    return sum/3
    
}
// average( 2, 4, 6)
console.log("average value is", average( "2", 4, 6))

const  pythagorean = (x, y, z) => {
    return Math.sqrt((x*x) + (y*y) + (z*z))
  }
  console.log ("pythagorean value is",Math.ceil(pythagorean( 3, 4, 5)))




//   registerUser = async (req, res) => {
//     let emailTrim = req.body.email.trim();
//     req.body = { ...req.body, email: emailTrim };
//     let { gen_id, username, first_name, last_name, email, password } =
//       req.body;

//     // check that email does not already exists
//     const verifyEmail = await usersModel.verifyEmail(req.body.email);
//     if (verifyEmail.length > 0) {
//       return res.status(422).json({ message: "Unable to register user" });
//     }

//     const encryptPasswordSalt = await bcrypt.genSalt(10);
//     req.body.password = await bcrypt.hash(password, encryptPasswordSalt);

//     const registerUser = await usersModel.regsiterNewUser_Model(req.body);
//     console.log("registered user value is", registerUser)
//     if (registerUser.length < 1) {
//       return res.status(406).json({ message: "Unable to register user" });
//     }
    

//     const pnUserConfirmEmailID = `pnu_${gen_id}`
//     const userUUID = uuidv4().split("-").join("")
//     const q = uuidv4().split("-").join("")
//     const c = uuidv4().split("-").join("")
    
//     // enter coonfirmation details to db
//     const enterEmailConfirmDetails = await usersModel.enterUserEmailConfirmDetails(pnUserConfirmEmailID, userUUID, q, c)
//     console.log("enter email value is", enterEmailConfirmDetails)
//     if (enterEmailConfirmDetails.length < 1) {
//       return res.status(406).json({ message: "Unable to register user" });
//     }

//     // send confirmation email to new user
//     // remoteok.com/login?login_by_email_token=da9e960a414028df7c414da041fabd61
//     let mailOptions = {
//       from: MAIL_EMAIL,
//       to: email,
//       subject: "Password Reset Link",
//       html: `<p>
//               <b>Click on the link below to be redirected to create a new password</b>
//             </p> 
//             <p><a href="http://locahost:4201/retrieve_password"></a></p>
//             <br/>
//             <br/>
            
//             <p>Warm Reagrds,</p>
//             <h3>Cafe Management Team</h3>
//             `,
//     };
//     // transporter.sendMail(mailOptions, function (err, info) {
//     //   if (err) {
//     //     console.log(
//     //       "An error occurred when attempting to send out an email",
//     //       err
//     //     );
//     //     return res.status(500).json({
//     //       message: "An error occurred when attempting to send out an email",
//     //     });
//     //   }

//     res
//       .status(200)
//       .json({ message: "User successfully registered", registerUser });
//   };
