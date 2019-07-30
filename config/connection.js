//---------------------------------
//          CONNECTION TO DB
//---------------------------------

//Requiring mysql
var mysql = require("mysql");
//Requiring process for security
if (process.env.NODE_ENV !== "production") {
    require("dotenv").config();
}
if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL)
} else {
    //Connection credentials, with security field
    var connection = mysql.createConnection({
        host: process.env.DB_HOST,
        port: process.env.DB_PORT,
        user: process.env.DB_USER,
        password: process.env.DB_PASSWORD,
        database: process.env.DB_SCHEMA
    });
}


// Make a connection (if not show problem)
connection.connect(function (err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection
module.exports = connection;