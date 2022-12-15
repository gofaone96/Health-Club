const Pool = require('pg').Pool
const pool = new Pool({
    user: 'postgres',  //Database username
    host: 'localhost',  //Database host
    database: 'fitness/health club', //Database database
    password: 'Letsdoit!', //Database password
    port: 5432//Database port
})

module.exports = pool
