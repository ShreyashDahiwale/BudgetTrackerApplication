import mysql from 'mysql2/promise';

const config = Object.assign({}, global.gconfig);


const dbConfig = {
    host: config.database.host,
    user: config.database.username,
    password: config.database.password,
    database: config.database.database
}

const pool = mysql.createPool(dbConfig);


export const con = pool;

exports.closeDbConn = () => {
    pool.end((err) => {
      if(err) console.error(err);
    })
}