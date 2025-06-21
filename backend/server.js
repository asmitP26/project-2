// Simple Express server for future backend functionality
// Currently not needed as we're using CoinGecko API directly

const express = require("express")
const cors = require("cors")
const path = require("path")

const app = express()
const PORT = process.env.PORT || 3000

// Middleware
app.use(cors())
app.use(express.json())
app.use(express.static(path.join(__dirname, "../frontend")))

// Serve static files
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "../frontend/index.html"))
})

// API Routes (for future expansion)
app.get("/api/health", (req, res) => {
  res.json({ status: "OK", timestamp: new Date().toISOString() })
})

// Future: Add rate limiting, caching, user authentication, etc.
app.get("/api/favorites/:userId", (req, res) => {
  // Future: Get user favorites from database
  res.json({ message: "Feature coming soon" })
})

app.post("/api/favorites/:userId", (req, res) => {
  // Future: Save user favorites to database
  res.json({ message: "Feature coming soon" })
})

// Error handling middleware
app.use((err, req, res, next) => {
  console.error(err.stack)
  res.status(500).json({ error: "Something went wrong!" })
})

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" })
})

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
  console.log(`Open http://localhost:${PORT} to view the app`)
})

module.exports = app
