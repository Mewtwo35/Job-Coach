import { Request, Response, NextFunction } from 'express';
import { ErrObj } from '../types';

const express = require('express');
const app = express();
const PORT = 3000;
const morgan = require('morgan');

//Morgan is a library that allows us to see every single route, status code, and response time to optimize and double check our routes work.
app.use(morgan('dev'));

//JSON parser
app.use(express.json());

//server static assets
app.use(express.static('./client'));

//import all routes
const appRouter = require('./routers/routes');

//route all requests to appRouter
app.use('/', appRouter);

//404 error handler for unknown routes
app.use((req: Request, res: Response) => {
  //Deepen your understanding:
  //You can also do res.status(404).send() but line 22 is cleaner. Remember: LESS IS MORE
  return res.sendStatus(404);
});

//Deepen your understanding:
//500 Internal Server Error server error response code indicates that the server
// encountered an unexpected condition that prevented it from fulfilling the request.
app.use((err: ErrObj, req: Request, res: Response, next: NextFunction) => {
  const defaultErr = {
    log: 'Express error handler caught unknown middleware error',
    status: 500,
    message: { err: 'An error ocurred!' },
  };
  //Deepen your understanding:
  //Object.assign copies all enumerable properties from one SOURCE objects
  //to a TARGET. In this case, we see an empty object being the target
  //as it "assigns" NOT "copying" from defaultErr and err.
  const errorObj = Object.assign({}, defaultErr, err);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, () => {
  console.log(`Server listening on port: ${PORT}`);
});
