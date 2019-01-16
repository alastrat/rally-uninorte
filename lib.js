const fs = require('fs');
const mongoose = require('mongoose');
const Schema = mongoose.Schema;
const path = require('path');
const uniqueValidator = require('mongoose-unique-validator');
const json2csv = require('json2csv').parse;

const equipos = [
  {
    id: 1,
    name: 'Roble Amarillo',
    color: 'Amarillo',
    miembros: 0
  },
  {
    id: 1,
    name: 'Roble Amarillo',
    color: 'Azul',
    miembros: 0
  },
  {
    id: 1,
    name: 'Roble Amarillo',
    color: 'Fucsia',
    miembros: 0
  },
  {
    id: 1,
    name: 'Roble Amarillo',
    color: 'Morado',
    miembros: 0
  },
  {
    id: 1,
    name: 'Roble Amarillo',
    color: 'Naranja',
    miembros: 0
  },
  {
    id: 1,
    name: 'Roble Amarillo',
    color: 'Negro',
    miembros: 0
  },
  {
    id: 1,
    name: 'Roble Amarillo',
    color: 'Blanco',
    miembros: 0
  },
  {
    id: 1,
    name: 'Roble Amarillo',
    color: 'Aqua',
    miembros: 0
  },
  {
    id: 1,
    name: 'Roble Amarillo',
    color: 'Verde',
    miembros: 0
  },
  {
    id: 1,
    name: 'Roble Amarillo',
    color: 'Celeste',
    miembros: 0
  },
  {
    id: 2,
    name: 'Bloque L Edificio Julio Muvdi.',
    color: 'Amarillo',
    miembros: 0
  },
  {
    id: 2,
    name: 'Bloque L Edificio Julio Muvdi.',
    color: 'Azul',
    miembros: 0
  },
  {
    id: 2,
    name: 'Bloque L Edificio Julio Muvdi.',
    color: 'Fucsia',
    miembros: 0
  },
  {
    id: 2,
    name: 'Bloque L Edificio Julio Muvdi.',
    color: 'Morado',
    miembros: 0
  },
  {
    id: 2,
    name: 'Bloque L Edificio Julio Muvdi.',
    color: 'Naranja',
    miembros: 0
  },
  {
    id: 2,
    name: 'Bloque L Edificio Julio Muvdi.',
    color: 'Negro',
    miembros: 0
  },
  {
    id: 2,
    name: 'Bloque L Edificio Julio Muvdi.',
    color: 'Blanco',
    miembros: 0
  },
  {
    id: 2,
    name: 'Bloque L Edificio Julio Muvdi.',
    color: 'Aqua',
    miembros: 0
  },
  {
    id: 2,
    name: 'Bloque L Edificio Julio Muvdi.',
    color: 'Verde',
    miembros: 0
  },
  {
    id: 2,
    name: 'Bloque L Edificio Julio Muvdi.',
    color: 'Celeste',
    miembros: 0
  },
  {
    id: 3,
    name: 'Coliseo los Fundadores.',
    color: 'Amarillo',
    miembros: 0
  },
  {
    id: 3,
    name: 'Coliseo los Fundadores.',
    color: 'Azul',
    miembros: 0
  },
  {
    id: 3,
    name: 'Coliseo los Fundadores.',
    color: 'Fucsia',
    miembros: 0
  },
  {
    id: 3,
    name: 'Coliseo los Fundadores.',
    color: 'Morado',
    miembros: 0
  },
  {
    id: 3,
    name: 'Coliseo los Fundadores.',
    color: 'Naranja',
    miembros: 0
  },
  {
    id: 3,
    name: 'Coliseo los Fundadores.',
    color: 'Negro',
    miembros: 0
  },
  {
    id: 3,
    name: 'Coliseo los Fundadores.',
    color: 'Blanco',
    miembros: 0
  },
  {
    id: 3,
    name: 'Coliseo los Fundadores.',
    color: 'Aqua',
    miembros: 0
  },
  {
    id: 3,
    name: 'Coliseo los Fundadores.',
    color: 'Verde',
    miembros: 0
  },
  {
    id: 3,
    name: 'Coliseo los Fundadores.',
    color: 'Celeste',
    miembros: 0
  },
  {
    id: 4,
    name: 'Bloque G - Edificio Alvaro Jaramillo V.',
    color: 'Amarillo',
    miembros: 0
  },
  {
    id: 4,
    name: 'Bloque G - Edificio Alvaro Jaramillo V.',
    color: 'Azul',
    miembros: 0
  },
  {
    id: 4,
    name: 'Bloque G - Edificio Alvaro Jaramillo V.',
    color: 'Fucsia',
    miembros: 0
  },
  {
    id: 4,
    name: 'Bloque G - Edificio Alvaro Jaramillo V.',
    color: 'Morado',
    miembros: 0
  },
  {
    id: 4,
    name: 'Bloque G - Edificio Alvaro Jaramillo V.',
    color: 'Naranja',
    miembros: 0
  },
  {
    id: 4,
    name: 'Bloque G - Edificio Alvaro Jaramillo V.',
    color: 'Negro',
    miembros: 0
  },
  {
    id: 4,
    name: 'Bloque G - Edificio Alvaro Jaramillo V.',
    color: 'Blanco',
    miembros: 0
  },
  {
    id: 4,
    name: 'Bloque G - Edificio Alvaro Jaramillo V.',
    color: 'Aqua',
    miembros: 0
  },
  {
    id: 4,
    name: 'Bloque G - Edificio Alvaro Jaramillo V.',
    color: 'Verde',
    miembros: 0
  },
  {
    id: 4,
    name: 'Bloque G - Edificio Alvaro Jaramillo V.',
    color: 'Celeste',
    miembros: 0
  },
  {
    id: 5,
    name: 'Casa Blanca.',
    color: 'Amarillo',
    miembros: 0
  },
  {
    id: 5,
    name: 'Casa Blanca.',
    color: 'Azul',
    miembros: 0
  },
  {
    id: 5,
    name: 'Casa Blanca.',
    color: 'Fucsia',
    miembros: 0
  },
  {
    id: 5,
    name: 'Casa Blanca.',
    color: 'Morado',
    miembros: 0
  },
  {
    id: 5,
    name: 'Casa Blanca.',
    color: 'Naranja',
    miembros: 0
  },
  {
    id: 5,
    name: 'Casa Blanca.',
    color: 'Negro',
    miembros: 0
  },
  {
    id: 5,
    name: 'Casa Blanca.',
    color: 'Blanco',
    miembros: 0
  },
  {
    id: 5,
    name: 'Casa Blanca.',
    color: 'Aqua',
    miembros: 0
  },
  {
    id: 5,
    name: 'Casa Blanca.',
    color: 'Verde',
    miembros: 0
  },
  {
    id: 5,
    name: 'Casa Blanca.',
    color: 'Celeste',
    miembros: 0
  },
  {
    id: 6,
    name: 'Biblioteca Karl C. Parrish.',
    color: 'Amarillo',
    miembros: 0
  },
  {
    id: 6,
    name: 'Biblioteca Karl C. Parrish.',
    color: 'Azul',
    miembros: 0
  },
  {
    id: 6,
    name: 'Biblioteca Karl C. Parrish.',
    color: 'Fucsia',
    miembros: 0
  },
  {
    id: 6,
    name: 'Biblioteca Karl C. Parrish.',
    color: 'Morado',
    miembros: 0
  },
  {
    id: 6,
    name: 'Biblioteca Karl C. Parrish.',
    color: 'Naranja',
    miembros: 0
  },
  {
    id: 6,
    name: 'Biblioteca Karl C. Parrish.',
    color: 'Negro',
    miembros: 0
  },
  {
    id: 6,
    name: 'Biblioteca Karl C. Parrish.',
    color: 'Blanco',
    miembros: 0
  },
  {
    id: 6,
    name: 'Biblioteca Karl C. Parrish.',
    color: 'Aqua',
    miembros: 0
  },
  {
    id: 6,
    name: 'Biblioteca Karl C. Parrish.',
    color: 'Verde',
    miembros: 0
  },
  {
    id: 6,
    name: 'Biblioteca Karl C. Parrish.',
    color: 'Celeste',
    miembros: 0
  },
  {
    id: 7,
    name: 'Mapuka.',
    color: 'Amarillo',
    miembros: 0
  },
  {
    id: 7,
    name: 'Mapuka.',
    color: 'Azul',
    miembros: 0
  },
  {
    id: 7,
    name: 'Mapuka.',
    color: 'Fucsia',
    miembros: 0
  },
  {
    id: 7,
    name: 'Mapuka.',
    color: 'Morado',
    miembros: 0
  },
  {
    id: 7,
    name: 'Mapuka.',
    color: 'Naranja',
    miembros: 0
  },
  {
    id: 7,
    name: 'Mapuka.',
    color: 'Negro',
    miembros: 0
  },
  {
    id: 7,
    name: 'Mapuka.',
    color: 'Blanco',
    miembros: 0
  },
  {
    id: 7,
    name: 'Mapuka.',
    color: 'Aqua',
    miembros: 0
  },
  {
    id: 7,
    name: 'Mapuka.',
    color: 'Verde',
    miembros: 0
  },
  {
    id: 7,
    name: 'Mapuka.',
    color: 'Celeste',
    miembros: 0
  },
  {
    id: 8,
    name: 'Campo deportivo.',
    color: 'Amarillo',
    miembros: 0
  },
  {
    id: 8,
    name: 'Campo deportivo.',
    color: 'Azul',
    miembros: 0
  },
  {
    id: 8,
    name: 'Campo deportivo.',
    color: 'Fucsia',
    miembros: 0
  },
  {
    id: 8,
    name: 'Campo deportivo.',
    color: 'Morado',
    miembros: 0
  },
  {
    id: 8,
    name: 'Campo deportivo.',
    color: 'Naranja',
    miembros: 0
  },
  {
    id: 8,
    name: 'Campo deportivo.',
    color: 'Negro',
    miembros: 0
  },
  {
    id: 8,
    name: 'Campo deportivo.',
    color: 'Blanco',
    miembros: 0
  },
  {
    id: 8,
    name: 'Campo deportivo.',
    color: 'Aqua',
    miembros: 0
  },
  {
    id: 8,
    name: 'Campo deportivo.',
    color: 'Verde',
    miembros: 0
  },
  {
    id: 8,
    name: 'Campo deportivo.',
    color: 'Celeste',
    miembros: 0
  },
]

