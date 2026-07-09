import express from "express";
import dotenv from "dotenv";
import connectToDB from "./lib/db.js";
dotenv.config();
import { clerkMiddleware } from "@clerk/express";
import cors from "cors";
import job from "./lib/cron.js";
import clerkWebhook from './webhooks/clerk.webhook.js';

const app = express();
const PORT = process.env.PORT || 5000;

app.use(
  "/api/webhooks/clerk",
  express.raw({ type: "application/json" }),
  clerkWebhook,
);

app.use(clerkMiddleware());
app.use(cors({ origin: process.env.FRONTEND_ORIGIN, Credential: true }));
app.use(express.json());

connectToDB();

app.get("/health", (req, res) => {
  res.send("Hello from the server!");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);

  if (process.env.NODE_ENV === "production") {
    job.start();
  }
});
