var oracledb = require('oracledb');
var dbConfig = require('./configuracionoracle.js');

oracledb.getConnection(
{
	user : dbConfig.user,
	password : dbConfig.password,
	connectionString : dbConfig.connectionString	
},
function(err, connection) {
	if (err){
		console.log(err.message);
		return;
	}
console.log('Conexion establecida');
connection.close(
	function(err){
		if(err){
			console.log(err.message);
			return;
		}
	});
});
