const express = require("express");
const ADRMetadataRouterMiddleware = express.Router(); // router level middleware
const ADRMetadataModel = require("../models/ADRMetadata");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = "B7F12B3D-0BFA-4CDE-B27C-2F2573ECC2D9"; // GUID

// post new user endpoint
//step 4, await and .then cannot coexist, response send once only

// authN route middleware to verify if JWT exist
// ADRMetadataRouterMiddleware.use((request, response, next) => {
//   // const token = request.get("Token-Request-Header");
//   const token =
//     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVmMjQ4MDM3NTFlYWZlMGEwYzMwOGM5OSIsInVzZXIiOiJQaGlsIiwiaWF0IjoxNTk2MjMxNTA2LCJleHAiOjE1OTY4MzYzMDYsImF1ZCI6Im15RGV2ZWxvcGVyUG9ydGFsIiwiaXNzIjoibm9kZUpTTGlicmFyeSIsInN1YiI6IlBoaWwifQ.3NMoXJYb4puk-xq_79rXCK0_fUXYm8fbKy8Jiyz3WBc";

//   jwt.verify(token, secretKey, { algorithms: ["HS256"] }, (err, decode) => {
//     if (!err) {
//       request.userObject = decode; //store user info on request object
//       console.log("logging decoded token", decode);
//       next(); //middleware complete, move to next endpoint
//     } else {
//       response.status(401).send("please login with valid credentials");
//     }
//   });
// });

// routes
ADRMetadataRouterMiddleware.post("/new", async (request, response) => {
  try {
    const createdADRMetadataDocInMongo = await ADRMetadataModel.create(
      request.body
    );
    console.log("logging request", createdADRMetadataDocInMongo);

    response.status(200).send({
      message: `ADR "${request.body.username}" created successfully`,
    });
  } catch (error) {
    console.log("catch error for ADR creation route ", error);
    response.status(500).send("ADR creation failed");
  }
});

// update route
ADRMetadataRouterMiddleware.patch("/update/:id", async (request, response) => {
  try {
    const findUniqueADRMetadataDoc = await ADRMetadataModel.findByIdAndUpdate(
      request.params.id,
      request.body,
      {
        new: true,
      }
    );
    response.json(findUniqueADRMetadataDoc);
  } catch {
    response.status(400).send("bad request");
  }
});

// delete route
ADRMetadataRouterMiddleware.delete("/delete/:id", async (request, response) => {
  try {
    const deleteUniqueADRMetadataDoc = await ADRMetadataModel.findByIdAndDelete(
      request.params.id
    );
    response.json(deleteUniqueADRMetadataDoc);
  } catch {
    response.status(400).send("bad request");
  }
});

//get route
ADRMetadataRouterMiddleware.get("/", async (request, response) => {
  try {
    const ADRResponseDoc = await ADRMetadataModel.find({});
    response.json(ADRResponseDoc);
  } catch {
    response.status(400).send("bad request");
  }
});

ADRMetadataRouterMiddleware.get("/:id", async (request, response) => {
  const oneADRResponseDoc = await ADRMetadataModel.findOne({
    _id: request.params.id,
  });
  response.send(oneADRResponseDoc);
});
module.exports = ADRMetadataRouterMiddleware;
