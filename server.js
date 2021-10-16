const express = require("express");
const mongoose = require("mongoose");
const config = require("config");
/* const path = require("path"); */
const app = express();


app.use(express.json());

//db config
const db = config.get("mongoURI");

//Connect to mongo
mongoose
  .connect(db, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected.."))
  .catch((err) => console.log(err));

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Started at ${port}`));

// use Routes
const reclams = require("./routes/api/reclamation");
app.use("/api/reclams", reclams);
app.use("/api/actuals", require("./routes/api/actuals"));

const users = require("./routes/api/users");
app.use("/api/users", users);

app.use("/api/auth", require("./routes/api/auth"));

app.use("/api/Demande", require("./routes/api/Demande"));
//Admin
app.use("/api/admin", require("./routes/api/admin"));
app.use("/api/aauth", require("./routes/api/AdminAuth"));
