import { verify, TokenExpiredError, JsonWebTokenError } from "jsonwebtoken";
import { Response, NextFunction } from "express";

const access =
  (role: string = "user") =>
  async (req: any, res: Response, next: NextFunction) => {
    try {
      const token = req.cookies.authtoken || req.headers.authorization;
      if (token) {
        const decoded: any = verify(token, process.env.JWT_SECRET as string);
        if (decoded.roles.includes(role)) {
          req.user = decoded;
          return next();
        }
        return res.status(403).json({ message: "access is denied!!" });
      }

      throw new Error("no token provided..");
    } catch (error) {
      if (error instanceof TokenExpiredError) {
        return res.status(401).json({ message: "token is expired!!!" });
      }
      if (error instanceof JsonWebTokenError) {
        return res.status(401).json({ message: "wrong token!!!" });
      }
      req.session.destroy((err: Error) => {
        if (err) {
          return res.status(401).json({ message: err.message });
        }
      });
      res.status(401).json({ message: error.message });
    }
  };

export default access;
