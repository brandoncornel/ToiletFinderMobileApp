import express from 'express'
import morgan from 'morgan'
import mongoose from 'mongoose';
import router from './router';
import bodyParser from 'body-parser';


mongoose.connect('mongodb://localhost/toilets');
const app = express();

// Logger that outputs all requests into the console
app.use(morgan('combined'));
app.use(bodyParser.json());
// Use v1 as prefix for all API endpoints
app.use('/v1', router);

const server = app.listen(3000, () => {
  const { address, port } = server.address();
  console.log(`Listening at http://localhost/${port}`);
});
