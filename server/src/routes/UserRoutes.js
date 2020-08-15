const express = require("express");
const userRouterMiddleware = express.Router(); // router level middleware
const UserModel = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = "B7F12B3D-0BFA-4CDE-B27C-2F2573ECC2D9"; // GUID

userRouterMiddleware.post("/new", async (request, response) => {
  const password = request.body.password;
  const hashedPassword = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
  request.body.password = hashedPassword;
  try {
    // model.create, document to insert
    const createdUserDocInMongo = await UserModel.create(request.body);
    console.log("logging request body ", request.body);
    createdUserDocInMongo.save(); // loop and save
    response.status(200).send({
      message: `User "${request.body.username}" has been created successfully`,
    });
  } catch (error) {
    console.log("catch error for user creation route ", error);
    response.status(500).send("Sorry, user creation has failed");
  }
});
// post login endpoint

userRouterMiddleware.post("/login", async (request, response) => {
  try {
    const returnedUserDocFromUserModel = await UserModel.findOne({
      username: request.body.username,
      profile: request.body.profile,
    });

    let status = 400;
    let message = "user failed to log in, please try again";

    if (
      returnedUserDocFromUserModel &&
      (await bcrypt.compare(
        request.body.password,
        returnedUserDocFromUserModel.password
      ))
    ) {
      // create a signed jwt for the user, if both user name and password correct
      const loggedInUserInfo = {
        id: returnedUserDocFromUserModel._id,
        user: returnedUserDocFromUserModel.username,
      };

      const options = {
        algorithm: "HS256",
        expiresIn: "7d",
        audience: "myDeveloperPortal",
        issuer: "nodeJSLibrary",
        subject: loggedInUserInfo.user,
      };

      jwt.sign(loggedInUserInfo, secretKey, options, (error, token) => {
        response.set("Login-Response-Token-Header", token);
        status = 200;
        message = "login is successful";
        response.status(status).send(`${message}`);
      });
    } else {
      request.session.message = "User sign in info incorrect";
      // response.redirect("/");

      response.status(status).send(`${message}`);
    }
  } catch (error) {
    console.log("catch error for user login route ", error);
    response.status(500).send(`user login failed`);
  }
});

// get logout endpoint
userRouterMiddleware.get("/logout", (request, response) => {
  console.log("logging out ", request.session.sessionUser);
  request.session.destroy(() => {
    response.send("user has logged out");
  });
});

// get routes
// userRouterMiddleware.get("/", async (request, response) => {
//   const AllUserResponseDocs = await UserModel.find({}).populate("profile");
//   response.send(AllUserResponseDocs);
// });

userRouterMiddleware.get("/", async (request, response) => {
  try {
    const UserResponseDoc = await UserModel.find({});
    response.json(UserResponseDoc);
  } catch {
    response.status(400).send("bad request");
  }
});
userRouterMiddleware.get("/:id", async (request, response) => {
  const oneUserResponseDoc = await UserModel.findOne({
    _id: request.params.id,
  }).populate();
  response.send(oneUserResponseDoc);
});

// add Profile to User, removed this functionality

// userRouterMiddleware.post("/addNewProfile", async (request, response) => {
//   try {
//     const userDoc = await UserModel.findOne({
//       _id: request.body.UserId,
//     });
//     console.log(
//       `logging user document as per "userId" ${request.body.UserId} in ${userDoc}`
//     );

//     const profileDoc = await profileModel.findOne({
//       _id: request.body.ProfileId,
//     });

//     console.log(
//       `logging profiledoc as per "profileId" ${request.body.ProfileId} in ${profileDoc}`
//     );

//     if (!userDoc || !profileDoc) {
//       response.status(400).send("bad request for adding profile to user");
//     } else {
//       userDoc.profile.push(profileDoc); //add profile to user item array
//       const updatedUserDocwithProfile = await userDoc.save(); //save to datase
//       response.json(updatedUserDocwithProfile);
//       console.log(updatedUserDocwithProfile);
//     }
//   } catch {
//     response.status(400).send("bad request");
//   }
// });

module.exports = userRouterMiddleware;
