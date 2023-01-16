const router = require("express").Router();
let Chicken = require("../models/chicken.model");

router.route("/").get((req, res) => {
  Chicken.find()
    .then((chicken) => res.json(chicken))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/add").post((req, res) => {
  const username = req.body.username;
  const tag = req.body.tag;
  const type = req.body.type;
  const initWeight = Number(req.body.initWeight);
  const finalWeight = Number(req.body.finalWeight);
  const date = Date.parse(req.body.date);
  const calorieAte = req.body.calorieAte;

  const newChicken = new Chicken({
    username,
    tag,
    type,
    initWeight,
    finalWeight,
    date,
    calorieAte,
  });

  newChicken
    .save()
    .then(() => res.json("Chicken added!"))
    .catch((err) => res.status(400).json("Error: " + err));
});

router.route("/:id").get((req, res) => {
  Chicken.findById(req.params.id)
    .then((chicken) => res.json(chicken))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/:id").delete((req, res) => {
  Chicken.findByIdAndDelete(req.params.id)
    .then(() => res.json("Chicken Obliterated"))
    .catch((err) => res.status(400).json("Error " + err));
});

router.route("/update/:id").post((req, res) => {
  Chicken.findById(req.params.id)
    .then((chicken) => {
      chicken.tag = req.body.tag;
      chicken.type = req.body.type;
      chicken.initWeight = req.body.initWeight;
      chicken.finalWeight = req.body.finalWeight;
      chicken.calorieAte = req.body.calorieAte;

      chicken
        .save()
        .then(() => res.json("Chicken updated!"))
        .catch((err) => res.status(400).json("Error " + err));
    })
    .catch((err) => res.status(400).json("Error " + err));
});

module.exports = router;
