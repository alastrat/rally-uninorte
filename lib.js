const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');
var uniqueValidator = require('mongoose-unique-validator');

let counter = 1;
const equipos = [
  { color: 'Amarillo', lugar: "1", lugarNombre: "Roble Amarillo", miembros: 0 },
  { color: 'Amarillo', lugar: "2", lugarNombre: "Bloque L Edificio Julio Muvdi", miembros: 0 },
  { color: 'Amarillo', lugar: "3", lugarNombre: "Coliseo los Fundadores", miembros: 0 },
  { color: 'Amarillo', lugar: "4", lugarNombre: "Bloque G - Edificio Alvaro Jaramillo V", miembros: 0 },
  { color: 'Amarillo', lugar: "5", lugarNombre: "Casa Blanca", miembros: 0 },
  { color: 'Amarillo', lugar: "6", lugarNombre: "Biblioteca Karl C. Parrish", miembros: 0 },
  { color: 'Amarillo', lugar: "7", lugarNombre: "Mapuka", miembros: 0 },
  { color: 'Amarillo', lugar: "8", lugarNombre: "Campo deportivo", miembros: 0 },
  { color: 'Azul', lugar: "1", lugarNombre: "Roble Amarrillo", miembros: 0 },
  { color: 'Azul', lugar: "2", lugarNombre: "Bloque L Edificio Julio Muvdi", miembros: 0 },
  { color: 'Azul', lugar: "3", lugarNombre: "Coliseo los Fundadores", miembros: 0 },
  { color: 'Azul', lugar: "4", lugarNombre: "Bloque G - Edificio Alvaro Jaramillo V", miembros: 0 },
  { color: 'Azul', lugar: "5", lugarNombre: "Casa Blanca", miembros: 0 },
  { color: 'Azul', lugar: "6", lugarNombre: "Biblioteca Karl C. Parrish", miembros: 0 },
  { color: 'Azul', lugar: "7", lugarNombre: "Mapuka", miembros: 0 },
  { color: 'Azul', lugar: "8", lugarNombre: "Campo deportivo", miembros: 0 },
  { color: 'Fucsia', lugar: "1", lugarNombre: "Roble Amarrillo", miembros: 0 },
  { color: 'Fucsia', lugar: "2", lugarNombre: "Bloque L Edificio Julio Muvdi", miembros: 0 },
  { color: 'Fucsia', lugar: "3", lugarNombre: "Coliseo los Fundadores", miembros: 0 },
  { color: 'Fucsia', lugar: "4", lugarNombre: "Bloque G - Edificio Alvaro Jaramillo V", miembros: 0 },
  { color: 'Fucsia', lugar: "5", lugarNombre: "Casa Blanca", miembros: 0 },
  { color: 'Fucsia', lugar: "6", lugarNombre: "Biblioteca Karl C. Parrish", miembros: 0 },
  { color: 'Fucsia', lugar: "7", lugarNombre: "Mapuka", miembros: 0 },
  { color: 'Fucsia', lugar: "8", lugarNombre: "Campo deportivo", miembros: 0 },
  { color: 'Morado', lugar: "1", lugarNombre: "Roble Amarrillo", miembros: 0 },
  { color: 'Morado', lugar: "2", lugarNombre: "Bloque L Edificio Julio Muvdi", miembros: 0 },
  { color: 'Morado', lugar: "3", lugarNombre: "Coliseo los Fundadores", miembros: 0 },
  { color: 'Morado', lugar: "4", lugarNombre: "Bloque G - Edificio Alvaro Jaramillo V", miembros: 0 },
  { color: 'Morado', lugar: "5", lugarNombre: "Casa Blanca", miembros: 0 },
  { color: 'Morado', lugar: "6", lugarNombre: "Biblioteca Karl C. Parrish", miembros: 0 },
  { color: 'Morado', lugar: "7", lugarNombre: "Mapuka", miembros: 0 },
  { color: 'Morado', lugar: "8", lugarNombre: "Campo deportivo", miembros: 0 },
  { color: 'Naranja', lugar: "1", lugarNombre: "Roble Amarrillo", miembros: 0 },
  { color: 'Naranja', lugar: "2", lugarNombre: "Bloque L Edificio Julio Muvdi", miembros: 0 },
  { color: 'Naranja', lugar: "3", lugarNombre: "Coliseo los Fundadores", miembros: 0 },
  { color: 'Naranja', lugar: "4", lugarNombre: "Bloque G - Edificio Alvaro Jaramillo V", miembros: 0 },
  { color: 'Naranja', lugar: "5", lugarNombre: "Casa Blanca", miembros: 0 },
  { color: 'Naranja', lugar: "6", lugarNombre: "Biblioteca Karl C. Parrish", miembros: 0 },
  { color: 'Naranja', lugar: "7", lugarNombre: "Mapuka", miembros: 0 },
  { color: 'Naranja', lugar: "8", lugarNombre: "Campo deportivo", miembros: 0 },
  { color: "Negro", lugar: "1", lugarNombre: "Roble Amarrillo", miembros: 0 },
  { color: "Negro", lugar: "2", lugarNombre: "Bloque L Edificio Julio Muvdi", miembros: 0 },
  { color: "Negro", lugar: "3", lugarNombre: "Coliseo los Fundadores", miembros: 0 },
  { color: "Negro", lugar: "4", lugarNombre: "Bloque G - Edificio Alvaro Jaramillo V", miembros: 0 },
  { color: "Negro", lugar: "5", lugarNombre: "Casa Blanca", miembros: 0 },
  { color: "Negro", lugar: "6", lugarNombre: "Biblioteca Karl C. Parrish", miembros: 0 },
  { color: "Negro", lugar: "7", lugarNombre: "Mapuka", miembros: 0 },
  { color: "Negro", lugar: "8", lugarNombre: "Campo deportivo", miembros: 0 },
  { color: "Blanco", lugar: "1", lugarNombre: "Roble Amarrillo", miembros: 0 },
  { color: "Blanco", lugar: "2", lugarNombre: "Bloque L Edificio Julio Muvdi", miembros: 0 },
  { color: "Blanco", lugar: "3", lugarNombre: "Coliseo los Fundadores", miembros: 0 },
  { color: "Blanco", lugar: "4", lugarNombre: "Bloque G - Edificio Alvaro Jaramillo V", miembros: 0 },
  { color: "Blanco", lugar: "5", lugarNombre: "Casa Blanca", miembros: 0 },
  { color: "Blanco", lugar: "6", lugarNombre: "Biblioteca Karl C. Parrish", miembros: 0 },
  { color: "Blanco", lugar: "7", lugarNombre: "Mapuka", miembros: 0 },
  { color: "Blanco", lugar: "8", lugarNombre: "Campo deportivo", miembros: 0 },
  { color: "Aqua", lugar: "1", lugarNombre: "Roble Amarrillo", miembros: 0 },
  { color: "Aqua", lugar: "2", lugarNombre: "Bloque L Edificio Julio Muvdi", miembros: 0 },
  { color: "Aqua", lugar: "3", lugarNombre: "Coliseo los Fundadores", miembros: 0 },
  { color: "Aqua", lugar: "4", lugarNombre: "Bloque G - Edificio Alvaro Jaramillo V", miembros: 0 },
  { color: "Aqua", lugar: "5", lugarNombre: "Casa Blanca", miembros: 0 },
  { color: "Aqua", lugar: "6", lugarNombre: "Biblioteca Karl C. Parrish", miembros: 0 },
  { color: "Aqua", lugar: "7", lugarNombre: "Mapuka", miembros: 0 },
  { color: "Aqua", lugar: "8", lugarNombre: "Campo deportivo", miembros: 0 },
  { color: "Verde", lugar: "1", lugarNombre: "Roble Amarrillo", miembros: 0 },
  { color: "Verde", lugar: "2", lugarNombre: "Bloque L Edificio Julio Muvdi", miembros: 0 },
  { color: "Verde", lugar: "3", lugarNombre: "Coliseo los Fundadores", miembros: 0 },
  { color: "Verde", lugar: "4", lugarNombre: "Bloque G - Edificio Alvaro Jaramillo V", miembros: 0 },
  { color: "Verde", lugar: "5", lugarNombre: "Casa Blanca", miembros: 0 },
  { color: "Verde", lugar: "6", lugarNombre: "Biblioteca Karl C. Parrish", miembros: 0 },
  { color: "Verde", lugar: "7", lugarNombre: "Mapuka", miembros: 0 },
  { color: "Verde", lugar: "8", lugarNombre: "Campo deportivo", miembros: 0 },
  { color: "Celeste", lugar: "1", lugarNombre: "Roble Amarrillo", miembros: 0 },
  { color: "Celeste", lugar: "2", lugarNombre: "Bloque L Edificio Julio Muvdi", miembros: 0 },
  { color: "Celeste", lugar: "3", lugarNombre: "Coliseo los Fundadores", miembros: 0 },
  { color: "Celeste", lugar: "4", lugarNombre: "Bloque G - Edificio Alvaro Jaramillo V", miembros: 0 },
  { color: "Celeste", lugar: "5", lugarNombre: "Casa Blanca", miembros: 0 },
  { color: "Celeste", lugar: "6", lugarNombre: "Biblioteca Karl C. Parrish", miembros: 0 },
  { color: "Celeste", lugar: "7", lugarNombre: "Mapuka", miembros: 0 },
  { color: "Celeste", lugar: "8", lugarNombre: "Campo deportivo", miembros: 0 }
];

