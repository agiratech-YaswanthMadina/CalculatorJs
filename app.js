const http = require('http');
const bp = require('body-parser');
const admin = require('./routes/admin');
const shop = require('./routes/shop');
const express = require('express');

const app = express();

app.use(admin);
app.use(shop);
app.use((req,res, next) => {
    res.status(404).send('<h1>Page NotFound</h1>');
});

app.use(bp.urlencoded({extended:false}));

const server = http.createServer(app);
server.listen(3000);

// const path = require('path');

// const express = require('express');
// const bodyParser = require('body-parser');
// const expressHbs = require('express-handlebars');

// const app = express();

// app.engine(
//   'hbs',
//   expressHbs({
//     layoutsDir: 'views/layouts/',
//     defaultLayout: 'main-layout',
//     extname: 'hbs'
//   })
// );
// app.set('view engine', 'hbs');
// app.set('views', 'views');

// const adminData = require('./routes/admin');
// const shopRoutes = require('./routes/shop');

// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.static(path.join(__dirname, 'public')));

// app.use('/admin', adminData.routes);
// app.use(shopRoutes);

// app.use((req, res, next) => {
//   res.status(404).render('404', { pageTitle: 'Page Not Found' });
// });

// app.listen(3000);


