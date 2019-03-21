/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

function deleteAllCookies() {
    var cookies = document.cookie.split(";");

    for (var i = 0; i < cookies.length; i++) {
        var cookie = cookies[i];
        var eqPos = cookie.indexOf("=");
        var name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = name + "=;expires=Thu, 01 Jan 1970 00:00:00 GMT";
    }
}

  function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
    return v ? v[2] : null;
}
function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";expires=" + d.toGMTString();
}

function setUserProfileId(){
	debugger;
	setCookie("userProfileId",getCookie("userId"),1);
}
function clickSearch(){
	debugger;
        var userName=document.getElementById('autocomplete-input').value;
	setCookie("searchKey",userName,1);
}
 $(document).ready(function() {
	//debugger;
	$('#user-name').text(getCookie("userName"));
	
	
});
 $(document).ready(function() {
      $("#logout-btn").click(function (event) {
     console.log(getCookie("userId"));
     //delete cookie
     deleteAllCookies();
     $('#login_form').show();
      $('#user-welcome').hide();
 });
            $('.dropdown-trigger').dropdown({
              inDuration: 300,
              outDuration: 225,
              constrain_width: false, // Does not change width of dropdown to that of the activator
              hover: false, // Activate on click
              alignment: 'left', // Aligns dropdown to left or right edge (works with constrain_width)
              gutter: 20, // Spacing from edge
              belowOrigin: false // Displays dropdown below the button
            });
        });


