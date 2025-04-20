const path = require("path");
require("dotenv").config({ path: path.resolve(__dirname, "Server", ".env") });
const authRoutes = require("./Server/routes/authRoutes");

const express = require("express");
const mongoose = require("mongoose");
const session = require("express-session");
const passport = require("passport");
const cors = require("cors");
const MongoStore = require("connect-mongo")

const app = express();

app.use(
  cors({
    origin: "https://upskill-learn.vercel.app",
    credentials: true,
  })
);
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(
  session({
    secret: process.env.SESSION_SECRET || "default_secret_key",
    resave: false,
    saveUninitialized: false,
    store:MongoStore.create({mongoUrl:process.env.MONGO_URI}),
    cookie: {
      secure: true,
      sameSite: "none",
      httpOnly:true,
      maxAge: 24 * 60 * 60 * 1000,
    },
  })
);

app.set("trust proxy",1);

mongoose
  .connect(process.env.MONGO_URI, { bufferCommands: true })
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.error(err));

require("./Server/config/passportConfig");

app.use(passport.initialize());
app.use(passport.session());

app.use("/auth", authRoutes);

app.get("/debug", (req, res) => {
  res.json({
    connected: mongoose.connection.readyState === 1,
    session: req.session,
    user: req.user,
    cookie: req.headers.cookie,
  });
});

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(
    `Server running on port ${PORT}\nLink: http://localhost:${PORT}/`
  );
});
