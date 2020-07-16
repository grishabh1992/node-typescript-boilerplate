
import Mongoose = require("mongoose");
import DataAccess = require("../config/mongo.connector");
import { UserModel } from "../models/user.model";
const mongooseConnection = DataAccess.mongooseConnection;

class UserSchema {
    static get schema() {
        var schema = new Mongoose.Schema({
            username: {
                type: String,
                required: true,
                unique: true
            }
        });
        return schema;
    }
}
export const UserSchemaDO = mongooseConnection.model<UserModel>("Users", UserSchema.schema);