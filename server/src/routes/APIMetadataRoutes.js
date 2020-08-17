const express = require("express");
const apiRouterMiddleware = express.Router(); // router level middleware
const apimetadatamodel = require("../models/APIMetadata");

apiRouterMiddleware.get("/", async (request, response) => {
  const apiResponseDocs = await apimetadatamodel.find({});
  response.send(apiResponseDocs);
  console.log(apiResponseDocs);
});

apiRouterMiddleware.get("/:id", async (request, response) => {
  console.log("logging api id ", request.params.id);
  const oneapiResponseDoc = await apimetadatamodel.findOne({
    _id: request.params.id,
  });
  response.send(oneapiResponseDoc);
  console.log(oneapiResponseDoc);
});

apiRouterMiddleware.post("/new", async (request, response) => {
  try {
    // model.create, document to insert
    const createAPIMetadataInMongo = await apimetadatamodel.create(
      request.body
    );
    console.log("logging request body ", request.body);
    createAPIMetadataInMongo.save(); // loop and save
    response.status(200).send({
      message: `user "${request.body.name}" created successfully`,
    });
  } catch (error) {
    console.log("catch error for user creation route ", error);
    response.status(500).send("user creation failed");
  }
});
module.exports = apiRouterMiddleware;
