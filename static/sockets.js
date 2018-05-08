$(function () {
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
});