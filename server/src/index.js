// dependencies
const expressAppMiddleware = require("express"); // application level middleware, express is routing and middleware web framework, an express application is series of middleware function calls
const sessionMiddleware = require("express-session");
//

require("./mongo"); // database connection and settings

// variables

const portNumber = 9000;

// setup
const appWebServer = expressAppMiddleware();

appWebServer.use(expressAppMiddleware.static("../public"));

// routes import from routes

// step 3
const userRouter = require("./routes/UserRoutes");
const ADRManagementRouter = require("./routes/ADRManagementRoutes");
const apiRouter = require("./routes/APIMetadataRoutes");

// middleware
appWebServer.use(expressAppMiddleware.json()); // build in express middleware, pass incoming request with JSON payload, json is function here (very important)
appWebServer.use(
  sessionMiddleware({
    secret: "developer portal", //a random string do not copy this value or your stuff will get hacked
    resave: false,
    saveUninitialized: false,
  })
);

// router endpoints in web server
//step 2
appWebServer.use("/user", userRouter);
appWebServer.use("/ADRMetadata", ADRManagementRouter);
// appWebServer.use("/profile", profileRouter);
appWebServer.use("/apimetadata", apiRouter);
// appWebServer.use("/user", SoftwareProductRouter);
// start web server backend, step 1
appWebServer.listen(portNumber, () => {
  console.log(`My web server is listening at http://localhost:${portNumber}`);
});
