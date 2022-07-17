import express from "express";
import healthCheck from "../controllers/HealthCheck.js";
import hookConfigController from "../controllers/HookConfig.js";

const routes = express.Router();

// GET method route
routes.get('/', healthCheck.hello );
  
  // POST method route
routes.post('/', hookConfigController.ping );

export default routes;