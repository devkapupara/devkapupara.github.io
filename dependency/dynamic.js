var title = $(".jumbotron h1")
var desc = $(".jumbotron h2")
var hr = $('hr')

var interval = setInterval(changeHrWidth, 10)

title.animate({opacity:1}, 800, function() {
  title.animate({opacity:0}, 800, function() {
    title.text("meet Dev Kapupara")
    title.animate({opacity:1}, 800, function(){
      desc.animate({opacity:1}, 800)
    }).delay(400)
  }).delay(400)
}).delay(400)

// title.fadeOut(800, function(){
//   title.text("hello world")
// }).fadeIn(800).delay(400).fadeOut(800, function(){
//   title.text("meet Dev Kapupara")
// }).delay(400).fadeIn(800, function(){
//   desc.fadeOut(800, function(){
//     desc.html("<code>while True:<br><span><code>keepCoding()</code></span></code>")
//   }).fadeIn(800)
// })

function changeHrWidth() {
  var width = parseInt(hr.css('width'))
  if (width / parseInt(hr.parent().width()) >= 0.8)
  {
    clearInterval(interval)
    $('#content').animate({opacity: 1}, 800)
  }
  hr.css('width', width + 3 + 'px')
}
