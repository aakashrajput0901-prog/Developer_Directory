const mongoose = require('mongoose');

const DeveloperSchema = new mongoose.Schema({
    // Defines a required field 'name' of type String
    name: {
        type: String,
        required: true
    },
    //  Defines a required string field that must be one of the specified values
    role: {
        type: String,
        required: true, 
        enum: ['Frontend', 'Backend', 'Fullstack', 'Devops', 'Data Scientist']
    },
    // Defines a required field 'techstack' which is an array of strings
    techstack: {
        type: [String],
        required: true
    },                        // will store array of tags/technologies
    // Defines a required field 'experience' of type Number with a minimum value of 0
    experience: {
        type: Number, 
        required: true,
        min: 0
    }
}, {
    timestamps: true      //Adds 'createdAt' and 'updatedAt' fields automatically
});


module.exports = mongoose.model('Developer', DeveloperSchema); //Exports the Mongoose model, which will interact will interact with the 'developers' collection
