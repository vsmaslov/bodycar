$(document).ready(function () {

  $('input[type="tel"]').inputmask("+7 (999) 999-99-99");
  $('select').selectpicker();

  $('form').submit(function (event) {
    event.preventDefault();
    $('.thanks-modal').show();
  })

  $('.call-back').click(function (event) {
    event.preventDefault();
    $('.request-modal').show();
  })

  $('.fast-request').click(function () {
    event.preventDefault();
    $('.fast-request-modal').show();
  })
  $('.modal-block__close').click(function () {
    $('.modal-block').hide();
  })
  $('.request-modal__btn').click(function () {
    $('.modal-block').hide();
  })
  $('.modal-block').click(function (e) { // событие клика по веб-документу
    var div = $(".modal-block__box"); // тут указываем ID элемента
    if (!div.is(e.target) // если клик был не по нашему блоку
      &&
      div.has(e.target).length === 0) { // и не по его дочерним элементам
      $('.modal-block').hide(); // скрываем его
    }
  });
})