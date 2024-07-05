import mysql from "mysql"

export const db=mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"#Hiya1312",
    database:"blog"

})