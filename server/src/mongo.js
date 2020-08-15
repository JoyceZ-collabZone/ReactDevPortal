const mongoose = require("mongoose"); // not middleware as express.use middleware, not part of express engine
mongoose.connect("mongodb://localhost:27017/Onboarding", {
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
