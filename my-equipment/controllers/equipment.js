const express = require('express');
const router = express.Router();
const Equipment = require('../models/equipment.js');



//file upload
//https://www.geeksforgeeks.org/upload-and-retrieve-image-on-mongodb-using-mongoose/
//determines the directory where uploaded files will be stored, and a filename function that determines the name of the file on disk.
// we want to use the multer middleware and the use of the single method to extract the uploaded file from the request.

const multer = require('multer'); //for file upload https://expressjs.com/en/resources/middleware/multer.html
const path = require('path');
const fs = require('fs');


const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        cb(null, "public/uploads")
    },
    filename: (req, file, cb) => {
        const ext = file.mimetype.split("/")[1];
        cb(null, `${file.fieldname}-${Date.now()}.${ext}`);
      },
    
});

//use fileFilter function to the multer configuration object to only accept files of a certain type
const fileFilter = function (req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png|gif)$/)) {
        return cb(new Error('Only image files are allowed!'));
    }
    cb(null, true);
};


const upload = multer({ 
    storage: storage, 
    fileFilter: fileFilter,
});





// Seed
// const equipmentSeed = require('../models/seed.js');

// router.get('/seed', (req, res) => {
// 	Equipment.deleteMany({}, (error, allEquipment) => {});

// 	Equipment.create(equipmentSeed, (error, data) => {
// 		res.redirect('/equipment');
// 	});
// });





//Routes - Induces
//Index
router.get('/', (req, res) => {
    Equipment.find({img: {$exists: true}}, (error, allEquipment) => { //only return equipment objects that have the img property set, so that you don't get errors when trying to display equipment objects without images.
        if (error) {
            console.log(error);
            res.status(500).send('An error occurred', error);
        }
        else {
           // res.send(allEquipment)
        res.render('index.ejs', {
            equipment: allEquipment,
        });
    }});
});


//New
router.get('/new', (req, res) => {
    res.render('new.ejs');
});

//Delete

//Update

//Create


router.post('/', upload.single('img'), (req, res, next) => {

    // Check if a file was uploaded
    if (!req.file) {
        res.status(400).send('No file uploaded');
        console.log(upload);
        return;
    }

    console.log(req.file);

    // req.body contains the form data other than the file, making sure we change the value of our form to a boolean
    if (req.body.isDriveable === 'on') {
        req.body.isDriveable = true;
    } else {
        req.body.isDriveable = false;
    }

    // Use the buffer property of req.file to access the file data
    const newEquipment = {
        year: req.body.year,
        description: req.body.description,
        model: req.body.model,
        purchase: req.body.purchase,
        isDriveable: req.body.isDriveable,
        location: req.body.location,
        currentUser: req.body.currentUser,
        img: {
            data: req.file.buffer,
            contentType: req.file.mimetype
        }
    };

    Equipment.create( newEquipment, (error, createdEquipment) => {
        if (error) {
            console.log(error);
            res.send(error);
        } else {
            createdEquipment.save()
            console.log(createdEquipment);
            res.redirect('/equipment');
        }
    });
});


//Edit


//Show
router.get('/:id', (req, res) => {
    Equipment.findById(req.params.id, (err, foundEquipment) => {
        res.render('show.ejs', {
            equipment: foundEquipment
        })

    })
})






module.exports = router