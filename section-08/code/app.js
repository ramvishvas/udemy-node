const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');

const errorController = require('./controllers/errorController');
const rooDir = require('./util/path');

const app = express();

app.set('view engine', 'ejs');
app.set('views', 'views');

const adminRoutes = require('./routes/adminRoutes');
const shopRoutes = require('./routes/shopRoues');

app.use(bodyParser.urlencoded({
    extended: false
}));
// app.use(express.static(path.join(__dirname, 'public')));
// app.use(express.static(path.join(rooDir, 'public')));
app.use(express.static('public'))

app.use('/admin', adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

app.listen(3000);