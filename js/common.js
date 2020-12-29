$(function () {
  $('.intro__slider').slick({
    autoplay: true,
    autoplaySpeed: 7000,
    speed: 1200,
    fade: true,
    arrows: false
  });

  $('.achivments__slider').slick({
    slidesToShow: 5,
    arrows: false,
    autoplay: true,
    speed: 1000,
    autoplaySpeed: 3000,
    slidesToScroll: 1,
    responsive: [{
        breakpoint: 960,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  });

  $('.reviews__slider').slick({
    arrows: false,
    dots: true,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 5000
  });

  $('.footer__up-btn').on('click', function () {
    $('html:not(:animated), body:not(:animated)').animate({
      scrollTop: 0
    }, {
      duration: 1000
    });
  });

  $(window).on('scroll load resize', function () {
    if ($(this).scrollTop() >= 500) {
      $('.footer__up-btn').addClass('active');
    } else {
      $('.footer__up-btn').removeClass('active');
    }
  });

  $('.header__burger').on('click', function () {
    $(this).next().fadeIn(150).children().addClass('active');
    $('.footer__up-btn').removeClass('active');
    $('body').addClass('hide');
  });

  $('.header__nav-btn').on('click', function () {
    $('.header__nav').fadeOut(150);
    $('.header__nav-menu').removeClass('actuve');
    $('body').removeClass('hide');
    if ($(window).scrollTop() > 500) {
      $('.footer__up-btn').addClass('active');
    }
  });

  $('[data-fancybox]').fancybox({
    toolbar: false,
    smallBtn: true,
    iframe: {
      preload: false
    }
  });

  $.mask.definitions['9'] = false;
  $.mask.definitions['5'] = "[0-9]";
  $('[type="tel"]').mask("+998 (55) 5555555");

  $('.callback-modal__form').on('submit', function (e) {
    e.preventDefault();
  });

  $('.callback__bot-content-form').on('submit', function (e) {
    e.preventDefault();
  });

  $('.reviews-section__form').on('submit', function (e) {
    e.preventDefault();
  });

  $('.callback-modal__form').validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true
      }
    },
    submitHandler: function () {
      /* Send */
      $.fancybox.close();
      $('.callback-modal__form input[name]').val('');
      Swal.fire({
        title: 'Заявка отправлена!',
        text: "Мы получили вашу заявку и в ближайшее время свяжемся с вами!",
        confirmButtonText: `Закрыть`,
        icon: 'success',
      });
    }
  });

  $('.callback__bot-content-form').validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true
      }
    },
    submitHandler: function () {
      /* Send */
      $('.callback__bot-content-form input[name]').val('');
      Swal.fire({
        title: 'Заявка отправлена!',
        text: "Мы получили вашу заявку и в ближайшее время свяжемся с вами!",
        confirmButtonText: `Закрыть`,
        icon: 'success',
      });
    }
  });

  $('.reviews-section__form').validate({
    rules: {
      name: {
        required: true
      },
      phone: {
        required: true
      },
      message: {
        required: true
      }
    },
    submitHandler: function () {
      /* Send */
      $('.reviews-section__form input[name]').val('');
      $('.reviews-section__form textarea[name]').val('');
      Swal.fire({
        title: 'Отзыв отправлен!',
        text: "Спасибо за ваш отзыв!",
        confirmButtonText: `Закрыть`,
        icon: 'success',
      });
    }
  });

  $('.modal__timer-btn').on('click', function() {
    $.fancybox.close();
  });
  
  $(window).on('load', function () {
    setTimeout(function () {
      $.fancybox.open({
        src: '#modal-timer'
      });
    }, 20000);
  });
});

let mask = document.querySelector('.preloader');
document.body.classList.add('hide');

window.addEventListener('load', function () {
  mask.classList.add('hide');
  document.body.classList.remove('hide');
  setTimeout(function () {
    mask.remove();
  }, 600);

  new WOW().init();

  var endTime = document.querySelector('.modal__timer-countdown').dataset.endTime;
  var countDownDate = new Date(endTime).getTime();

  var countDownFunc = setInterval(function () {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.querySelector('#days').innerHTML = days;
    document.querySelector('#hours').innerHTML = hours;
    document.querySelector('#minutes').innerHTML = minutes;
    document.querySelector('#seconds').innerHTML = seconds;
  }, 1000);
});