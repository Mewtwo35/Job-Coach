import { Request, Response, NextFunction, RequestHandler } from 'express';

const db = require('../models/algoModels');
type AlgoPGController = {
  getAllAlgos: RequestHandler;
  //   getAlgo: RequestHandler;
  //   getAlgosCat: RequestHandler;
};
export const algoPGController: AlgoPGController = {
  getAllAlgos: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const queryString = `SELECT * FROM "public"."algos"`;
      const result = await db.query(queryString);
      console.log(result);
      res.locals.algos = result.rows;
      return next();
    } catch (err) {
      return next(err);
    }
  },
};
