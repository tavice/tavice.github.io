const express = require('express')
const router = express.Router()
const Equipment = require('../models/equipment.js')


// Seed
const equipmentSeed = require('../models/seed.js');

router.get('/seed', (req, res) => {
	Equipment.deleteMany({}, (error, allEquipment) => {});

	Equipment.create(equipmentSeed, (error, data) => {
		res.redirect('/equipment');
	});
});


// Routes / Controllers
// Seed







//Routes - Induces
//Index
router.get('/', (req, res) => {
    Equipment.find({}, (error, allEquipment) => {
        res.render('index.ejs', {
            equipment: allEquipment, 
        });
    });
});
//New

//Delete

//Update

//Create

//Edit

//Show


module.exports = router