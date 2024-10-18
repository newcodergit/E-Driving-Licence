const express = require('express')
const path = require('path');
const app = express()
app.set('view engine', 'ejs');

app.set('views', path.join(__dirname, 'views'));
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.listen(2000, () => {
    console.log('server working');
})
app.get('/', (req, res) => {
    res.render('index')
})
app.get('/home', (req, res) => {
    res.render('home');
});
app.get('/verify', (req, res) => {
    res.render('verify');
});
app.get('/about', (req, res) => {
    res.render('about');
});
app.get('/register', (req, res) => {
    let { name, email, dob, license } = req.query;
    console.log(`Name: ${name}, Email: ${email}, DOB: ${dob}, License: ${license}`);
    res.send(`Registration received for ${name}
    <h3> Here are your details</h3>
    Name: ${name}, Email: ${email}, DOB: ${dob}, License: ${license}`
    );
});
