const express = require("express");
const passport = require("passport");
const router = express.Router();
const cors = require("cors");
const FrontendURL = process.env.FRONT_END_URL;

router.get(
  "/github",
  passport.authenticate("github", { scope: ["user:email"] })
);

router.get(
  "/github/callback",
  passport.authenticate("github", { failureRedirect: `${FrontendURL}` }),
  (req, res) => res.redirect(`${FrontendURL}study`)
);

router.get("/logout", (req, res, next) => {
  req.logout((err) => {
    if (err) return next(err);
    res.redirect(`${FrontendURL}login`);
  });
});

router.get("/check-auth", (req, res) => {
  console.log("SESSION:", req.session);
  console.log("USER:", req.user);
  if (req.isAuthenticated()) {
    res.status(200).json({ isAuthenticated: true, user: req.user });
  } else {
    res.status(401).json({ isAuthenticated: false });
  }
});

module.exports = router;
