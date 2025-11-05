import mysql from 'mysql2/promise';

let pool = null;

function getPool() {
    if (!pool) {
        if (!global.gConfig) {
            throw new Error('Global config (global.gConfig) is not set. Make sure createConfig() is called before using the database connection.');
        }
        
        const config = Object.assign({}, global.gConfig);
        const dbConfig = {
            host: config.database.host,
            user: config.database.username,
            password: config.database.password,
            database: config.database.database
        };
        
        pool = mysql.createPool(dbConfig);
    }
    return pool;
}

// Export a getter that lazily initializes the pool
export const con = new Proxy({}, {
    get(target, prop) {
        return getPool()[prop];
    }
});

export async function closeDbConn () {
    if (pool) {
        pool.end((err) => {
            if(err) console.error(err);
        });
    }
}