const schema = {
  codigo: {
    type: "String",
    required: true,
    useCreateIndex: true,
    unique: true
  },
  apellidos: {
    type: "String",
    required: true
  },
  primer_nombre: {
    type: "String",
    required: true
  },
  segundo_nombre: "String",
  fecha_nacimiento: "String",
  ciudania: "String",
  tipo_doc: {
    type: "String",
    enum: ["CC", "TI", "CE", "PS"],
    required: true
  },
  no_doc: {
    type: "String",
    required: true,
    useCreateIndex: true,
    unique: true
  },
  lugar_expedicion: "String",
  fecha_expedicion: "String",
  programa: {
    type: "String"
  },
  tipo_registro: {
    type: "String",
    default: "automatico",
    enum: ["automatico", "manual"]
  },
  asistencia: {
    type: "Boolean",
    default: false
  },
  equipo: {
    type: "String"
  }
}

const team = {
  name: "String",
  members: "Number"
}

/* Students schema */
const studentSchema = new Schema(schema);
studentSchema.plugin(uniqueValidator);
let Student = mongoose.model('Student', studentSchema);

/* Teams schema */
const teamSchema = new Schema(team);
teamSchema.statics.findOneOrCreate = function findOneOrCreate(condition, callback) {
  const self = this
  self.findOne(condition, (err, result) => {
    return result ? callback(err, result) : self.create(condition, (err, result) => { return callback(err, result) })
  })
}
let Team = mongoose.model('Team', teamSchema);

