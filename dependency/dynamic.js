var title = $(".jumbotron h1")
var hr = $('hr')
var content = $('#content')
var footer = $('.footer#content')

var interval = setInterval(changeHrWidth, 15)

title.animate({opacity:1}, 500, function() {
  title.animate({opacity:0}, 500, function() {
    title.text("Meet Dev Kapupara").animate({opacity:1}, 800, function() {
      $('.jumbotron h2').animate({opacity:1}, 500)
    }).delay(400)
  }).delay(400)
}).delay(400)

function changeHrWidth() {
  var width = parseInt(hr.css('width'))
  var percent = width / parseInt(hr.parent().width())
  if(percent >= 0.6)
    content.animate({opacity: 1}, 500)
  if (percent >=0.8)
  {
    footer.animate({opacity: 1}, 500)
    $(".follow-me").animate({opacity:1}, 500)
    clearInterval(interval)
  }
  hr.css('width', width + 4 + 'px')
}
