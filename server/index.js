import mongoose from "mongoose";
import cors from "cors";
import express from "express";
import UserModel from "./Models/UserModel.js";
import bcrypt from "bcrypt";

const app = express();
app.use(express.json());
app.use(cors());

//Database connection
const connectString =
  "mongodb+srv://admin:admin12345@postitcluster.vcbpdnh.mongodb.net/postITDb?retryWrites=true&w=majority&appName=PostITCluster";

mongoose.connect(connectString);
//API Routes

app.post("/registerUser", async (req, res) => {
  try {
    const name = req.body.name;
    const email = req.body.email;
    const password = req.body.password;
    const hashedpassword = await bcrypt.hash(password, 10);

    const user = new UserModel({
      name: name,
      email: email,
      password: hashedpassword,
    });

    await user.save();
    res.send({ user: user, msg: "Added." });
  } catch (error) {
    console.log(error);
  }
});

app.post("/login", async (req, res) => {});

app.put("/updateProfile", async (req, res) => {});

app.listen(3001, () => {
  console.log("You are connected thank you");
});
