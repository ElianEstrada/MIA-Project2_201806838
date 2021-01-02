const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const userRouter = require('./routes/user.route');
const childRouter = require('./routes/child.route');
const loginRouter = require('./routes/login.router');

var app = express();
app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/users", userRouter);
app.use("/childs", childRouter);
app.use("", loginRouter);

const port = 3000;

app.listen(port, () =>{
    console.log("The server listening on port: ", port);
});