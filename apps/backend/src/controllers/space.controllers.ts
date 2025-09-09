import { prisma } from "@workspace/db";
import { Request, Response } from "express";

export const getSpacesController = async (req: Request, res: Response) => {
  try {
    const spaces = await prisma.space.findMany();
    return res
      .status(200)
      .json({ message: "Fetched spaces successfully", spaces });
  } catch (error) {
    console.error("error at getSpacesController", error);
    return res.status(500).json("Internal Server Error");
  }
};

export const getSpaceByIdController = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const space = await prisma.space.findUnique({
      where: { id },
    });

    if (!space) {
      return res.status(404).json({ message: "Space not found" });
    }

    return res
      .status(200)
      .json({ message: "Fetched space successfully", space });
  } catch (error) {
    console.error("error at getSpaceByIdController", error);
    return res.status(500).json("Internal Server Error");
  }
};

export const getSpaceByUserIdController = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const spaces = await prisma.space.findMany({
      where: { createdById: req.user.id },
    });

    return res
      .status(200)
      .json({ message: "Fetched user spaces successfully", spaces });
  } catch (error) {
    console.error("error at getSpaceByUserIdController", error);
    return res.status(500).json("Internal Server Error");
  }
};

export const createSpaceController = async (req: Request, res: Response) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { title } = req.body;
    const space = await prisma.space.create({
      data: {
        title,
        createdBy: {
          connect: { id: req.user.id },
        },
      },
    });
    return res
      .status(201)
      .json({ message: "Space created successfully", space });
  } catch (error) {
    console.error("error at createSpaceController", error);
    return res.status(500).json("Internal Server Error");
  }
};

export const updateSpaceByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { id } = req.params;
    const { title } = req.body;

    const space = await prisma.space.findUnique({ where: { id } });

    if (!space) {
      return res.status(404).json({ message: "Space not found" });
    }

    if (space.createdById !== req.user.id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    const updated = await prisma.space.update({
      where: { id },
      data: { title },
    });

    return res
      .status(200)
      .json({ message: "Space updated successfully", space: updated });
  } catch (error) {
    console.error("error at updateSpaceByIdController", error);
    return res.status(500).json("Internal Server Error");
  }
};

export const deleteSpaceByIdController = async (
  req: Request,
  res: Response
) => {
  try {
    if (!req.user) {
      return res.status(401).json({ message: "Unauthorized" });
    }

    const { id } = req.params;

    const space = await prisma.space.findUnique({ where: { id } });

    if (!space) {
      return res.status(404).json({ message: "Space not found" });
    }

    if (space.createdById !== req.user.id) {
      return res.status(403).json({ message: "Forbidden" });
    }

    await prisma.space.delete({ where: { id } });

    return res.status(200).json({ message: "Deleted space successfully" });
  } catch (error) {
    console.error("error at deleteSpaceByIdController", error);
    return res.status(500).json("Internal Server Error");
  }
};
