const express = require("express");
const router = express.Router();
const Donor = require("../models/Donor");

// @route POST /api/donors
// @desc Register a new donor
router.post("/donors", async (req, res) => {
  const { name, bloodGroup, contact } = req.body;

  try {
    const newDonor = new Donor({
      name,
      bloodGroup,
      contact,
    });

    const savedDonor = await newDonor.save();
    res.status(201).json(savedDonor);
  } catch (error) {
    res.status(500).json({ message: "Error registering donor", error });
  }
});

// @route GET /api/donors
// @desc Get all donors
router.get("/donors", async (req, res) => {
  try {
    const donors = await Donor.find();
    res.status(200).json(donors);
  } catch (error) {
    res.status(500).json({ message: "Error fetching donors", error });
  }
});

module.exports = router;
