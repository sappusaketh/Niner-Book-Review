/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$('#password, #password2').on('keyup', function () {
  if ($('#password').val() == $('#password2').val()) {
    $('#message').html('Matching').css('color', 'green');
  } else 
    $('#message').html('Not Matching').css('color', 'red');
});




 function readURL(input) {
            if (input.files && input.files[0]) {
                var reader = new FileReader();

                reader.onload = function (e) {
                    $('#user-photo-file')
                        .attr('src', e.target.result);
                };

                reader.readAsDataURL(input.files[0]);
            }
  }