const schema = {
  codigo: {
    type: "String",
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
  tipo_doc: {
    type: "String",
    enum: ["CC", "TI", "CE", "PS", "RC"],
    required: true
  },
  no_doc: {
    type: "String",
    required: true,
    useCreateIndex: true,
    unique: true
  },
  financiamiento: "String",
  tel_permanente: "String",
  celular: "String",
  email_particular: "String",
  email_uninorte: "String",
  programa: "String",
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
  },
  turno: {
    type: "Number",
    default: 0
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
      const apellido1 = checkApellidos[0].charAt(0).toLowerCase() + checkApellidos[0].slice(1);
      const apellido2 = checkApellidos[1].charAt(0).toLowerCase() + checkApellidos[1].slice(1);
      apellidos = `${apellido1} ${apellido2}`
    } else apellidos = payload.apellidos.charAt(0).toLowerCase() + payload.apellidos.slice(1);

    const primer_nombre = payload.primer_nombre.charAt(0).toLowerCase() + payload.primer_nombre.slice(1);
    const segundo_nombre = payload.segundo_nombre.charAt(0).toLowerCase() + payload.segundo_nombre.slice(1);

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
    const students = await Student.find(query).limit(5);
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

exports.resetTeams = async () => {
  await Team.updateMany({}, { $set: { members: 0 } });
  return await Team.find().select(['name', 'members']);
}

exports.checkin = async (payload) => {
  try {
    /* TODO: GET COUNTER FROM DB */
    const counter = await getTurnFromDB();
    const student = await Student.findOne(payload);
    if (!student) throw new Error("Estudiante no encontrado. Debe registrarse primero.");
    if (student.asistencia) throw new Error(`El estudiante con el código ${student.codigo} ya ha sido registrado.`);
    student.asistencia = true;
    student.turno = counter;
    student.equipo = await getTeamBasedInTurn(counter);
    await student.save();
    let teamCount = await Team.findOne({ name: student.equipo.split('_')[0] });
    teamCount.members++
    await teamCount.save();
    // counter++;
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

exports.getCSVFile = async () => {
  try {
    const fields = ["codigo", "apellidos", "primer_nombre", "segundo_nombre", "tipo_doc", "no_doc", "financiamiento", "programa", "equipo"]
    const data = await Student.find({ asistencia: true })
      .select(fields)

    const opts = { fields };
    const csv = json2csv(data, opts);
    return csv;
  } catch (error) {
    return error
  }
}

exports.colorSummary = async (payload) => {
  const response = {
    name: '',
    1: { subcat: 'Biblioteca Karl C. Parrish', miembros: 0, ratio: 0 },
    2: { subcat: 'Bloque G  Edificio Alvaro Jaramillo V', miembros: 0, ratio: 0 },
    3: { subcat: 'Bloque L Edificio Julio Muvdi', miembros: 0, ratio: 0 },
    4: { subcat: 'Campo Deportivo', miembros: 0, ratio: 0 },
    5: { subcat: 'Casa Blanca', miembros: 0, ratio: 0 },
    6: { subcat: 'Coliseo Los Fundadores', miembros: 0, ratio: 0 },
    7: { subcat: 'Mapuka', miembros: 0, ratio: 0 },
    8: { subcat: 'Roble Amarrillo', miembros: 0, ratio: 0 },
  }
  const students = await Student.find({ equipo: { $regex: "^" + payload.color }, asistencia: true });

  for (let i = 0; i < students.length; i++) {
    const index = students[i].equipo.slice(-1);
    response.name = payload.color;
    response[index].miembros += 1;
    response[index].ratio = (response[index].miembros * 100 / students.length).toFixed(0)
  }

  return response;
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
  return `${equipos[index].color}_${equipos[index].id}`;
}

const getTurnFromDB = async () => {
  const registro = (await Student.find().sort({ turno: -1 }).limit(1)).pop();
  if (registro.turno < 1) return 1;
  return (registro.turno * 1) + 1;
}
