import express from "express";
import { StudentController } from "./student.controller";

const router = express.Router();

router.get("/find-student", StudentController.getStudents);
router.post("/create-student", StudentController.postStudent);

export const StudentRoutes = router;
