$(window).on('scroll',function(){
    //effect1
    var scrolled = $(this).scrollTop();
    $('.effect1').css({
      'transform':'translate3d(0, ' + (scrolled * .20) + 'px,0)',
      'opacity':1 - scrolled / 400
    });
  
    //effect2
    var discover = document.getElementById('discover');
    d = discover.getBoundingClientRect().top - 300;
    $('.effect2').css({
      'transform':'translate3d(0, ' + (-d * .20) + 'px,0)',
      'opacity':1 - d / 400
    });
  
    //effect3
    var surfing = document.getElementById('surfing');
    d = surfing.getBoundingClientRect().top - 300;
    $('.effect3').css({
      'transform':'translate3d(0, ' + (d * .30) + 'px,0)',
      'opacity':1 - (-d) / 900
    });
  
    //effect4
    var now = document.getElementById('now');
    d = now.getBoundingClientRect().top - 100;
    $('.effect4').css({
      'transform':'translate3d(0, ' + (d * .30) + 'px,0)',
      'opacity':1 - d / 900
    });
  
  
  
  })