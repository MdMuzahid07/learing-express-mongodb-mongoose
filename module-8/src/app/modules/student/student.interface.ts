export interface Guardian {
  fatherName: string;
  motherName: string;
  fatherOccupation: string;
  fatherContactNo: string;
}

export interface Username {
  firstName: string;
  middleName: string;
  lastName: string;
}

export interface LocalGuardian {
  name: string;
  occupation: string;
  contactNo: string;
  address: string;
}

export interface Student {
  id: string;
  name: Username;
  gender: "male" | "female";
  dateOfBirth?: string;
  email: string;
  contactNumber: string;
  emergencyContactNo: string;
  bloodGroup?: "A+" | "A-" | "O+";
  presentAddress: string;
  permanentAddress: string;
  guardian: Guardian;
  localGuardian: LocalGuardian;
  profileImage?: string;
  isActive: "Active" | "Block";
}
