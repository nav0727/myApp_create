const express = require("express");

const { open } = require("sqlite");
const sqlite3 = require("sqlite3");

const path = require("path");
const dbPath = path.join(__dirname, "nav.db");

const app = express();

app.listen(3000, () => {
  console.log("hello world");
});

app.get("/", async (req, res) => {
  res.send("Hello World");
});

module.exports = app;
