var title = $(".jumbotron h1")
var hr = $('hr')

var interval = setInterval(changeHrWidth, 8)

title.animate({opacity:1}, 800, function() {
  title.animate({opacity:0}, 800, function() {
    title.text("Meet Dev Kapupara")
    title.animate({opacity:1}, 800)
  }).delay(400)
}).delay(400)

function changeHrWidth() {
  var width = parseInt(hr.css('width'))
  if (width / parseInt(hr.parent().width()) >= 0.8)
  {
    clearInterval(interval)
    $(".jumbotron h2").animate({opacity:1}, 800)
    $('#content').animate({opacity: 1}, 800)
    $(".follow-me").animate({opacity:1}, 800)
  }
  hr.css('width', width + 4 + 'px')
}
