const express = require('express');
const router = express.Router();
const Developer = require('../models/Developer');


// to save developer details
router.post('/', async (req, res) => {
    try{
        const  {name, role, techStack, experience } = req.body;
        //Basic validation check
        if(!name || !role || !techStack || experience === undefined){
            return res.status(400).json({msg: 'Please enter all fields'});
        }
        const newDeveloper = new Developer({
            name, 
            role,
            techstack:techStack.split(',').map(tag=> tag.trim()),
            experience
        });

        const developer = await newDeveloper.save();
        res.json(developer);
    } catch(err) {
        console.log(err.message);
        res.status(500).send('Server error');
    }
});

//to get list of developers
router.get('/', async(req,res) => {
    try{
        const { role, tech } = req.query;
        let query = {};

        if(role){
            query.role = role;  //Filter by role
        }

        if(tech){
            // Filter by technology (case insensitive) in the stored `techstack` array
            query.techstack = { $in: [new RegExp(tech, 'i')] };
        }

        // Use Mongoose `.sort()` to order by name
        const developers = await Developer.find(query).sort({ name: 1 });
        res.json(developers);
    } catch(err) {
        console.error(err.message);
        res.status(500).send('Server error');
    }
});

module.exports = router;

