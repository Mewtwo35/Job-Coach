const express = require('express');
const router = express.Router();

import { Request, Response } from 'express';
import editorController from '../controllers/editorController';
import { algoPGController } from '../controllers/algoPGController';
/**
 * gets all algos from database
 * @params none
 * @returns array of algo objects
 */
router.get(
  '/allAlgos',
  algoPGController.getAllAlgos,
  (req: Request, res: Response) => {
    return res.status(200).send(res.locals.algos);
  }
);
/**
 * get single algorithm using db name on query
 * @params name of algo as query algoName: name
 * @returns object with all db fields for found algo
 */
router.get('/algo', algoPGController.getAlgo, (req: Request, res: Response) => {
  return res.status(200).send(res.locals.algos);
});
/**
 * gets algorithms using db category on query
 * @params category of algos as query algoCat: categoryname
 * @returns array of algo objects
 */
router.get(
  '/algoCat',
  algoPGController.getAlgosCat,
  (req: Request, res: Response) => {
    return res.status(200).send(res.locals.algos);
  }
);

//get code editor page
router.get('/editor', (req: Request, res: Response) => {
  return res.status(200);
});

//post
router.post(
  '/editor',
  editorController.testAnswer,
  (req: Request, res: Response) => {
    return res.status(200).send(res.locals.returnValue);
  }
);

//export the router
module.exports = router;
