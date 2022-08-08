const express = require('express')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')
const path = require('path')

const app = express()
const MONGO_URI = 'mongodb://tharun:F0zvliOynvWjbrKf@cluster0-shard-00-00.iy4kk.mongodb.net:27017,cluster0-shard-00-01.iy4kk.mongodb.net:27017,cluster0-shard-00-02.iy4kk.mongodb.net:27017/sample?ssl=true&replicaSet=atlas-k2o103-shard-0&authSource=admin&retryWrites=true&w=majority';
const PORT = process.env.PORT || 3000;
const router = require('./routes/router')

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.set('views', 'views')
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));
app.use(router)

mongoose.connect(MONGO_URI)
    .then(res => {
        app.listen(PORT, (req,res) => {
            console.log('Running..')
        })
    })
    .catch(err => console.log(err));

