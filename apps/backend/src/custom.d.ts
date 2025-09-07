import { userSessionType } from "./types/user.session";

declare namespace Express {
   export interface Request {
      user?: userSessionType
   }
}