import Mongoose from "mongoose";

const taskSchema = new Mongoose.Schema({
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
        required: true,
        default: Date.now
    },
    updated_at:{
        type: Date,
        required: true,
        default: Date.now
    }
})

export default Mongoose.model('Task', taskSchema);
