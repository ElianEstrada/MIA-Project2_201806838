const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const formData = require('express-form-data');
const userRouter = require('./routes/user.route');
const childRouter = require('./routes/child.route');
const loginRouter = require('./routes/login.router');
const departmentRouter = require('./routes/department.route');
const loadRouter = require('./routes/load.route');

var app = express();
app.use(cors())
app.use(formData.parse());
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: true}))
app.use("/users", userRouter);
app.use("/childs", childRouter);
app.use("", loginRouter);
app.use("", departmentRouter);
app.use("/load", loadRouter);

const port = 3000;

app.listen(port, () =>{
    console.log("The server listening on port: ", port);
});