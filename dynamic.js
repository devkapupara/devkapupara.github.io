var title = $(".jumbotron h1")
var desc = $(".jumbotron h3")
var hr = $('hr')

var interval = setInterval(changeHrWidth, 15)

title.fadeOut(800, function(){
  title.text("Hello World")
}).fadeIn(800).delay(400).fadeOut(800, function(){
  title.text("Meet Dev Kapupara")
}).delay(400).fadeIn(800, function(){
  desc.fadeOut(800, function(){
    desc.html("<code>while True:<br><span><code>keepCoding()</code></span></code>")
  }).fadeIn(800)
})

function changeHrWidth() {
  var width = parseInt(hr.css('width'))
  if (width / parseInt(hr.parent().width()) >= 0.8)
  {
    clearInterval(interval)
    $('#content').animate({opacity: 1}, 800)
  }
  hr.css('width', width + 3 + 'px')
}
