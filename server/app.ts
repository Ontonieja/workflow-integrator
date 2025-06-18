import express, { Express } from "express";
import { createServer } from "http";

const app: Express = express();

const httpServer = createServer(app);

export { app, httpServer };
