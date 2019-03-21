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



function registerClick(){
   console.log("hello");
       debugger;  
        var firstname = document.getElementById('firstName').value;
        var lastname = document.getElementById('lastName').value;
		var gender = document.getElementById('genderid').value;
        var email = document.getElementById('email').value;
        var password = document.getElementById('password').value;
        var date = document.getElementById('date').value;
        var number = document.getElementById('phonenumber').value;
        var organisation = document.getElementById('organisation').value;
		var occupation = document.getElementById('occupation').value;
		var blogURL = document.getElementById('blogURL').value;
        var description = document.getElementById('description').value;
		if(firstname==null){
                    
                }
if(firstname==null){
                    
                }
        var userjson = new Object();
        userjson.userId = Math.floor(Math.random() * 10000);
		userjson.firstName = firstname;        
        userjson.lastName = lastname;
		userjson.gender = gender;
        userjson.email = email;
        userjson.dob = date;
        userjson.phone = number;
        userjson.organisation = organisation;
		userjson.occupation = occupation; 
		userjson.blogURL = blogURL;
		userjson.description = description;

        var userString = JSON.stringify(userjson);


        var userauth = new Object();
        userauth.password = password;
        userauth.userId = userjson;
        userauth.userName = email;

        var userauthString = JSON.stringify(userauth);

               
$.ajax({
type:"POST",
  url: 'http://localhost:8383/Services/webresources/booksite.users',
  contentType:"application/json",
  dataType: 'json',
  data: userString,
success: function(data, status) {

                        alert("Success");

saveAuth(userauthString);          
                        
                        
                    }
});






}


function saveAuth(userauthString)
{
    
     $.ajax({
type: "POST",
url:'http://localhost:8383/Services/webresources/booksite.usersauth',
data: userauthString,
contentType:"application/json",
dataType:"json",
success: function(data, status) {

                        alert("Success");
                   window.location="index.html";
                   alert("Please login");
}




});  
    
}

