const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const UserModal = require("./Users");
const { MongoClient } = require("mongodb");
const multer = require("multer");

const app = express();
app.use(cors());
app.use(express.json());
const CONNECTION_STRING =
  "mongodb+srv://baxtiyor:baxtiyor060708@cluster0.pwwfnzj.mongodb.net/?retryWrites=true&w=majority";
mongoose.connect(CONNECTION_STRING);

// app.get("/user", (req, res) => {
//   UserModal.find()
//     .then((users) => res.json(users))
//     .catch((err) => console.log(err));
// });

// app.post("user", (req, res) => {
//   const users = req.body;

//   UserModal.create("user")
//     .insertOne(users)
//     .then((result) => {
//       res.status(201).json(result);
//     })
//     .catch((err) => {
//       res.status(500).json({ err: "Could not create a new Document" });
//       console.log(err);
//     });
// });

let DTBN = "user";
let database;

app.listen(3001, () => {
  MongoClient.connect(CONNECTION_STRING, (error, client) => {
    database = client.db(DTBN);
    console.log("connection");
  });
});

app.get("/api/user/getuser", (request, response) => {
  database
    .collection("user")
    .find({})
    .toArray((error, result) => {
      response.send(result);
    });
});

app.get("/api/user/getuser", multer().none(), (request, response) => {
  database.collection("user").count({}, function (error, numOfDocs) {
    database.collection("user").insertOne({
      id: numOfDocs,
      description: request.body.newNotes,
    });
    response.json("Added SuccessFully");
  });
});
