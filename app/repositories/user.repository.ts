import { UserSchemaDO } from "../schemas/user.schema";
import { UserModel } from "../models/user.model";
import { RepositoryBase } from "../config/base.repository";

export class UserRepository extends RepositoryBase<UserModel> {
    constructor() {
        super(UserSchemaDO);
    }
}