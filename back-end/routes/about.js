const express = require('express');
const router = express.Router();

router.get('/', (_req, res) => {
  res.json({
    name: "Saad Iftikhar",
    paragraphs: [
      "Hi I am Saad",
      "This is my agile exercise",
      "I hope it goes well"
    ],
    photoUrl: "http://localhost:7001/static/me.jpg"
  });
});

module.exports = router;
