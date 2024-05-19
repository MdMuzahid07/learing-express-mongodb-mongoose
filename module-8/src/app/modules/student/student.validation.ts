import Joi from "joi";

// Joi schema for UserName
const UserNameValidationSchema = Joi.object({
    firstName: Joi.string().max(20).trim().required().messages({
        "string.empty": "First name is required",
        "string.max": "First name cannot be more than 20 characters",
    }),
    middleName: Joi.string().required().messages({
        "string.empty": "Middle name is required",
    }),
    lastName: Joi.string().required().messages({
        "string.empty": "Last name is required",
    }),
});

// Joi schema for Guardian
const GuardianValidationSchema = Joi.object({
    fatherName: Joi.string().required().messages({
        "string.empty": "Father name is required",
    }),
    motherName: Joi.string().required().messages({
        "string.empty": "Mother name is required",
    }),
    fatherContactNo: Joi.string().required().messages({
        "string.empty": "Father contact number is required",
    }),
    fatherOccupation: Joi.string().required().messages({
        "string.empty": "Father occupation is required",
    }),
});

// Joi schema for LocalGuardian
const LocalGuardianValidationSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "Local guardian name is required",
    }),
    occupation: Joi.string().required().messages({
        "string.empty": "Local guardian occupation is required",
    }),
    contactNo: Joi.string().required().messages({
        "string.empty": "Local guardian contact number is required",
    }),
    address: Joi.string().required().messages({
        "string.empty": "Local guardian address is required",
    }),
});

// Joi schema for Student
const StudentValidationSchema = Joi.object({
    id: Joi.string().optional(),
    name: UserNameValidationSchema.required().messages({
        "object.base": "Name is required",
    }),
    gender: Joi.string().valid("male", "female").required().messages({
        "any.only": "Gender must be either male or female",
        "string.empty": "Gender is required",
    }),
    dateOfBirth: Joi.string().optional(),
    email: Joi.string().email().required().messages({
        "string.email": "{#label} is not a valid email",
        "string.empty": "Email is required",
    }),
    bloodGroup: Joi.string().valid("A+", "A-", "O+").required().messages({
        "any.only": "Blood group must be one of A+, A-, or O+",
        "string.empty": "Blood group is required",
    }),
    contactNumber: Joi.string().required().messages({
        "string.empty": "Contact number is required",
    }),
    emergencyContactNo: Joi.string().required().messages({
        "string.empty": "Emergency contact number is required",
    }),
    guardian: GuardianValidationSchema.required().messages({
        "object.base": "Guardian information is required",
    }),
    localGuardian: LocalGuardianValidationSchema.required().messages({
        "object.base": "Local guardian information is required",
    }),
    presentAddress: Joi.string().required().messages({
        "string.empty": "Present address is required",
    }),
    permanentAddress: Joi.string().required().messages({
        "string.empty": "Permanent address is required",
    }),
    profileImage: Joi.string().optional(),
    isActive: Joi.string()
        .valid("Active", "Block")
        .default("Active")
        .required()
        .messages({
            "any.only": "Status must be either Active or Block",
            "string.empty": "Status is required",
        }),
});


export default StudentValidationSchema;