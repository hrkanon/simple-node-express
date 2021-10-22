const express = require("express");
const cors = require("cors");
const app = express();

app.use(cors());
app.use(express.json());

const port = 4000;

app.get("/", (req, res) => {
  res.send("Hello, I am learning node server with nodemon yehh!");
});

const users = [
  { id: 0, name: "sabana", email: "sabana@gamil.com" },
  { id: 1, name: "soniya", email: "soniya@gamil.com" },
  { id: 2, name: "subarna", email: "subarna@gamil.com" },
  { id: 3, name: "suchorita", email: "suchorita@gamil.com" },
];

app.get("/users", (req, res) => {
  //   console.log(req.query.search);
  const search = req.query.search;
  if (search) {
    const searchResult = users.filter((user) =>
      user.name.toLowerCase().includes(search)
    );
    res.send(searchResult);
  } else {
    res.send(users);
  }
});

app.post("/users", (req, res) => {
  const newUser = req.body;
  newUser.id = users.length;
  users.push(newUser);
  // console.log("hitting the post", req.body);
  // res.send(JSON.stringify(newUser));
  //shortcut
  res.json(newUser);
});

app.get("/fruits", (req, res) => {
  res.send(["mango", "apple", "banana"]);
});

app.get("/fruits/mangos/fazli", (req, res) => {
  res.send("Yummy Yummy tok tok");
});

// app.get("/user/:id", (req, res) => {
//   console.log(req.params.id);
// });
app.get("/user/:id", (req, res) => {
  const id = req.params.id;
  const user = users[id];
  res.send(user);
});

app.listen(port, () => {
  console.log("Hello", port);
});
