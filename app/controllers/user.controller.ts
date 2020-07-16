import { NextFunction, Response, Request } from "express";
import { UserRepository } from "../repositories/user.repository";

export class UerController {
    userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    getRecord = async (request: Request, response: Response, next: NextFunction) => {
        const users = await this.userRepository.retrieve({}, {}, {});
        console.log(users);
        response.send(users);
    }

    joinMe = async (request: Request, response: Response, next: NextFunction) => {
        const user = await this.userRepository.updateWithoutSet({ username: request.body.username }, request.body, { upsert: true });
        response.send(request.body);
    }
}