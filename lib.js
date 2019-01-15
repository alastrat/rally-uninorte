const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');
var uniqueValidator = require('mongoose-unique-validator');

let counter = 1;
const equipos = [
  {
    color: 'Amarillo',
    lugar: "Roble Amarillo",
    miembros: 0
  },
  {
    color: 'Amarillo',
    lugar: "Bloque L Edificio Julio Muvdi",
    miembros: 0
  },
  {
    color: 'Amarillo',
    lugar: "Coliseo los Fundadores",
    miembros: 0
  },
  {
    color: 'Amarillo',
    lugar: "Bloque G - Edificio Alvaro Jaramillo V",
    miembros: 0
  },
  {
    color: 'Amarillo',
    lugar: "Casa Blanca",
    miembros: 0
  },
  {
    color: 'Amarillo',
    lugar: "Biblioteca Karl C. Parrish",
    miembros: 0
  },
  {
    color: 'Amarillo',
    lugar: "Mapuka",
    miembros: 0,
  },
  {
    color: 'Amarillo',
    lugar: "Campo deportivo",
    miembros: 0,
  },
  {
    color: 'Azul',
    lugar: "Roble Amarrillo",
    miembros: 0
  },
  {
    color: 'Azul',
    lugar: "Bloque L Edificio Julio Muvdi",
    miembros: 0
  },
  {
    color: 'Azul',
    lugar: "Coliseo los Fundadores",
    miembros: 0
  },
  {
    color: 'Azul',
    lugar: "Bloque G - Edificio Alvaro Jaramillo V",
    miembros: 0
  },
  {
    color: 'Azul',
    lugar: "Casa Blanca",
    miembros: 0
  },
  {
    color: 'Azul',
    lugar: "Biblioteca Karl C. Parrish",
    miembros: 0
  },
  {
    color: 'Azul',
    lugar: "Mapuka",
    miembros: 0,
  },
  {
    color: 'Azul',
    lugar: "Campo deportivo",
    miembros: 0,
  },
  {
    color: 'Fucsia',
    lugar: "Roble Amarrillo",
    miembros: 0
  },
  {
    color: 'Fucsia',
    lugar: "Bloque L Edificio Julio Muvdi",
    miembros: 0
  },
  {
    color: 'Fucsia',
    lugar: "Coliseo los Fundadores",
    miembros: 0
  },
  {
    color: 'Fucsia',
    lugar: "Bloque G - Edificio Alvaro Jaramillo V",
    miembros: 0
  },
  {
    color: 'Fucsia',
    lugar: "Casa Blanca",
    miembros: 0
  },
  {
    color: 'Fucsia',
    lugar: "Biblioteca Karl C. Parrish",
    miembros: 0
  },
  {
    color: 'Fucsia',
    lugar: "Mapuka",
    miembros: 0,
  },
  {
    color: 'Fucsia',
    lugar: "Campo deportivo",
    miembros: 0,
  },
  {
    color: 'Morado',
    lugar: "Roble Amarrillo",
    miembros: 0
  },
  {
    color: 'Morado',
    lugar: "Bloque L Edificio Julio Muvdi",
    miembros: 0
  },
  {
    color: 'Morado',
    lugar: "Coliseo los Fundadores",
    miembros: 0
  },
  {
    color: 'Morado',
    lugar: "Bloque G - Edificio Alvaro Jaramillo V",
    miembros: 0
  },
  {
    color: 'Morado',
    lugar: "Casa Blanca",
    miembros: 0
  },
  {
    color: 'Morado',
    lugar: "Biblioteca Karl C. Parrish",
    miembros: 0
  },
  {
    color: 'Morado',
    lugar: "Mapuka",
    miembros: 0,
  },
  {
    color: 'Morado',
    lugar: "Campo deportivo",
    miembros: 0,
  },
  {
    color: 'Naranja',
    lugar: "Roble Amarrillo",
    miembros: 0
  },
  {
    color: 'Naranja',
    lugar: "Bloque L Edificio Julio Muvdi",
    miembros: 0
  },
  {
    color: 'Naranja',
    lugar: "Coliseo los Fundadores",
    miembros: 0
  },
  {
    color: 'Naranja',
    lugar: "Bloque G - Edificio Alvaro Jaramillo V",
    miembros: 0
  },
  {
    color: 'Naranja',
    lugar: "Casa Blanca",
    miembros: 0
  },
  {
    color: 'Naranja',
    lugar: "Biblioteca Karl C. Parrish",
    miembros: 0
  },
  {
    color: 'Naranja',
    lugar: "Mapuka",
    miembros: 0,
  },
  {
    color: 'Naranja',
    lugar: "Campo deportivo",
    miembros: 0,
  },
  {
    color: "Negro",
    lugar: "Roble Amarrillo",
    miembros: 0
  },
  {
    color: "Negro",
    lugar: "Bloque L Edificio Julio Muvdi",
    miembros: 0
  },
  {
    color: "Negro",
    lugar: "Coliseo los Fundadores",
    miembros: 0
  },
  {
    color: "Negro",
    lugar: "Bloque G - Edificio Alvaro Jaramillo V",
    miembros: 0
  },
  {
    color: "Negro",
    lugar: "Casa Blanca",
    miembros: 0
  },
  {
    color: "Negro",
    lugar: "Biblioteca Karl C. Parrish",
    miembros: 0
  },
  {
    color: "Negro",
    lugar: "Mapuka",
    miembros: 0,
  },
  {
    color: "Negro",
    lugar: "Campo deportivo",
    miembros: 0,
  },
  {
    color: "Blanco",
    lugar: "Roble Amarrillo",
    miembros: 0
  },
  {
    color: "Blanco",
    lugar: "Bloque L Edificio Julio Muvdi",
    miembros: 0
  },
  {
    color: "Blanco",
    lugar: "Coliseo los Fundadores",
    miembros: 0
  },
  {
    color: "Blanco",
    lugar: "Bloque G - Edificio Alvaro Jaramillo V",
    miembros: 0
  },
  {
    color: "Blanco",
    lugar: "Casa Blanca",
    miembros: 0
  },
  {
    color: "Blanco",
    lugar: "Biblioteca Karl C. Parrish",
    miembros: 0
  },
  {
    color: "Blanco",
    lugar: "Mapuka",
    miembros: 0,
  },
  {
    color: "Blanco",
    lugar: "Campo deportivo",
    miembros: 0,
  }, {
    color: "Aqua",
    lugar: "Roble Amarrillo",
    miembros: 0
  },
  {
    color: "Aqua",
    lugar: "Bloque L Edificio Julio Muvdi",
    miembros: 0
  },
  {
    color: "Aqua",
    lugar: "Coliseo los Fundadores",
    miembros: 0
  },
  {
    color: "Aqua",
    lugar: "Bloque G - Edificio Alvaro Jaramillo V",
    miembros: 0
  },
  {
    color: "Aqua",
    lugar: "Casa Blanca",
    miembros: 0
  },
  {
    color: "Aqua",
    lugar: "Biblioteca Karl C. Parrish",
    miembros: 0
  },
  {
    color: "Aqua",
    lugar: "Mapuka",
    miembros: 0,
  },
  {
    color: "Aqua",
    lugar: "Campo deportivo",
    miembros: 0,
  },
  {
    color: "Verde",
    lugar: "Roble Amarrillo",
    miembros: 0
  },
  {
    color: "Verde",
    lugar: "Bloque L Edificio Julio Muvdi",
    miembros: 0
  },
  {
    color: "Verde",
    lugar: "Coliseo los Fundadores",
    miembros: 0
  },
  {
    color: "Verde",
    lugar: "Bloque G - Edificio Alvaro Jaramillo V",
    miembros: 0
  },
  {
    color: "Verde",
    lugar: "Casa Blanca",
    miembros: 0
  },
  {
    color: "Verde",
    lugar: "Biblioteca Karl C. Parrish",
    miembros: 0
  },
  {
    color: "Verde",
    lugar: "Mapuka",
    miembros: 0,
  },
  {
    color: "Verde",
    lugar: "Campo deportivo",
    miembros: 0,
  },
  {
    color: "Celeste",
    lugar: "Roble Amarrillo",
    miembros: 0
  },
  {
    color: "Celeste",
    lugar: "Bloque L Edificio Julio Muvdi",
    miembros: 0
  },
  {
    color: "Celeste",
    lugar: "Coliseo los Fundadores",
    miembros: 0
  },
  {
    color: "Celeste",
    lugar: "Bloque G - Edificio Alvaro Jaramillo V",
    miembros: 0
  },
  {
    color: "Celeste",
    lugar: "Casa Blanca",
    miembros: 0
  },
  {
    color: "Celeste",
    lugar: "Biblioteca Karl C. Parrish",
    miembros: 0
  },
  {
    color: "Celeste",
    lugar: "Mapuka",
    miembros: 0,
  },
  {
    color: "Celeste",
    lugar: "Campo deportivo",
    miembros: 0,
  }
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
      }else query[key] = { $regex: "^" + payload[key] }
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
    let index = 0
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

