import mongoose from 'mongoose';
import Toilet from './models/toilet.js';


const toilets = [
  {
    name: 'Mcdonalds',
    	gender: 'Unisex',
    	cleanliness_level: 'Clean',
    	ply_number: '20',
    	number_bathroom_stalls: '1',
    	notes: 'I love this toilet',
    	location: [200, 100]

  }


]

mongoose.connect('mongodb://localhost/toilets');

// Go through each movie
toilets.map(data => {
  // Initialize a model with movie data
  const toilet = new Toilet(data);
  // and save it into the database
  toilet.save();
});
