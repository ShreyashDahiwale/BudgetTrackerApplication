import { con } from '../connections/db.js';
import util from 'util';

exports.commonCrud = async (sql, data) => {
    let PromisifiedQuery = await util.promisify(con.query).bind(con);
    return PromisifiedQuery(sql, data);
};

exports.download = async (sql, data) => {
    let PromisifiedQuery = await util.promisify(con.query).bind(con);
    return PromisifiedQuery(sql, data);
};
