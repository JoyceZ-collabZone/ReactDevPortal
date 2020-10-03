const mongoose = require("mongoose"); // not middleware as express.use middleware, not part of express engine

const mongoUri =
  process.env.MONGODB_URI ||
  "mongodb://jz:secret@localhost:27888/?authSource=admin"; // use either connection
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
  console.log("Mongoose database is connected");
});

// 0.0.0.0:27017-27019->27017-27019/tcp   developerPortal
