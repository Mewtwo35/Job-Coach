const express = require('express');
const router = express.Router();

import { Request, Response } from 'express';
import editorController from '../controllers/editorController';
import { algoPGController } from '../controllers/algoPGController';
//get dashboard page
router.get(
  '/dashboard',
  algoPGController.getAllAlgos,
  (req: Request, res: Response) => {
    return res.status(200).send(res.locals.algos);
  }
);
router.get('/algo', algoPGController.getAlgo, (req: Request, res: Response) => {
  return res.status(200).send(res.locals.algos);
});

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
