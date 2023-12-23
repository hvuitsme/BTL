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
app.set("views", "./resources/views");

app.get('/', (req, res) => {
  res.render('home')
})

app.get('/info1', (req, res) => {
  res.render('info1');
});

app.get('/info2', (req, res) => {
  res.render('info2');
});

app.get('/cart', (req, res) => {
  res.render('carts');
});

app.set("views" , path.join(__dirname,'resources', 'views'))

// app.get("/", (req, res) => res.send("Hello World!"));
app.listen(port, () => console.log(`Example app listening on port ${port}!`));
