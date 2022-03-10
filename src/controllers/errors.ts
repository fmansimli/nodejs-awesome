import { RequestHandler, ErrorRequestHandler } from "express";
import { join } from "path";

export const get404: RequestHandler = (req, res, next) => {
  res.status(404).json();
};

export const get404HTML: RequestHandler = (req, res, next) => {
  res.status(200).sendFile(join(__dirname, "../", "public", "index.html"));
};

export const handleError: ErrorRequestHandler = (err, req, res, next) => {
  if (err.name === "ValidationError") {
    return res.status(422).json(err.errors);
  }
  res.status(500).json(err);
};
