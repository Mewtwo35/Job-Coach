import { Request, Response, NextFunction, RequestHandler } from 'express';

const db = require('../models/algoModels');
type AlgoPGController = {
  getAllAlgos: RequestHandler;
  getAlgo: RequestHandler;
  getAlgosCat: RequestHandler;
};
export const algoPGController: AlgoPGController = {
  /**
   *Finds and returns ALL stored algos
   * @returns array of objects containing all stored algorithms
   */
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
  /**
   *finds and returns a single algo db object using the name on request query
   * @param req as algoName on query
   * @returns object with returned query algo data fields
   */
  getAlgo: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { algoName } = req.query;
      const queryString = `SELECT * FROM "public"."algos" WHERE name = '${algoName}'`;
      const result = await db.query(queryString);
      res.locals.algos = result.rows[0];
      return next();
    } catch (err) {
      return next(err);
    }
  },
  /**
   *Finds and returns ALL stored algos by category
   * @param req as algoCat on query
   * @returns array of objects containing all stored algorithms
   */
  getAlgosCat: async (
    req: Request,
    res: Response,
    next: NextFunction
  ): Promise<void> => {
    try {
      const { algoCat } = req.query;
      const queryString = `SELECT * FROM "public"."algos" WHERE category = '${algoCat}'`;
      const result = await db.query(queryString);
      res.locals.algos = result.rows;
      return next();
    } catch (err) {
      return next(err);
    }
  },
};
