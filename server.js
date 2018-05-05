const express = require('express');
const app = express();
const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const fileUpload = require('express-fileupload');

const charRoutes = require('./routes/users');

app.use(express.static('static'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(fileUpload());

//has to go below body parser
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))

app.use('/characters', charRoutes);

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
  res.render('index', {
  homePage: 'Cartoon Characters'
  });
})

app.listen(port, () => {
  console.log('Server is listening on Port ' + port)
})
