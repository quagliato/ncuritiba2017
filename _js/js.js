$(document).ready(function(){
  repositionSections(2000, function(){
    $('html, body').animate({
      scrollTop: 0
    }, 500);
  });

  $(window).resize(function(){
    repositionSections(0);
  });

  $('body').delegate('ul.menu li a', 'click', function(event){
    event.preventDefault();
    var target = $(this).attr("href");
    $('html, body').animate({
      scrollTop: $(target).offset().top + 20
    }, 1000);
  });
});

function repositionSections(time, callback){
  if (time === undefined) {
    time = 1000;
  }

  var sectionsCount = $('section').length;

  var count = 0;
  var zIndex = 99;

  var heightTillNow = 0;
  $('section').each(function(){
    $(this).animate({
      "top" : ((count > 0) ? (heightTillNow - (count * 20)) : 0) + "px",
      "z-index" : zIndex - count
    }, time);

    count++;

    heightTillNow += $(this).height();
    console.log(heightTillNow);
    heightTillNow += 1.5 * parseInt($(this).css('padding-top').replace('px', ''));
    console.log(heightTillNow);
    heightTillNow += 1.5 * parseInt($(this).css('padding-bottom').replace('px', ''));
    console.log(heightTillNow);

    if (sectionsCount === count && callback !== undefined) {
      callback();
    }
  });
}