exports.uploadStudentsInBulk = () => {
  return new Promise(async (resolve) => {
    let counter = 0;
    await Student.deleteMany()
      .then(async () => {
        const filePath = path.join(__dirname, 'records.csv');
        await fs.readFileSync(filePath, 'utf-8')
          .split(/\r?\n/).forEach(async (line) => {
            counter++
            if (counter > 1) {
              const data = line.split(';');
              await storeInDB(data);
            }
          });
      });
    return resolve(counter - 1);
  })
};

exports.newStudent = async (payload) => {
  try {
    let apellidos;
    const checkApellidos = payload.apellidos.split(' ');

    if (checkApellidos.length > 1) {
      const apellido1 = checkApellidos[0].charAt(0).toUpperCase() + checkApellidos[0].slice(1);
      const apellido2 = checkApellidos[1].charAt(0).toUpperCase() + checkApellidos[1].slice(1);
      apellidos = `${apellido1} ${apellido2}`
    } else apellidos = payload.apellidos.charAt(0).toUpperCase() + payload.apellidos.slice(1);

    const primer_nombre = payload.primer_nombre.charAt(0).toUpperCase() + payload.primer_nombre.slice(1);
    const segundo_nombre = payload.segundo_nombre.charAt(0).toUpperCase() + payload.segundo_nombre.slice(1);

    const studentObj = {
      ...payload,
      apellidos,
      primer_nombre,
      segundo_nombre,
      tipo_registro: 'manual'
    }

    const student = new Student(studentObj);
    await student.save()
    return student;
  } catch (error) {
    return error;
  }
};

exports.findStudents = async (payload) => {
  try {
    let query = {};
    await Object.keys(payload).forEach(key => {
      if (key === "asistencia") {
        query[key] = payload[key]
      } else query[key] = { $regex: "^" + payload[key] }
    });
    const students = await Student.find(query);
    const stats = { registros: students.length }
    return { stats, students };
  } catch (error) {
    return error;
  }
};

exports.getTeamResults = async (payload) => {
  try {
    const teams = await Team.find(payload);
    const students = await Student.find({ "asistencia": true }).count();
    const teamsList = [];
    for (let i = 0; i < teams.length; i++) {
      teamsList.push({ ...teams[i]._doc, ratio: (teams[i].members * 100 / students).toFixed(0) })
    }
    return teamsList;
  } catch (error) {
    return error;
  }
}

exports.checkin = async (payload) => {
  try {
    const student = await Student.findOne(payload);
    if (!student) throw new Error("Estudiante no encontrado. Debe registrarse primero.");
    if (student.asistencia) throw new Error(`El estudiante con el código ${student.codigo} ya ha sido registrado.`);
    student.asistencia = true;
    student.equipo = getTeamBasedInTurn(counter);
    await student.save();
    let teamCount = await Team.findOne({ name: student.equipo.split('_')[0] });
    teamCount.members++
    await teamCount.save();
    counter++;
    return student
  } catch (error) {
    return error;
  }
};

exports.demo = async (base) => {
  await (async function () {
    let index = 0;
    for (index; index < base; index++) {
      await getTeamBasedInTurn(index);
    }
    if (index == base) {
      console.log('-equipos-> ', equipos);
      return equipos;
    }
  })()
}


const storeInDB = async (array) => {
  let data = {};
  const schKeys = Object.keys(schema);
  for (let index = 0; index < array.length; index++) {
    const field = schKeys[index];
    let input = array[index];
    data[field] = input
  }
  const student = await Student.create(data);
  await student.save();
};

const getTeamBasedInTurn = (turno) => {
  const vuelta = Math.ceil(turno / 80);
  const index = (turno - 80 * (vuelta - 1)) - 1;
  equipos[index].miembros++;
  return `${equipos[index].color}_${equipos[index].lugar}`;
}

