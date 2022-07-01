import mongoose from "mongoose";

const Project = new mongoose.Model("project",{
    Name : {
        type: "string",
        required: true
    },
    Repository : {
        type: "string"
    },
    ProgramingLang : {
        type: "string"
    },
    Description : {
        type: "string"
    }
})

export default Project;