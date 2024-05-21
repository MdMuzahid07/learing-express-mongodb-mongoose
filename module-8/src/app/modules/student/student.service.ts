import { TStudent } from "./student.interface";
import StudentModel from "./student.schema.model";

const createStudentToDB = async (student: TStudent) => {
  // builtin static method
  // const res = await StudentModel.create(student);

  // creating an instance method and using an built in instance method by mongoose
  const data = new StudentModel(student);
  const res = data.save();


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
