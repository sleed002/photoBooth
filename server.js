const port = process.env.PORT || 3000
const bodyParser = require('body-parser');
const methodOverride = require('method-override');
const fileUpload = require('express-fileupload');
const {app, http, io, express} = require('./setup.js')
//call in the dependencies for the sockets
const eventRoutes = require('./routes/events');
//handle the socket functionality here
io.on('connection', function(socket){
  socket.on('chat message', function(data){
    io.emit('chat message', data)
  })
});
app.use(express.static('static'));
//body parser for pulling info from the templates
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
// app.use(bodyParser({uploadDir:'/upload'}));
app.use(fileUpload());

//has to go below body parser - this tells the server how to handle put and delete requests
app.use(methodOverride((req, res) => {
  if (req.body && typeof req.body === 'object' && '_method' in req.body) {
    // look in urlencoded POST bodies and delete it
    var method = req.body._method
    delete req.body._method
    return method
  }
}))
//call the event routes
app.use('/events', eventRoutes);
//set the view engine for the server
app.set('view engine', 'ejs')
//this renders the index page
app.get('/', (req, res) => {
  res.render('index');
})
//send the info to the port for display
http.listen(port, () => {
  console.log('Server is listening on Port ' + port)
})
