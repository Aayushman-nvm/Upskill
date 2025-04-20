const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "Server", ".env") });
const authRoutes = require("./Server/routes/authRoutes");

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");

require("./Server/config/passportConfig");

const app = express();

app.use(
  cors({
    origin: "https://upskill-learn.vercel.app/",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret_key",
    resave: false,
    saveUninitialized: true,
    cookie: {
      secure: process.env.NODE_ENV === "production",
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.use(passport.initialize());
app.use(passport.session());

mongoose.set("bufferCommands",false);
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

app.use("/auth", authRoutes);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}\nLink: http://localhost:${PORT}/`
  );
});
