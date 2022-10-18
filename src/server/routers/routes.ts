const express = require('express');
const router = express.Router();

import { Request, Response } from 'express';
import editorController from '../controllers/editorController';

//get dashboard page
router.get('/dashboard', (req: Request, res: Response) => {
  return res.status(200);
});

//get code editor page
router.get('/editor', (req: Request, res: Response) => {
  return res.status(200);
});

//post 
router.post('/editor', editorController.testAnswer, (req: Request, res: Response) => {
  return res.status(200).send(res.locals.returnValue);
});

//export the router
module.exports = router;
