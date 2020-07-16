import { NextFunction, Response, Request } from "express";
import { UserRepository } from "../repositories/user.repository";
import { CumtomResponse } from "../config/response";

export class UerController {
    userRepository: UserRepository;
    constructor() {
        this.userRepository = new UserRepository();
    }

    getRecord = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const users = await this.userRepository.retrieve({}, {}, {});
            response.send(users);
        } catch (error) {
            throw error;
        }
    }

    getSingleRecord = async (request: Request, response: Response, next: NextFunction) => {
        try {
            const users = await this.userRepository.retrieve({ _id: request.params.id }, {}, {});
            if (users.length) {
                throw CumtomResponse.badRequest({}, 'Wrong Id');
            }
            response.send(users);
        } catch (error) {
            throw error;
        }
    }

}