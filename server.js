const express = require('express');
const mongoose = require('mongoose');
// take requests and get data from thjte body
// if we send a post request, gusto natin makuha name ng post na yun
const bodyParser = require('body-parser');
const items = require('./routes/api/items');
const path = require('path');
const app = express();

// Bodyparser Middleware

app.use(bodyParser.json());
// DB Config
const db = require('./config/keys').mongoURI;
// connect 
mongoose
    .connect(db, { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => { console.log('MongoDB Connected'); })
    .catch(err => console.log(err));
// use routes
// pupunta sa routes/api/items.js 
app.use('/api/items', items)

// serve static assets if in production
if (process.env.NODE_ENV === 'production') {
    // set a static folder
    app.use(express.static('client/build'));
    app.get('*', (req, res) => {
        res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
    });
}
const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server started on port ${port}`));