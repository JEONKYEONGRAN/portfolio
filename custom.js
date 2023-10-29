$(function(){
  /* Scroll Header Change */
  $(window).scroll(function(){
    if($(window).scrollTop() > 50) {
      $('header, .up-text').addClass('active')
    }
    else {
      $('header, .up-text').removeClass('active')
    }
  })

  /* Trigger */
  $('.trigger').click(function(){
    $('header,.trigger, .overlay, .gnb').toggleClass('active')
  })
  $('.gnb a').click(function(){
    $('header, .trigger, .overlay, .gnb').removeClass('active')
  })
  $('.practical-list').click(function(){
    $('header, .trigger, .overlay, .gnb, .up-text ').removeClass('active')
  })

  /* Up Soroll */
  $(window).scroll(function(){
    if($(window).scrollTop() > 500) {
      $('.up').addClass('active')
    }
    else {
      $('.up').removeClass('active')
    }
  })
})