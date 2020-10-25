const Sequelize = require('sequelize');

const connection = require('./database');

const Pessoa = connection.define('pessoa',{
    img:{
        type: Sequelize.TEXT,
        allowNulll: false
    },
    name:{
        type: Sequelize.TEXT,
        allowNulll: false
    },
    weight:{
        type: Sequelize.DECIMAL,
        allowNulll: false
    },
    height:{
        type: Sequelize.DECIMAL,
        allowNulll: false
    }
});

Pessoa.sync({force:false}).then(()=>{
});

module.exports = Pessoa;