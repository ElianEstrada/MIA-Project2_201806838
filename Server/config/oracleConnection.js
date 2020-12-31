const { autoCommit } = require('oracledb');
const oracledb = require('oracledb')

credentials = {
    "user": "elianestrada",
    "password": "4856",
    "connectString": "34.72.195.200/ORCL18"
}

try{
    oracledb.initOracleClient({configDir: '/opt/oracle/your_config_dir'})
}
catch(err){
    console.error("Can't Connection of client");
}

async function Open (query, binds, autoCommit){
    let connection = await oracledb.getConnection(credentials);
    let result = await connection.execute(query, binds, {autoCommit});
    connection.release();
    return result;
};

exports.Open = Open;