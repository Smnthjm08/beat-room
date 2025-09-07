import { NextFunction, Request, Response } from "express";
import { auth } from "@workspace/auth/server";
import { fromNodeHeaders } from "better-auth/node";
import { userSessionType } from "../types/user.session";

declare global {
  namespace Express {
    interface Request {
      user?: userSessionType;
    }
  }
}

async function authMiddleware(req: Request, res: Response, next: NextFunction) {
  try {
    const session = await auth.api.getSession({
      headers: fromNodeHeaders(req.headers),
    });

    if (!session) {
      return res.status(401).json({ error: "Unauthorized" });
    }
    
    req.user = session.user;
    next();
  } catch (err) {
    console.error("Auth middleware error:", err);
    return res.status(500).json({ error: "Internal Server Error" });
  }
}

export default authMiddleware;
