export const PORT = isNaN(process.env.PORT) ? 4000 : parseInt(process.env.PORT);
export const PORT2 = isNaN(process.env.PORT2) ? 5001 : parseInt(process.env.PORT2);



import {z , ZodError} from "zod"

const ageSchema = z.number().min(18).max(100).int()

const userAge = 1



try{
    const parseUserAge =ageSchema.parse(userAge)
    console.log(parseUserAge) 
    
}
catch(error){
    if(error instanceof ZodError){
        console.log(error.errors[0].message)
    }
    else{
        console.log("unexpected error")
    }
}