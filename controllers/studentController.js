const Mentor = require('../models/Mentor');
const Student = require('../models/Student');

exports.createStudent = async (req, res) => {
  try {
    const student = new Student(req.body);
    await student.save();
    res.status(201).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

exports.assignMentor = async (req, res) => {
  try {
    const student = await Student.findById(req.params.studentId);
    student.mentor = req.body.mentorId;
    await student.save();

    res.status(200).json(student);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};
