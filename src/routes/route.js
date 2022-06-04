const express = require("express");

const {filmes} = require('../routes/filmes')

const router = express.Router();


// Movie API 
router.get("/movies", (req, res) => {
  const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];
  res.send(movies.join(" , "));
});

// single Movie API 
router.get("/movies/:indexNumber", (req, res) => {
  const movies = ["Rang de basanti", "The shining", "Lord of the rings", "Batman begins"];

  if ( 0 > req.params.indexNumber ||  movies.length <= req.params.indexNumber) {
    res.send("Please Enter vailde Index number ");
  } else {
    res.send(movies[req.params.indexNumber]);
  }
});

// filmes API
router.get('/films',(req,res)=>{
res.send(filmes)
})

// single filems API
router.get('/films/:filmId',(req,res)=>{
  if ( 0 >= req.params.filmId ||  filmes.length < req.params.filmId) {
    res.send("No movie exists with this id");
  } else {
    const filmeData = filmes.find(ele => ele.id === +req.params.filmId)
    res.send(filmeData);
  }
})
module.exports = router;
// adding this comment for no reason