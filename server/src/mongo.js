const mongoose = require("mongoose"); // not middleware as express.use middleware, not part of express engine

const mongoUri =
  process.env.MONGODB_URI ||
  "mongodb://localhost/Onboarding" ||
  `mongodb://${process.env.USER_NAME}:${process.env.SECRET}@localhost:27888/?authSource=admin` ||
  console.log("logging env", process.env);
mongoose.connect(mongoUri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});
const mongoDatabase = mongoose.connection;
mongoDatabase.on(
  "error",
  console.error.bind(console, "mongo database connection error")
);
mongoDatabase.once("open", function () {
  console.log("Mongoose database is connected to ", mongoUri);
});

// 0.0.0.0:27017-27019->27017-27019/tcp   developerPortal
