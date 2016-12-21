const express = require("express");
const bodyParser = require("body-parser");
const routes = require("./routes/routes");
const fetchRoutes = require("./routes/show");
const session = require("express-session");
// const userInfo = require("./models/userInfo");
const app = express();

//view engine
app.set('view engine', 'ejs');

//middleware used
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended:false}));
app.use(express.static('public'));
app.use(session({secret:"anyRepoName",
                saveUninitialized: true,
                resave: true}));
app.use(session({secret:"anyCommit",
                saveUninitialized: true,
                resave: true}));
app.use(routes);
app.use(fetchRoutes);
// app.use(userInfo);


//setting up the port
app.listen(process.env.PORT || 3000, ()=>{
    console.log(`Server is listening on port ${process.env.PORT || 3000}`);
});