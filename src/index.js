const { engine } = require("express-handlebars");
const morgan = require("morgan");
const path = require("path");
const express = require("express");
const app = express();
const port = 7749;

app.use(express.static(path.join(__dirname, "public")));

//use morgan
// app.use(morgan('combined'))

app.engine(
  "hbs",
  engine({
    extname: ".hbs",
  })
);
app.set("view engine", "hbs");
app.set("views", "./resources/views/");


app.get('/', (req, res) => {
  res.render('home')
})

app.get('/info1', (req, res) => {
  res.render('info1');
});

app.get('/info2', (req, res) => {
  res.render('info2');
});

app.get('/info3', (req, res) => {
  res.render('info3');
});

app.get('/info4', (req, res) => {
  res.render('info4');
});

app.get('/info5', (req, res) => {
  res.render('info5');
});

app.get('/info6', (req, res) => {
  res.render('info6');
});

app.get('/info7', (req, res) => {
  res.render('info7');
});

app.get('/info8', (req, res) => {
  res.render('info8');
});

app.get('/info9', (req, res) => {
  res.render('info9');
});

app.get('/info10', (req, res) => {
  res.render('info10');
});

app.get('/info11', (req, res) => {
  res.render('info11');
});

app.get('/info12', (req, res) => {
  res.render('info12');
});

app.get('/info13', (req, res) => {
  res.render('info13');
});

app.get('/info14', (req, res) => {
  res.render('info14');
});

app.get('/info15', (req, res) => {
  res.render('info14');
});

app.get('/info16', (req, res) => {
  res.render('info14');
});

app.get('/cart', (req, res) => {
  res.render('carts');
});

app.get('/thanh-toan', (req, res) => {
  res.render('payment');
});

app.set("views", path.join(__dirname, 'resources', 'views'))


// app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
