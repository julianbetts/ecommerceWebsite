const express = require('express');
const routes = require('./routes');
// import sequelize connection
const sequelize = require('./config/connection.js')
const app = express();
const PORT = process.env.PORT || 3001;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use(routes);

// app.get('/api/product', (req, res) => {
//   console.info(`${req.method} request received for feedback`);

//   readFromFile('./models/Product.js').then((data) => res.json(JSON.parse(data)));
// });

// app.get('/api/Tag', (req, res) => {
//   console.info(`${req.method} request received for feedback`);

//   readFromFile('./models/Tag.js').then((data) => res.json(JSON.parse(data)));
// });

// app.get('/api/category', (req, res) => {
//   console.info(`${req.method} request received for feedback`);

//   readFromFile('./models/Category.js').then((data) => res.json(JSON.parse(data)));
// });





// sync sequelize models to the database, then turn on the server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
