const {createPool} = require ('mysql');
const pool = createPool({
    host:"localhost",
    user: "root",
    password: "2552",
    database: "demo",
    connectionlimit:10
})

pool.query("select*from cad_ps_user_reg",(err,result,fields)=> {
    if(err){
    return console.log(err);
}
return console.log(result);
});