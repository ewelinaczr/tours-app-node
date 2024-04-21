const app = require('./app');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

dotenv.config({ path: './config.env' });

const connectToAtlasDb = async () => {
  try {
    if (process.env.DATABASE) {
      await mongoose.connect(process.env.DATABASE);
    }
  } catch (err) {
    console.log('Error occured:', err);
  } finally {
    console.log('Connected to MongoDb Atlas');
  }
};
connectToAtlasDb();

const port = 3000;
app.listen(port, () => console.log(`App running on port ${port}`));
