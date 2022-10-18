import { RequestHandler } from 'express-serve-static-core';

export type ErrObj = {
  log: string;
  status: number;
  message: { err: string };
};

export type EditorController = {
  testAnswer: RequestHandler;
};
