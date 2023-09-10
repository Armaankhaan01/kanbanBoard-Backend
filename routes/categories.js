// routes/categories.js
const express = require("express");
const Categories = require("../models/Catagories");

const router = express.Router();
// Fetch all categories
router.get("/categories", async (req, res) => {
  try {
    console.log(req.body);
    const categories = await Categories.find();
    res.json(categories);
} catch (error) {
    res.status(500).json({ error: error.message });
}
});

// Fetch a card by its ID
router.get("/categories/:id", async (req, res) => {
    console.log(req.body);
    try {
        const categories = await Card.findById(req.params.id);
        
        if (!categories) {
            return res.status(404).json({ message: "Card not found" });
        }
        
        res.json(card);
    } catch (error) {
        res.status(400).json({ error: error.message });
    }
});

router.post("/categories", async (req, res) => {
    try {
      console.log(req.body);
    const categories = new Categories(req.body);
    const savedCategories = await categories.save();
    res.status(201).json(savedCategories);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});
// // Update a card by its ID
// router.put("/categories/:id", async (req, res) => {
//   try {
//     console.log(req.body);
//     const { id, name, details, category } = req.body;
//     const updatedCard = await Card.findByIdAndUpdate(req.params.id, {

//       id,
//       name,
//       details,
//       category,
//       updatedAt: Date.now(),
//     });

//     if (!updatedCard) {
//       return res.status(404).json({ message: "Card not found" });
//     }

//     res.json(updatedCard);
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

// router.delete("/categories/:id", async (req, res) => {
//   try {
//     const deletedCard = await Card.findByIdAndDelete(req.params.id);

//     if (!deletedCard) {
//       return res.status(404).json({ message: "Card not found" });
//     }

//     res.json({ message: "Card deleted" });
//   } catch (error) {
//     res.status(400).json({ error: error.message });
//   }
// });

module.exports = router;
