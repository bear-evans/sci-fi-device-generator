import * as express from "express";
const router = express.Router();

// get all possible words
router.get("/", async (req, res) => {
  res.send("Device API GET");
});

module.exports = router;
