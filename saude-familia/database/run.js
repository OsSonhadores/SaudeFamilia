const express = require("express");

const app = express();

const bodyParser = require("body-parser");

const connection = require("./database/database");

const Pessoa = require("./database/pessoa");

app.use(express.static('public'));

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

app.get("/",(req,res)=>{
 Pessoa.findAll({raw: true, order:[
     ['id','DESC'] //ASC = crescente || DESC  = decrescente
 ]}).then(pessoa => {
    axios.post('www.saudefamilia.com/dadosfamilia', {pessoa: bodyComposer})
 }
 );

});

