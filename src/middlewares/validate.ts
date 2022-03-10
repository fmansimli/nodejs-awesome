// import { NextFunction, Request, Response } from "express";
// import { Schema } from "joi";

// const validate =
//   (schema: Schema) =>
//   async (req: Request, res: Response, next: NextFunction) => {
//     try {
//       await schema.validateAsync(req.body);
//       next();
//     } catch (error) {
//       return res.status(422).json(error);
//     }
//   };

// export default validate;