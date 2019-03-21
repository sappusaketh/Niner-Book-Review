/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */



$(document).ready(function () {
function loginClick(){
    var userName=document.getElementById('eadd').value;
    var userpsw=document.getElementById('psw').value;
    
    console.log("Your username is "+userName+" and your password is: "+userpsw);
}


function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";expires=" + d.toGMTString();
}

function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}
 $("#logout-btn").click(function (event) {
     console.log(getCookie("userId"));
     //delete cookie
     deleteAllCookies();
     $('#login_form').show();
      $('#user-welcome').hide();
 });
var userid=getCookie("userId");
if(userid!==null)
{	 $('#login_form').hide();
$('#user-welcome').show();
}

function displayUserName(loguserId)
	{
	$.ajax({
    type:"GET",
	url:"http://localhost:8383/Services/webresources/booksnew/getUserActivity/"+loguserId,
	dataType:"json",
    success: function(data){
        ////debugger;
		firstName = data.userFName;
		lastName = data.userLName;
		setCookie("userName",firstName+' '+lastName,1);
		$('#user-name').text(getCookie("userName"));
		
	}
				 })	;
		
	}
  $("#login").click(function (event) {
    var username = document.getElementById('eadd').value;
    var password = document.getElementById('psw').value;
    console.log(username);
    console.log(password);

$.ajax({
  url: 'http://localhost:8383/Services/webresources/booksite.usersauth/'+username,
  dataType: 'json',
  success: function( resp ) {
      if(resp['password']==password)
      {
          setCookie("userId",resp['userId']['userId'],1);
          console.log("You are logged in!"+getCookie("userId"));
      // login succesful
      $('#login_form').hide();
      $('#user-welcome').show();
	  displayUserName(resp['userId']['userId']);
      }else
    {

      //login unsuccessful
    }
   
      
    //console.log(resp);
  },
  error: function( req, status, err ) {
    console.log( 'something went wrong', status, err );
  }
});


});
 $("#searchkey").click(function (event) {
     setCookie("searchKey",document.getElementById(autocomplete-input).value,1);
         
 });
});
