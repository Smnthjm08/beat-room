import { Router } from "express";
import {
  createSpaceController,
  deleteSpaceByIdController,
  getSpaceByIdController,
  getSpaceByUserIdController,
  getSpacesController,
  updateSpaceByIdController,
} from "../controllers/space.controllers";

const spaceRoutes: Router = Router();

spaceRoutes.get("/", getSpacesController);
spaceRoutes.get("/:id", getSpaceByIdController);
spaceRoutes.get("/my-spaces", getSpaceByUserIdController);

spaceRoutes.post("/", createSpaceController);

spaceRoutes.put("/:id", updateSpaceByIdController);

spaceRoutes.delete("/:id", deleteSpaceByIdController);

export default spaceRoutes;
