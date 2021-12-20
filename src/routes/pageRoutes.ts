import * as express from "express";
import * as path from "path";
const router = express.Router();

router.get("/", (req, res) => {
  try {
    res.sendFile(path.join(__dirname, "../public", "index.html"));
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
