const express = require("express");
const router = express.Router();
const useragent = require("express-useragent");
const Visitor = require("../models/Visitor");

router.use(useragent.express());

router.post("/", async (req, res) => {
  try {
    const source = req.useragent;

    const visitor = new Visitor({
      browser: source.browser,
      os: source.os,
      platform: source.platform,
    });

    await visitor.save();

    res.status(201).json({
      success: true,
    });
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
});
router.get("/", async (req, res) => {
  try {
    const visitors = await Visitor.find().sort({
      visitedAt: -1,
    });

    res.status(200).json(visitors);
  } catch (error) {
    res.status(500).json({
      success: false,
    });
  }
});

module.exports = router;
