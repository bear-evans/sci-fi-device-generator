import * as express from "express";

const router = express.Router();

const deviceRoutes = require("./devicesRoutes");

router.use("/devices", deviceRoutes);

module.exports = router;
