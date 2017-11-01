$(function () {
  $('.pick-color').colorpicker();
});

$('.form-hide').hide();
$('.form-check-input').click(function () {
  if ($(this).is(':checked')) {
    $('.form-hide').show();
  } else {
    $('.form-hide').hide();
  }
});


// $('#empty').click(function () {
//   if (confirm('are you sure you want to delete this?')) {
//     $('#form').trigger('reset');
//   }
// });


// $('#form').validate({
//   rules: {

//     menutitle: {
//       required: true,
//       minlength: 3
//     },

//     color: {
//       required: true,
//       minlength: 7
//     },

//   },
//   messages: {
//     menutitle: {
//       required: 'Vui lòng nhập tên menu',
//       minlength: 'Tên ngắn vậy, chém gió ah?'
//     },
//     color: {
//       required: 'Vui lòng nhập mã màu',
//       minlength: 'XIn nhập đủ 7 ký tự'
//     },
//   },

//   submitHandler: function (form) { // for demo
//     alert('valid form submitted'); // for demo
//     return false; // for demo
//   }
// });

