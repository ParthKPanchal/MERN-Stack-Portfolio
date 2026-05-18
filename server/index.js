const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const messageRoutes = require("./routes/messageRoutes");
const connectDB = require("./config/db");
const visitorRoutes = require("./routes/visitorRoutes");

dotenv.config();

connectDB();

const app = express();

app.use(
  cors({
    origin: "https://mr-parth-k-panchal-react-portfolio.netlify.app",
    credentials: true,
  })
);
app.use(express.json());
app.use("/api/messages", messageRoutes);
app.use("/api/visitors", visitorRoutes);

app.get("/", (req, res) => {
  res.send("API Running");
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on ${PORT}`);
});