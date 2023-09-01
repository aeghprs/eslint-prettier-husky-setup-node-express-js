const express = require('express');
const app = express();
app.use(express.json());

require('dotenv').config();
const port = process.env.PORT;

//cors policy
const cors = require("cors");
app.use(cors());
app.use((req, res, next) => {
    res.setHeader('Access-Control-Allow-Origin', '*');
    res.setHeader('Access-Control-Allow-Headers',
        'Origin,X-Requested-With,Content_Type,Accept,Authorization');
    res.setHeader('Access-Control-Allow-Methods', 'GET,POST,PATCH,DELETE');
    next();
});

const helloRouter = require("./routes/hello");
app.use("/", helloRouter);

app.listen(port, () => {
    console.log(`Server is listening on port ${port}`);
  });