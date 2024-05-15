import "dotenv/config"
import express, { Express } from "express"
import cors from "cors"
import bodyParser from "body-parser"
import cookieParser from "cookie-parser"

import login from "./routes/login"
import register from "./routes/register"
import dashboard from "./routes/dashboard"
import metrics from "./routes/metrics"

// Server
const app: Express = express()
const port = 3002

// Middlewares
app.use(cors({
  credentials: true,
  origin: process.env.CLIENT_URL
}))
app.use(cookieParser());
app.use(bodyParser.json())

// Routes
app.use("/api/register", register)
app.use("/api/login", login)
app.use("/api/dashboard", dashboard)
app.use("/api/metrics", metrics)

app.listen(port, () => {
  console.log(`CoyoteTrade-API running at http://localhost:${port}`)
})
