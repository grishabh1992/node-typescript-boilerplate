import * as express from 'express';
import * as asyncHandler from 'express-async-handler'
import { UerController } from '../controllers/user.controller';
export class UserRoutes {
    router: express.Router;
    controller: UerController;
    constructor() {
        this.router = express.Router();
        this.controller = new UerController();
    }
    get routes() {
        this.router.get('/', asyncHandler(this.controller.getRecord));
        this.router.put('/', asyncHandler(this.controller.joinMe));
        return this.router;
    }
}