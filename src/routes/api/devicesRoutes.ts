import * as express from "express";
const router = express.Router();

// Import our word libraries
const getNoun = require("../../lib/nouns");
const getAdjective = require("../../lib/adjectives");
const getMaterial = require("../../lib/materials");
const getPrompt = require("../../lib/prompts");

// set up route for getting a new device
router.get("/", async (req, res) => {
  let device = getAdjective() + " " + getMaterial() + " " + getNoun();
  let prompt = getPrompt();

  let tempResult = {
    prompt: prompt,
    device: device,
  };
  res.status(200).json(tempResult);
});

// ====================================
// Generator Functions
// ====================================
module.exports = router;
