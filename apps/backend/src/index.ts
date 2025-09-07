import express from "express";
import dotenv from "dotenv";
import { prisma } from "@workspace/db";
import authMiddleware from "./middlewares/auth.middleware";
import cors from "cors";
import spaceRoutes from "./routes/space.routes";

dotenv.config();

const app = express();

app.use(express.json());
app.use(
  cors({
    origin: process.env.BETTER_AUTH_URL,
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  })
);

const PORT = process.env.BE_PORT || 5002;

const v1Routes = app.use("/api/v1");

app.get("/", async (req, res) => {
  const data = await prisma.user.findMany();
  res.status(200).json(data);
});

v1Routes.use("/space", authMiddleware, spaceRoutes);

app.get("/me", authMiddleware, async (req, res) => {
  const session = req?.user;
  return res.json(session);
});

app.listen(PORT, () => {
  console.log(`App is listening on PORT ${PORT}`);
});
