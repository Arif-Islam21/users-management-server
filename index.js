const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;

// middlewere
app.use(cors());

const users = [
  {
    id: 1,
    name: "sabana",
    email: "sabana@gmail.com",
  },
  {
    id: 2,
    name: "sabnur",
    email: "sabnur@gmail.com",
  },
  {
    id: 3,
    name: "sabila",
    email: "sabila@gmail.com",
  },
];

app.get("/users", (req, res) => {
  res.send(users);
});

app.get("/", (req, res) => {
  res.send("Users management server is running");
});

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
