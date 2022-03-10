import { Response, Request, NextFunction } from "express";

export async function login(req: any, res: Response, next: NextFunction) {
  res.status(200).json({ isAuth: true });
}

export async function register(req: Request, res: Response, next: any) {
  res.status(200).json({ isRegistered: true });
}
