//this code employes the sockets which allow a photo
//sent by someoneone else to appear while the slideshow is running
//as well as messages to appear automagically

$(function () {  //the chat message functionality takes user imput and pushes it to messages
  var socket = io();
  $('#add').submit(function(){
    const data = {text: $('#m').val(), name: $('#n').val()}
    console.log(data.text)
    socket.emit('chat message', data);
    $('#m').val('');
      return false;
    });
  socket.on('chat message', function(data){
  const text = `${data.name}: ${data.text}`
    $('#messages').append($('<li>').text(text));
    });
  socket.on('user', function(msg){
    $('#messages').append($('<li>').text(msg));
    });

//photo add here fakes a photo temporarilly onto the slideshow and since the image is
//added into the database on reload it is there permanently.
  socket.on('image-upload', function(img){
    $('<img src="'+img+'"height="150px" class="mySlides">').appendTo('#photos');
    })
 });
