import { con } from '../connections/db.js';
import util from 'util';

export async function commonCrud(sql, data) {
    let PromisifiedQuery = await util.promisify(con.query).bind(con);
    return PromisifiedQuery(sql, data);
};

export async function download(sql, data) {
    let PromisifiedQuery = await util.promisify(con.query).bind(con);
    return PromisifiedQuery(sql, data);
};
