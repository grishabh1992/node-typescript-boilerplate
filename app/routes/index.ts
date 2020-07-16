import * as express from 'express'
import { DemoRoutes } from './demo.route';
import { UserRoutes } from './user.route';

const app = express();

export class AppRoutes {
  get routes() {
    app.use("/demo", new DemoRoutes().routes);
    app.use("/user", new UserRoutes().routes);
    return app;
  }
}