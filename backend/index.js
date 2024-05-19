const mongoose = require("mongoose");
const express = require("express");
const cors = require("cors");
const { Schema } = mongoose;
require("dotenv").config();

const app = express();
app.use(express.json());
app.use(cors());

mongoose.connect(process.env.API_URL).then(() => {
  console.log("You are connected!");
}).catch(()=>{
  console.log("Not connected")
});

const categorySchema = new Schema({
  image: String,
  title: String,
  description: String,
  price: Number,
});

const categoryModel = mongoose.model("categories", categorySchema);

app.get("/categories", async (req, res) => {
  try {
    const category = await categoryModel.find();
    res.send(category);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.get("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findById(id);
    res.send(category);
  } catch (error) {
    res.status(404).send(error);
  }
});

app.delete("/categories/:id", async (req, res) => {
  try {
    const { id } = req.params;
    const category = await categoryModel.findByIdAndDelete(id);
    res.send("Silindi");
  } catch (error) {
    res.status(404).send(error);
  }
});

app.post("/categories", async (req, res) => {
  try {
    const { image, title, description, price } = req.body;
    const newCategory = new categoryModel({ image, title, description, price });
    await newCategory.save();
    res.status(200).send("Elave edildi");
  } catch (error) {
    res.status(404).send(error);
  }
});

app.listen(process.env.PORT, () => {
  console.log(`bu port da isleyir ${process.env.PORT}`);
});
