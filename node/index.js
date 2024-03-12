const express = require('express')
const app = express()
const port = 3000

const config = {
    host: 'db',
    user: 'root',
    password: 'root',
    database: 'nodedb'
};

const mysql = require('mysql')
const connection = mysql.createConnection(config)

const sql = `INSERT INTO people (name) values ('Diogo')`
const del = `DELETE FROM people WHERE id=2`
connection.query(del)
connection.end()

app.get('/',(req,res)=>{
    res.send('<h1>Hello world 2</h1>')
})

app.listen(port, ()=>{
    console.log('Rodando na porta ' + port)
})