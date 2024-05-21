import { Model } from "mongoose";

export interface TGuardian {
  fatherName: string;
  motherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
}

export interface TUsername {
  firstName: string;
  middleName?: string;
  lastName: string;
}

export interface TLocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

export interface TStudent {
  id?: string;
  name: TUsername;
  gender:
  "male" | "female" | "others"
  dateOfBirth?: string;
  email: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "O+";
  presentAddress: string;
  permanentAddress: string;
  guardian: TGuardian;
  localGuardian: TLocalGuardian;
  profileImage?: string;
  isActive: "Active" | "Block";
}



/// create a custom instance method

export type TStudentMethods = {
  isUserExists(id: string): Promise<TStudent | null>;
};


export type TStudentModel = Model<TStudent, Record<string, never>, TStudentMethods>;


