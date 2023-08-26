const Mentor = require('../models/Mentor');
const Student = require('../models/Student');

exports.createMentor = async (req, res) => {
  try {
    const mentor = new Mentor(req.body);
    await mentor.save();
    res.status(201).json(mentor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.assignStudent = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId);
    const studentIds = req.body.studentIds;

    mentor.students.push(...studentIds);
    await mentor.save();

    res.status(200).json(mentor);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.getStudentsForMentor = async (req, res) => {
  try {
    const mentor = await Mentor.findById(req.params.mentorId).populate('students');
    res.status(200).json(mentor.students);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
