const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const User = require('./routes/User')
const Manual = require('./routes/Manual')
const Step = require('./routes/Step')
const Comment = require('./routes/Comment')
const Like = require('./routes/Likes')
const Topic = require('./routes/Topic')
var app = express();


app.use(bodyParser.json());
app.use(cors());
app.use(
    bodyParser.urlencoded({extended: false})
)

app.use('/api', User,Manual,Step,Comment, Like,Topic)

var port = 3000;
app.listen(port, function(){
    console.log(`Server working on port ${port}`);
})