const express = require("express");
const hdbr = require("express-handlebars");
const bodyParser = require("body-parser");
const generateMessage = require("./models/generateMessage");
const app = express();
const { targets } = require("./constants");
const port = 3000;

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.engine("handlebars", hdbr({ defaultLayout: "main.handlebars" }));
app.set("view engine", "handlebars");

app.get("/", (req, res) => {
  res.render("index", { targets });
});

app.post("/", (req, res) => {
  const { target } = req.body;
  const message = generateMessage(target);
  res.render("index", {
    targets: targets.map(ele => {
      const { name } = ele;
      return {
        ...ele,
        checked: target === name ? "checked" : null
      };
    }),
    message
  });
});

app.listen(port, () => {
  console.log("listen on port ", port);
});
