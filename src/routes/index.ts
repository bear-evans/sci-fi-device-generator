import * as express from "express";

const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.send("It worked!");
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
