var mysql = require('mysql')

var con = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Harshad@30",  
    database:"online_harsh"
    
})

con.connect(function(err){
    if(err)throw err;
    var sql = "INSERT into students(sno,name,phone,email,course)values('3','greez','8866751459','greez@gmail.com','mechanical')"
    con.query(sql,function(err,result){
        if(err)throw err;
        console.log("1 entry added")
        console.log(result)
    })
})