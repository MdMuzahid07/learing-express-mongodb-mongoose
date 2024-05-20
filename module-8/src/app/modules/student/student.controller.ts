import { NextFunction, Request, Response } from "express";
import { StudentServices } from "./student.service";
import { z } from "zod";
import studentValidationSchema from "./student.validator";

const getStudents = async (req: Request, res: Response, next: NextFunction) => {
  try {
    const result = await StudentServices.getAllStudents();

    res.status(200).json({
      success: true,
      message: "all date find successfully",
      data: result,
    });
  } catch (error) { }
};

const postStudent = async (req: Request, res: Response, next: NextFunction) => {
  try {

    const student = req.body.student;

    // const { error, value } = StudentValidationSchema.validate(student);

    // validation using zod 
    const zodParsedData = studentValidationSchema.parse(student);


    const result = await StudentServices.createStudentToDB(zodParsedData);

    res.status(200).json({
      success: true,
      message: "Student created successfully",
      data: result,
    });
  } catch (error) {
    // res.status(500).json({
    //   success: true,
    //   message: "Student created successfully",
    //   error: error,
    // });
  };

  const updateStudent = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) { }
  };

  const deleteStudents = (req: Request, res: Response, next: NextFunction) => {
    try {
    } catch (error) { }
  };

}

export const StudentController = {
  postStudent,
  getStudents,
}