import { Request, Response, NextFunction } from "express";
import { ZodError, ZodObject } from "zod";

const validateSchema = (schema: ZodObject<any>) => {
      return (req: Request, res: Response, next: NextFunction) => {
            try {
                  schema.parseAsync({
                        body: req.body,
                        query: req.query,
                        params: req.params,
                  });
                  return next();
            } catch (error) {
                  if (error instanceof ZodError) {
                        res.status(400).json({
                              message: "Validation error",
                              errors: error.issues.map((issue) => ({
                                    issue: issue.path.join("."),
                                    MessagePort: issue.message,
                              })),
                        });
                  }
                  return next(error);
            }
      };
};
