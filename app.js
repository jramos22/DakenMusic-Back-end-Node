require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const userRoute = require('./routes/user.rout');
const playlistRoute = require('./routes/playlist.rout');
const favoriteRoute = require('./routes/favorite.rout');
const recentRoute = require('./routes/recent.rout');
const app = express();


const HOSTNAME = process.env.HOSTNAME || 'localhost';
const PORT = process.env.PORT || 3000;

mongoose.connect(process.env.DATABASE_URL);
const db = mongoose.connection;
/* .on() : Es un evento, en el cual nos va a imprimir error si algo sale mal */
db.on('error', error=> console.log(error));
/* .once() : Es utilizado en condiciones en las que queremos que una función en particular se ejecute solo una vez. */
db.once('open', ()=> console.log('connection to db established'));

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({
    type:'application/x-www-form-urlencoded',
    extended: true,
}));

app.use('/', userRoute);
app.use('/', playlistRoute);
app.use('/', favoriteRoute);
app.use('/', recentRoute);

app.use('*', (req, res) =>{
    res.status(404)
    res.send("path cannot found")
})

app.listen(PORT, HOSTNAME, ()=>{
    console.log(`Server running on ${HOSTNAME}:${PORT}`);
})