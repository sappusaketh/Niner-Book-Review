/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

 function setBookId(id){
		//alert(id);
setCookie("bookId",id,1);
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

 $(document).ready(function() {
	debugger;
	var userId= getCookie("userProfileId");
	//var bookId= getCookie("bookId");
	console.log(userId);
	//var userId=3;
  $.ajax({
    type:"GET",
	url:"http://localhost:8383/Services/webresources/booksnew/getUserActivity/"+userId,
	dataType:"json",
    success: function(data){
        debugger;
		console.log(data);
		$("#profile-photo").attr("src",data.profilePic);
		$("#firstName").text(data.userFName);
		$("#lastName").text(data.userLName);
		$("#profile-gender").text(data.gender);
		$("#profile-occupation").text(data.occupation);
		$("#profile-organization").text(data.organization);
		$("#profile-dob").text(data.dob);
		$("#profile-email").text(data.email);
		$("#profile-city").text(data.city);
		$("#profile-country").text(data.country);
		$("#profile-blog").text(data.blogUrl);
		$("#profile-description").text(data.description);
		
		var review_html = '';               
		
		$.each(data.reviewAct, function(key, value){
				   review_html += '<div class="profile-review-text1" style="float:left;margin:10px;border-bottom: solid 1px black;width:100%">';
                   review_html += '<a href="'+"bookDescription.html"+'" id='+value.bookId+' onclick="setBookId(this.id)" style="width:100%"><b>'+value.bookName+'</b></a><br>';
				   review_html += '<span id="review-text1" style="width:100%">'+value.reviewDesc+'</span></div>';
                 });	
        $('#profile-reviews').html(review_html);
		

    } 
   , error: function( req, status, err ) {
    console.log( 'something went wrong', status, err );
	alert(err + "Error");
			}
    });
	
	
});


