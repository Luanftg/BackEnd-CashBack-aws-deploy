import express from "express";
import helloCashback from "../controllers/HelloCashBack.js";
import hookConfigController from "../controllers/HookConfig.js";

const routes = express.Router();

// GET method route
routes.get('/', helloCashback.hello );
  
  // POST method route
routes.post('/', hookConfigController.ping );

export default routes;