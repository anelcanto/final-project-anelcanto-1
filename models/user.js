import Mongoose from 'mongoose';

const userSchema = new Mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        minlength: 3,
        maxlength: 20,
    },
    hashed_password: {
        type: String,
        required: true,
        minlength: 8,
        maxlength: 1024
    },
    email: {
        type: String,
        required: true,
        unique: true,
        minlength: 5,
        maxlength: 50
    },
    first_name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    last_name: {
        type: String,
        required: true,
        minlength: 2,
        maxlength: 20
    },
    role: {
        type: String,
        required: true,
        enum: ['admin', 'user'],
        default: 'user'
    },
}, { timestamps: true });


export default Mongoose.model('User', userSchema);
