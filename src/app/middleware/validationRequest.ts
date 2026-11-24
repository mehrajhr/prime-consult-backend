import { z } from "zod";
import { type NextFunction, type Request, type Response } from "express";
import { catchAsync } from "../utils/catchAsync";

export const validationRequest = (schema: z.ZodSchema) => {
  return catchAsync(async (req: Request, res: Response, next: NextFunction) => {
    const payload = req.body ?? {};
    const result = schema.safeParse(payload);
    if (!result.success) {
      let errorMessage = result.error.issues
        .map((issue) => issue.message)
        .join(", ");
      throw new Error(errorMessage);
    }
    req.body = result.data;
    next();
  });
};
