
import mongoose = require("mongoose");
export interface UserModel extends mongoose.Document {
  fullName?: string;
  gender?: string;
  schoolName?: string;
}