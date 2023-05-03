const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
var cors = require('cors')

// use the cors
app.use(cors())

// get the data
const categories = require('./data/categories.json')

app.get('/', (req, res) => {
  res.send('Dragon is NOT running well')
});
// send back the categories.json data to the user upon request
app.get('/categories', (req, res) => {
  res.send(categories)
})

app.listen(port, () => {
  console.log(`Dragon API is running on port:',  ${port}`)
})
