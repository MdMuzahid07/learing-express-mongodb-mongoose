import { model, Schema } from "mongoose";
import {
  Guardian,
  LocalGuardian,
  Student,
  Username,
} from "./student.interface";

import validator from 'validator';

const UserNameSchema = new Schema<Username>({
  firstName: {
    type: String,
    required: true,
    maxlength: [20, "Name cannot be more than 20 character"],
    trim: true,
    // validate using third party library
    validate: {
      validator: (value: string) => validator.isAlpha(value),
      message: "{VALUE} is not valid"
    }


    // custom validator
    // validate: function (value) {
    //   const firstName = value.charAt(0).toUpperCase() + value.slice(1);
    //   return firstName === value;
    // }
    // with custom error message
    // validate: {
    //   validator: function (value: string) {
    //     const firstName = value.charAt(0).toUpperCase() + value.slice(1);
    //     return firstName === value;
    //   },
    //   message: "{VALUE}, Name must be start with capital letter, and rest letters in small"
    // }

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

const GuardianSchema = new Schema<Guardian>({
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

const LocalGuardianSchema = new Schema<LocalGuardian>({
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

const StudentSchema = new Schema<Student>({
  id: {
    type: String,
    unique: true
  },
  name: {
    type: UserNameSchema,
    required: true
  },
  gender: ["male", "female"],
  dateOfBirth: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: {
      validator: (value: string) => validator.isEmail(value),
      message: "{VALUE} is not a valid email"
    }
  },
  bloodGroup: ["A+", "A-", "O+"],
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
    required: true
  },
  localGuardian: {
    type: LocalGuardianSchema,
    required: true
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
      message: "{VALUE} is not valid, it can be 'Active', or 'Block'"
    },
    default: "Active",
    required: true
  },
});

// student model

const StudentModel = model<Student>("Student", StudentSchema);

export default StudentModel;
