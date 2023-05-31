import Mongoose from "mongoose";

const taskSchema = new Mongoose.Schema({
    title:{
        type: String,
        required: true
    },    
    completed:{
        type: Boolean,
        required: true,
        default: false
    },
    description:{
        type: String,
        required: false
    },
    due_date:{
        type: Date,
        required: false
    },
    priority:{
        type: Number,
        required: true,
        min: 1,
        max: 4,
        default: 1
    },
    labels:{
        type: [String],
        required: false
    },
}, { 
    timestamps: true // this option adds `createdAt` and `updatedAt` fields to your schema.
});

export default Mongoose.model('Task', taskSchema);