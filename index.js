const mongoose = require('mongoose');
const Recipe = require('./models/Recipe'); // Import of the model Recipe from './models/Recipe'
const data = require('./data.js');  // Import of the data from './data.js'

// Connection to the database "recipeApp"
let db = mongoose.connect('mongodb://localhost/recipeApp', { useNewUrlParser: true })
  .then(() => {
    console.log('Connected to Mongo!');
  }).catch(err => {
    console.error('Error connecting to mongo', err);
  });

  Recipe.create({title: "My favorite recipe", cuisine: "My favorite cusine" })
  .then(recipe =>{console.log(recipe.title)})
  .catch(err => {console.log(err)});


  Recipe.insertMany(data)
  .then(recipe1 =>{
    recipe1.forEach( arr =>{
      console.log(arr)
    })
  })
  .catch(err => {console.log(err)});

  Recipe.updateOne({title: "Rigatoni alla Genovese"},{duration:100})
  .then( update =>{console.log('success to update!',update)})
  .catch(err => {console.log(err)});

  Recipe.deleteOne({title: "Carrot Cake"})
  .then( deleted =>{console.log('success to delete!',deleted)})
  .catch(err => {console.log(err)});

  db.then(() => {
    mongoose.connection.close(() => {
      console.log("Mongoose connection closed");
    });
   });