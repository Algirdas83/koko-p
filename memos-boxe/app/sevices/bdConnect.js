import mysql from "mysql2";
import Sequelize from "sequelize";

const db = {};

const dbTemp = {
  host: "localhost",
  user: "root",
  password: "",
  database: "memosBoxDb",
};

try {
  //Conneting to database
  const connection = mysql.createConnection({
    host: dbTemp.host,
    user: dbTemp.user,
    password: dbTemp.password,
    database: dbTemp.database,
  });
  // Duomenu bazes sukurimas jei tokiu pavadinmu jos nera

  connection.query(`CREATE DATABASE IF NOT EXISTS ${dbTemp.database}`);
} catch (error) {
  throw console.log(error);
}

export default db;
