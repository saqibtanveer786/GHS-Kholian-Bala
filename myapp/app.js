const { urlencoded } = require('express');
const express = require ('express');
const app = express();
const path = require('path')
const fs = require('fs')
const port = 8000;

app.use('/static', express.static('static'));
app.use(urlencoded());

//setting tempelate engine
app.set('view engine', 'pug')

//setting views folder
app.set('views', path.join(__dirname, 'views'))



app.get('/', (req, res)=>{
    res.status(200).render('index.pug')
})

app.get('/about', (req, res)=>{
    res.status(200).render('about.pug')
})

app.get('/onlineadmission', (req, res)=>{
    res.status(200).render('onlineadmission.pug')
})

app.post('/onlineadmission', (req, res)=>{
    Name = req.body.name
    FatherName = req.body.fathername
    Age = req.body.age
    Gender = req.body.gender
    GardianProffession = req.body.gardianproffession
    GardianJobTitle = req.body.gardianjobtitle
    Contact = req.body.contact
    Email = req.body.email
    GardianEmail = req.body.gardianemail
    GardianContact = req.body.gardiancontact

    let outputToWrite = `The name of student is ${Name}, Father name is ${FatherName}, ${Age} years old, ${Gender}, GardianProffession is ${GardianProffession}, GardianJobTitle is ${GardianJobTitle}, Contact number is ${Contact}, Email is ${Email}, Gardians Contact is ${GardianContact}, Gardian Email is ${GardianEmail}`
    
    let eagle  = outputToWrite 
    console.log(eagle);

    fs.writeFileSync('output.txt',outputToWrite + eagle)

    
})


app.listen(port, ()=>{
    // console.log('Aslam o alikum')
})