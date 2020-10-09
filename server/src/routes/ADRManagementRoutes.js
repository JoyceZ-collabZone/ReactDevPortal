const express = require("express");
const ADRMetadataRouterMiddleware = express.Router(); // router level middleware
const ADRMetadataModel = require("../models/ADRMetadata");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const secretKey = "B7F12B3D-0BFA-4CDE-B27C-2F2573ECC2D9"; // GUID





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
