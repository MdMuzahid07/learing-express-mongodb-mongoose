import { model, Schema } from "mongoose";
import {

  TGuardian,
  TLocalGuardian,
  TStudent,
  TStudentMethods,
  TStudentModel,
  TUsername,
} from "./student.interface";

import validator from "validator";

const UserNameSchema = new Schema<TUsername>({
  firstName: {
    type: String,
    required: true,
    maxlength: [20, "Name cannot be more than 20 character"],
    trim: true,
  },
  middleName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
});

const GuardianSchema = new Schema<TGuardian>({
  fatherName: {
    type: String,
    required: true,
  },
  motherName: {
    type: String,
    required: true,
  },
  fatherContactNo: {
    type: String,
    required: true,
  },
  fatherOccupation: {
    type: String,
    required: true,
  },
});

const LocalGuardianSchema = new Schema<TLocalGuardian>({
  name: {
    type: String,
    required: true,
  },
  occupation: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
});

const StudentSchema = new Schema<TStudent, TStudentModel, TStudentMethods>({
  id: {
    type: String,
    unique: true,
  },
  name: {
    type: UserNameSchema,
    required: true,
  },
  gender: {
    type: String,
    enum: ["male", "female", "others"],
    required: true
  },
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "{VALUE} is not a valid email",
    },
  },
  bloodGroup: {
    type: String,
    enum: ["A+", "A-", "O+"],
    required: true
  },
  contactNumber: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  guardian: {
    type: GuardianSchema,
    required: true,
  },
  localGuardian: {
    type: LocalGuardianSchema,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
  profileImage: {
    type: String,
  },
  isActive: {
    type: String,
    enum: {
      values: ["Active", "Block"],
      message: "{VALUE} is not valid, it can be 'Active', or 'Block'",
    },
    default: "Active",
    required: true,
  },
});



StudentSchema.methods.isUserExists = async function (id: string) {
  const existingUser = StudentModel.findOne({ id: id });
  return existingUser;
}







// student model

const StudentModel = model<TStudent>("Student", StudentSchema);

export default StudentModel;
