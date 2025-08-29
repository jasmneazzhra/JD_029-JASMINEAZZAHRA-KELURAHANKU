const express = require("express");
const cors = require("cors");
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

const users = [
  { id: 1, username: "admin", password: "admin123", role: "admin" },
  { id: 2, username: "user", password: "user123", role: "user" },
];

app.post("/login", (req, res) => {
  const { username, password } = req.body;
  const user = users.find(u => u.username === username && u.password === password);
  if(!user) return res.status(401).json({ message: "Login gagal" });
  res.json({ username: user.username, role: user.role });
});

app.get("/data", (req, res) => {
  res.json({ services: ["Layanan A","Layanan B","Layanan C"] });
});

app.listen(PORT, () => console.log(`Server berjalan di http://localhost:${PORT}`));