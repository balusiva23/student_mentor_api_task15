const express = require('express');
const router = express.Router();
const mentorController = require('../controllers/mentorController');
const studentController = require('../controllers/studentController');

router.post('/mentors', mentorController.createMentor);
router.post('/students', studentController.createStudent);
router.post('/assign-student/:mentorId', mentorController.assignStudent);
router.put('/assign-mentor/:studentId', studentController.assignMentor);
router.get('/students/:mentorId', mentorController.getStudentsForMentor);

module.exports = router;
