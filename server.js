const Express = require('express');
const server = Express();
const lib = require('./lib.js');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv').config();
var cors = require('cors');

const { DBUSER, DBPASS, DBHOST, DBPORT, DBNAME } = process.env;

(async function () {
    const dbConnection = `mongodb://${DBUSER}:${DBPASS}@${DBHOST}:${DBPORT}/${DBNAME}`;
    mongoose.connection.on('error', error => {
        console.log(`MongoDB Error: ${error}`);
    });
    await mongoose.connect(dbConnection, { useNewUrlParser: true });
})()

server.use(cors());
server.use(bodyParser.urlencoded({ extended: true }));
server.use(bodyParser.json());

server.post('/new-students-in-bulk', async (req, res) => {
    const students = await lib.uploadStudentsInBulk();
    if (students instanceof Error) return res.status(400).json(students.message);
    return res.status(200).json({ message: `Se agregaron [${students}] estudiantes exitosamente.` });
});

server.post('/new-student', async (req, res) => {
    const student = await lib.newStudent(req.body);
    if (student instanceof Error) return res.status(400).json(student.message);
    return res.status(200).json({ student });
});

server.get('/find-students', async (req, res) => {
    const { query } = req;
    const studentsRecords = await lib.findStudents(query);
    if (studentsRecords instanceof Error) return res.status(400).json(studentsRecords.message);
    if (studentsRecords.students.length < 1) return res.status(400).json({ error: 'No se encontraron registros con los parametros ingresados.' });
    return res.status(200).json({ students: studentsRecords });
});

server.post('/checkin-student', async (req, res) => {
    const { body } = req;
    const student = await lib.checkin(body);
    if (student instanceof Error) return res.status(400).json(student.message);
    return res.status(200).json({ student });
});

server.post('/results-teams', async (req, res) => {
    const equipos = await lib.getTeamResults(req.body);
    return res.status(200).json({ equipos });
});

server.get('/demo', async (req, res) => {
    const equipos = await lib.demo(req.query.base);
    return res.status(200).json({ equipos });
});

const port = 8001;
server.listen(port, async () => {
    console.log(`Server {rocking} and running at port ${port}`);
});