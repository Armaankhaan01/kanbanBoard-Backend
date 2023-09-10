// routes/cards.js
const express = require("express");
const Card = require("../models/Card");

const router = express.Router();
// Fetch all cards
router.get("/cards", async (req, res) => {
  try {
    const cards = await Card.find();
    res.json(cards);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Fetch a card by its ID
router.get("/cards/:id", async (req, res) => {
  try {
    const card = await Card.findById(req.params.id);

    if (!card) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.json(card);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.post("/cards", async (req, res) => {
  try {
    const card = new Card(req.body);
    const savedCard = await card.save();
    res.status(201).json(savedCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Update a card by its ID
router.put("/cards/:id", async (req, res) => {
  try {
    console.log(req.body);
    const { id, name, details, category } = req.body;
    const updatedCard = await Card.findByIdAndUpdate(req.params.id, {
      id,
      name,
      details,
      category,
      updatedAt: Date.now(),
    });

    if (!updatedCard) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.json(updatedCard);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

router.delete("/cards/:id", async (req, res) => {
  try {
    const deletedCard = await Card.findByIdAndDelete(req.params.id);

    if (!deletedCard) {
      return res.status(404).json({ message: "Card not found" });
    }

    res.json({ message: "Card deleted" });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

module.exports = router;
