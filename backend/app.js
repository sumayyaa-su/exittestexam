
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());


mongoose.connect('mongodb+srv://sumayyas269:sumayyasumi@cluster0.26bzz.mongodb.net/feedback?retryWrites=true&w=majority&appName=Cluster0',{ useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('Connected to MongoDB Atlas'))
  .catch(err => console.log('MongoDB connection error:', err));

//  feedback routes
const feedbackRoutes = require('./routes/feedback');
app.use('/user/feedback', feedbackRoutes);

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
