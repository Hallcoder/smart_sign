import Joi from "joi";

export const POST = 'post';
export const GET = 'get';
export const DELETE = 'delete';
export const PUT = 'put';
export const api = '';
export const permissionFormSchema = Joi.object({
        studentNames:Joi.string().required().min(1),
        departureDate:Joi.date().required(),
        departureTime:Joi.string().required(),
        returnDate:Joi.date().required(),
        returnTime:Joi.string().required(),
        issuer:Joi.string().required().min(5),
        reason:Joi.string().required(),
})