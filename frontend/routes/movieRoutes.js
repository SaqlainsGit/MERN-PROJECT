const router = require("express").Router();
const Movie = require("../models/Movie");
const auth = require("../middleware/authMiddleware");
const admin = require("../middleware/roleMiddleware");


router.get("/", async (req,res) => {
    const movies = await Movie.find();
    res.json(movies);
})

router.get("/search", async (req, res) => {
  const q = req.query.q;
  if(!q || q.trim() ===""){
    return res.json([])
  }
  const movies = await Movie.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { description: { $regex: q, $options: "i" } }
    ]
  });
  res.json(movies);
});


router.get("/sorted", async (req, res) => {
  const field = req.query.by;

  const allowedFields = ["rating","year", "duration"]
   if(!allowedFields.includes(field)) {
    return res.status(400).send("Invalid sort field")
   }

  const movies = await Movie.find().sort({ [field]: -1 });
  res.json(movies);
});

router.get("/:id", async (req,res)=> {
    const movie = await Movie.findById(req.params.id);
    res.json(movie);
})
router.post("/", auth, admin, async (req, res) => {
  await Movie.create(req.body);
  res.send("Movie added");
});


router.put("/:id", auth, admin, async (req, res) => {
  await Movie.findByIdAndUpdate(req.params.id, req.body);
  res.send("Movie updated");
});


router.delete("/:id", auth, admin, async (req, res) => {
  await Movie.findByIdAndDelete(req.params.id);
  res.send("Movie deleted");
});

module.exports = router;
