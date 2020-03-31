const express = require('express');
const path = require('path');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const chalk = require('chalk');
const route = require('./routes/gigs');

const server = express();

dotenv.config();

mongoose.connect(process.env.DATABASE_DEV_URL,{ useUnifiedTopology: true, useNewUrlParser: true})
.then(() => console.log(chalk.yellowBright('database connected...')))
.catch((e) => console.error(chalk.red(e)))


server.use(express.static(path.join(__dirname, 'public')));

server.set('view engine', 'ejs');
server.set('views', path.join(__dirname, 'views'));

server.use(express.urlencoded({ extended: false }));
server.use(express.json());

server.use('/', route);

const { PORT } = process.env;

server.listen(PORT, () => {
    console.log(chalk.blue(`server started @ port ${PORT}`));
});
