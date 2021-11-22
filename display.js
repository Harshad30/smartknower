var mysql = require('mysql')

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Harshad@30",  
    database:"online_harsh"
    
})

con.connect(function(err){
    if(err)throw err;
    con.query("SELECT * from students",function(err,result,fields){
        if(err)throw err;
        console.log(result)
    })
})