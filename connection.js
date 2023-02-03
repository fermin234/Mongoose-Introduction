const mongoose = require("mongoose");

const uri = "mongodb://127.0.0.1:27017/mywebstore";
// const uri = "mongodb://localhost:{PORT}/{DB_NAME}";

mongoose.set("strictQuery", false);
mongoose.connect(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", (_) => {
  console.log("Database is connected to", uri);
});

mongoose.connection.on("error", (err) => {
  console.log(err);
});
