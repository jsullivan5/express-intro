const express = require('express');
const app = express();
const path = require('path');
const json = require('./public/jsonFile.js')

const urlLogger = (request, response, next) => {
  console.log('Request URL:', request.url);
  next();
}

const timeLogger = (request, response, next) => {
  console.log('Datetime:', new Date(Date.now()).toString());
  next();
}

app.use(urlLogger, timeLogger);
app.use(express.static(path.join(__dirname, 'public')));
app.use( (req, res, next) => {
  res.status(404).send("Sorry can't find that!")
})

app.get('/', (request, response) => {
  //served from public folder
});

app.get('/sunsets', (req,res) => {
    res.send(
      `<img src="./pics/BaliSil.jpg" width="200"/>
      <img src="./pics/NusaPenidsSunsetReEdit.jpg"  width="400"/>
      <img src="./pics/JeffSill.jpg" width="200" />`
    );
});


app.get('/json', (request, response) => {
  response.status(200).send(json);
});

app.listen(3000, () => {
  console.log('Express running on localhost:3000');
});
