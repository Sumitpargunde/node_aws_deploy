require('dotenv').config();

const express = require ('express');

const app = express();

const PORT = process.env.PORT

app.get('/api/get', (req, res) => {
    res.send({ message : 'this is nodejs app with CI/CD AWS Deployment using EC2 instance and github actions'});
})

app.listen(PORT, (req, res) => {
    console.log(`server running on port ${PORT}`);
})

app.get('/api/hello', (req, res) => {
    res.send({ message : 'Hello World!!!!'});
})
