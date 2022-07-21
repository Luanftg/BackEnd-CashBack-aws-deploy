import express from "express";
import healthCheck from "../controllers/HealthCheck.js";
import hookNotificationOrder from "../controllers/HookNotificationOrder.js";
import ping from '../midlewares/ping.js';

const routes = express.Router();

// GET method route
routes.get('/', healthCheck.hello );
  
  // POST method route
routes.post('/',ping, hookNotificationOrder.getId );

export default routes;