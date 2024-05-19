import { Student } from "./student.interface";
import StudentModel from "./student.schema.model";

const createStudentToDB = async (student: Student) => {
  const res = await StudentModel.create(student);
  return res;
};

const getAllStudents = async () => {
  const res = await StudentModel.find({});
  return res;
};

// export all business logic
export const StudentServices = {
  createStudentToDB,
  getAllStudents,
};
