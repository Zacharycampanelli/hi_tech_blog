const path = require('path');
const express = require('express');
const routes = require('./controllers');
const session = require('express-session');
const exphbs = require('express-handlebars');

const app = express();
const PORT = process.env.PORT || 3001;

const sequelize = require('./config/connection');
const SequelizeStore = require('connect-session-sequelize')(session.Store);

const tenMin = 1000*60*10;

const sess = {
  secret: 'Super secrety secretness',
  cookie: {
    maxAge: tenMin
  },
  resave: false,
  saveUnitialized: true,
  store: new SequelizeStore({
    db: sequelize,
  }),
  
};

app.use(session(sess));

const helpers = require('./utils/helpers')

const hbs = exphbs.create({ helpers });

app.engine('handlebars', hbs.engine);
app.set('view engine', 'handlebars');

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

// turn on routes
app.use(routes);

// turn on connection to db and server
sequelize.sync({ force: false }).then(() => {
  app.listen(PORT, () => console.log('Now listening'));
});
