import * as express from "express";
const router = express.Router();

// Import our word libraries
const getNoun = require("../../lib/nouns");
const getAdjective = require("../../lib/adjectives");
const getMaterial = require("../../lib/materials");
const getPrompt = require("../../lib/prompts");

// route for getting a new device
router.get("/", async (req, res) => {
  let device = getAdjective() + " " + getMaterial() + " " + getNoun();
  let prompt = getPrompt();

  let result = {
    prompt: prompt,
    device: device,
  };
  res.status(200).json(result);
});

// ====================================
// Generator Functions
// ====================================
module.exports = router;
