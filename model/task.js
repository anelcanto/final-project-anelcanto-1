import mongoose from "mongoose";

taskSchema = new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
    description:{
        type: String,
        required: false
    },
    due_date:{
        type: Date,
        required: false
    },
    completed:{
        type: Boolean,
        required: true
    },
    priority:{
        type: Number,
        required: true,
        min: 1,
        max: 4
    },
    labels:{
        type: [String],
        required: false
    },
    // user_id:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "User",
    //     required: true
    // },
    // project_id:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Project",
    //     required: false
    // },
    // section_id:{
    //     type: mongoose.Schema.Types.ObjectId,
    //     ref: "Section",
    //     required: false
    // },
    created_at:{
        type: Date,
        required: true
    },
    updated_at:{
        type: Date,
        required: true
    }

})

/** 
    add schema with the following fields:
    - id
	- title
	- description
	- due_date
	- completed
	- priority
	- labels (array of strings)
	- user_id (references User)
	- project_id (references Project, optional)
	- section_id (references Section, optional)
	- created_at
	- updated_at

*/