require('./models/db');
const employeeControllers = require('./controllers/employeeControllers');
const path =require('path');
const Handlebars = require('handlebars')
const exphbs=require('express-handlebars');
const {allowInsecurePrototypeAccess} = require('@handlebars/allow-prototype-access')
const express =require('express');
var app=express();

const bodyParser=require('body-parser');
app.use(bodyParser.urlencoded({
    extended:true
}));
app.use(bodyParser.json());

app.set('views',path.join(__dirname,'/views/'));
app.engine('hbs',exphbs({extname:'hbs',defaultLayout:'mainLayout',layoutsDir:__dirname + '/views/layouts/',   handlebars: allowInsecurePrototypeAccess(Handlebars)}));
app.set('view engine','hbs');

const PORT =3000;
app.listen(PORT , ()=>{
    console.log('Server is running on PORT :' , + PORT);
})

app.use('/employee',employeeControllers);