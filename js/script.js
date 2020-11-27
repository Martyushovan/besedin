$(document).ready(function () {
  const modal = document.querySelector('[data-modal]');
  const body = document.querySelector('body');
  let player;
  let done = false;

  $("#toggler").click(function() {
    $(this).toggleClass("open-menu");
    $("#nav").toggleClass("nav--open");
    $(".header").toggleClass("header")
  });

  $("[data-carousel]").slick({
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1
  });

  function getYouTubeVideoID(url) {
    let ID = '';
    let newval = '';

    if ((newval = url.match(/(\?|&)v=([^&#]+)/))) {
      ID = newval.pop();
    } else if ((newval = url.match(/(\.be\/)+([^\/]+)/))) {
      ID = newval.pop();
    } else if ((newval = url.match(/(\embed\/)+([^\/]+)/))) {
      ID = newval.pop().replace('?rel=0', '');
    }

    return ID;
  }

  function initPlayer(url) {
    player = new YT.Player('player', {
      videoId: getYouTubeVideoID(url),
      playerVars: {
        autoplay: 1,
        controls: 0,
        loop: 1,
        // rel: 0,
        playsinline: 1
        // allowsInlineMediaPlayback: 1,
      },
      events: {
        onReady: event => {
          onPlayerReady(event);
        },
        onStateChange: event => {
          onPlayerStateChange(event);
        },
        onError: event => {
          console.log(event);
        },
      }
    });
  }

  function onPlayerReady(event) {
    event.target.playVideo();
  }

  function onPlayerStateChange(event) {
    if (event.data === YT.PlayerState.PLAYING && !done) {
      done = true;
    }
  }

  function playVideo() {
    player.playVideo();
  }

  function stopVideo() {
    player.stopVideo();
  }

  function openModal() {
    modal.classList.add('modal--open');
    body.classList.add('modal-open');
  }

  function closeModal() {
    modal.classList.remove('modal--open');
    body.classList.remove('modal-open');
    stopVideo();
  }

  const workItems = document.querySelectorAll('[data-video]'); // [wokrItem, wokrItem]

  if (workItems.length) {
    workItems.forEach(wokrItem => {
      wokrItem.addEventListener('click', (e) => {
        e.preventDefault();

        if (!modal) return;
        openModal();

        if (!done) {
          const video = wokrItem.dataset.video;
          initPlayer(video);
        } else {
          playVideo();
        }
      });
    });
  }

  const close = modal.querySelector('.modal-close');

  close.addEventListener('click', (e) => {
    closeModal();
  });

  window.addEventListener('keyup', e => {
    const key = e.key;

    if (key === 'Escape') {
      closeModal();
    }
  });

  if (window.matchMedia('(min-width: 1024px)').matches) {
    const logo = document.querySelector('[data-logo]');
    const header = document.querySelector('[data-header]');

    function scrollHandler(e) {
      if ($(document).scrollTop() > $('.about').position().top - 50) {
        logo.classList.add('logo--shown');
        header.classList.add('header--shown');
      } else {
        logo.classList.remove('logo--shown');
        header.classList.remove('header--shown');
      }
    }

    scrollHandler();

    window.addEventListener('scroll', scrollHandler);
  }
});

$('.burger').on('click', function(e) {
  e.preventDefault;
  $(this).toggleClass('burger_active');
  $('.menu-nav').toggleClass('menu-nav-active');
});


// function show_video1()
// {
//
//     $('#overlay').fadeIn(400, // снaчaлa плaвнo пoкaзывaем темную пoдлoжку
//             function(){ // пoсле выпoлнения предъидущей aнимaции
//
//                 $('#modal_form-grom')
//                     .css('display', 'block') // убирaем у мoдaльнoгo oкнa display: none;
//                     .animate({opacity: 1, top: '50%'}, 200); // плaвнo прибaвляем прoзрaчнoсть oднoвременнo сo съезжaнием вниз
//
//                 document.getElementById('v1').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
//
//
//     });
//
//
//     /* Зaкрытие мoдaльнoгo oкнa, тут делaем тo же сaмoе нo в oбрaтнoм пoрядке */
//     $('.modal_close, #overlay').click( function(){ // лoвим клик пo крестику или пoдлoжке
//
//             $('#modal_form-grom')
//             .animate({opacity: 0, top: '45%'}, 200,  // плaвнo меняем прoзрaчнoсть нa 0 и oднoвременнo двигaем oкнo вверх
//                 function(){ // пoсле aнимaции
//                     $(this).css('display', 'none'); // делaем ему display: none;
//                     $("iframe").remove();
//                     $('#overlay').fadeOut(400); // скрывaем пoдлoжку
//                 }
//             );
//
//             document.getElementById('v1').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
//
//
//     });
// }
//
//
// function show_video2()
// {
//
//     $('#overlay').fadeIn(400,
//             function(){
//
//                 $('#modal_form-chum')
//                     .css('display', 'block')
//                     .animate({opacity: 1, top: '50%'}, 200);
//
//                 document.getElementById('v2').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
//
//
//     });
//
//
//
//     $('.modal_close, #overlay').click( function(){
//
//             $('#modal_form-chum')
//             .animate({opacity: 0, top: '45%'}, 200,
//                 function(){
//                     $(this).css('display', 'none');
//                     $("iframe").remove();
//                     $('#overlay').fadeOut(400);
//                 }
//             );
//
//             document.getElementById('v2').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
//
//
//     });
// }
//
// function show_video3()
// {
//
//     $('#overlay').fadeIn(400,
//             function(){
//
//                 $('#modal_form-iowa')
//                     .css('display', 'block')
//                     .animate({opacity: 1, top: '50%'}, 200);
//
//                 document.getElementById('v3').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
//
//
//     });
//
//
//
//     $('.modal_close, #overlay').click( function(){
//
//             $('#modal_form-iowa')
//             .animate({opacity: 0, top: '45%'}, 200,
//                 function(){
//                     $(this).css('display', 'none');
//                     $("iframe").remove();
//                     $('#overlay').fadeOut(400);
//                 }
//             );
//
//             document.getElementById('v3').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
//
//
//     });
// }
//
//
// function show_video4()
// {
//
//     $('#overlay').fadeIn(400,
//             function(){
//
//                 $('#modal_form-iowa-m')
//                     .css('display', 'block')
//                     .animate({opacity: 1, top: '50%'}, 200);
//
//                 document.getElementById('v4').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
//
//
//     });
//
//
//
//     $('.modal_close, #overlay').click( function(){
//
//             $('#modal_form-iowa-m')
//             .animate({opacity: 0, top: '45%'}, 200,
//                 function(){
//                     $(this).css('display', 'none');
//                     $("iframe").remove();
//                     $('#overlay').fadeOut(400);
//                 }
//             );
//
//             document.getElementById('v4').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
//
//
//     });
// }
//
//
// function show_video5()
// {
//
//     $('#overlay').fadeIn(400,
//             function(){
//
//                 $('#modal_form-nyusha')
//                     .css('display', 'block')
//                     .animate({opacity: 1, top: '50%'}, 200);
//
//                 document.getElementById('v5').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
//
//
//     });
//
//
//
//     $('.modal_close, #overlay').click( function(){
//
//             $('#modal_form-nyusha')
//             .animate({opacity: 0, top: '45%'}, 200,
//                 function(){
//                     $(this).css('display', 'none');
//                     $("iframe").remove();
//                     $('#overlay').fadeOut(400);
//                 }
//             );
//
//             document.getElementById('v5').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
//
//
//     });
// }
//
// function show_video6()
// {
//
//     $('#overlay').fadeIn(400,
//             function(){
//
//                 $('#modal_form-leningrad')
//                     .css('display', 'block')
//                     .animate({opacity: 1, top: '50%'}, 200);
//
//                 document.getElementById('v6').contentWindow.postMessage('{"event":"command","func":"playVideo","args":""}', '*');
//
//
//     });
//
//
//
//     $('.modal_close, #overlay').click( function(){
//
//             $('#modal_form-leningrad')
//             .animate({opacity: 0, top: '45%'}, 200,
//                 function(){
//                     $(this).css('display', 'none');
//                     $("iframe").remove();
//                     $('#overlay').fadeOut(400);
//                 }
//             );
//
//             document.getElementById('v6').contentWindow.postMessage('{"event":"command","func":"stopVideo","args":""}', '*');
//
//
//     });
// }