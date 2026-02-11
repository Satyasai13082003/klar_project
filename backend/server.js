const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
require("dotenv").config();

const app = express();



app.use(cors());
app.use(express.json());


mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log(" MongoDB Atlas Connected"))
  .catch(err => console.error(" MongoDB Error:", err));


const JourneySchema = new mongoose.Schema({
  name: String,
  email: String,
  phone: String,
  interest: String,
  budget: String,
  timeline: String,
  vision: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Journey = mongoose.model("Journey", JourneySchema);


app.get("/", (req, res) => {
  res.send("Server is running");
});

app.post("/submit-journey", async (req, res) => {
  try {
    console.log("Received Data:", req.body);

    const journey = new Journey(req.body);
    await journey.save();

    res.status(201).json({
      success: true,
      message: "Form submitted successfully"
    });
  } catch (error) {
    console.error(" Save Error:", error);
    res.status(500).json({
      success: false,
      message: "Error saving data"
    });
  }
});


const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

