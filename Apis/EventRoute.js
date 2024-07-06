const express = require("express");
const router = express.Router();
const Event = require("../Models/Event");

//to show events

router.get("/show", async (req, res) => {
  try {
    let events = await Event.find();
    res.status(200).json({ events });
  } catch (e) {
    res.status(500).render("error", { err: e.message });
  }
});

//to show form to add event
router.post("/addEvent", async (req, res) => {
  let { name, time, prize, maxEnrollment, entryfee } = req.body;
  try {
    await Event.create({ name, time, prize, maxEnrollment, entryfee });
    res.status(200).json({ msg: "success" });
  } catch (e) {
    res.status(404).json({ msg: e });
  }
});

//to edit

router.patch("/update/:id", async (req, res) => {
  try {
    let { id } = req.params;
    let { name, time, prize, maxEnrollment, entryfee } = req.body;
    await Event.findByIdAndUpdate(id, {
      name,
      time,
      prize,
      maxEnrollment,
      entryfee,
    });
    res.status(200).json({ msg: "success" });
  } catch (e) {
    res.status(404).json({ msg: e });
  }
});

//to delete

router.delete("/delete/:id", async (req, res) => {
  let { id } = req.params;
  try {
    await Event.findByIdAndDelete(id);
    res.status(200).json({ msg: "success" });
  } catch (e) {
    res.status(404).json({ msg: e });
  }
});

module.exports = router;
