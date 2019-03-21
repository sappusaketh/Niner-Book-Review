/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$(document).ready(function(){
    // Check Radio-box
    $(".rating-stars input:radio").attr("checked", false);
var userid=getCookie("userId");
if(userid==null)
{	
$('#user-welcome').hide();
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
    $('.rating-stars input').click(function () {
        $(".rating-stars span").removeClass('checked');
        $(this).parent().addClass('checked');
    });

    $('input:radio').change(
      function(){
		  //debugger;
        var userRating = this.value;
        //alert(userRating);
		var userRate = new Object();
        userRate.bookId = bookId;
        userRate.userId = userId;
		userRate.rating = userRating;
        var userRateString = JSON.stringify(userRate);
		$.ajax({
  type:"POST",
  url: 'http://localhost:8383/Services/webresources/booksnew/saveRatings',
  contentType:"application/json",
  dataType: 'json',
  data: userRateString,
  
  success: function(resp) {
	  //debugger;
      //alert(resp.status);
	  console.log(resp);
          updateRating();
	  
	 
  },
  error: function( err ) {
	  console.log( 'something went wrong',err );
	  //debugger;
      //alert(resp.status);
	  console.log(err);
  }
});
		
		
    }); 
	
	$('#video-mirrors-handler').click(function() {
    alert('test');
});

	$('#like').click(function() {
    alert('test');
});
});
function updateRating()
{
    
     $.ajax({
    type:"GET",
	url:"http://localhost:8383/Services/webresources/booksnew/getBookDetails/"+bookId,
	dataType:"json",
    success: function(data){
        //debugger;
		console.log(data);

		$("#rating").text(data.rating);		
			var ratings = '';
				for(i=0;i<Math.round(parseFloat(data.rating));i++)
				{
					ratings += '<img class="set-middle" src="http://booklikes.com/include/template/www/img/star_a.png">';
            
				}
				
		          
		$("#ratingStar").html(ratings);
		

    } 
   , error: function( req, status, err ) {
    console.log( 'something went wrong', status, err );
	alert(err + "Error");
			}
    });
    
}
window.onload = function() {
  document.getElementById('addFavorite').onclick = function() {
    if(this.style.color=="red"){
        this.style.color = 'black';
    }
    else
    {
        this.style.color = 'red';
    
      var userRate = new Object();
        userRate.bookId = bookId;
        userRate.userId = userId;

        var userRateString = JSON.stringify(userRate);
$.ajax({
  type:"POST",
  url: ' http://localhost:8383/Services/webresources/booksnew/addWishList',
  contentType:"application/json",
  dataType: 'json',
  data: userRateString,
  
  success: function(resp) {
	  //debugger;
      //alert(resp.status);
	  console.log(resp);
	  
	 
  },
  error: function( err ) {
	  console.log( 'something went wrong',err );
  }
});
      
      
      
      }
  }
}

var userId= getCookie("userId");
var bookId= getCookie("bookId");
	function upVoteReview(revId){
		//alert(revId);
		
	var userVote = new Object();
        userVote.reviewId = revId;
        userVote.userId = userId;

        var voteString = JSON.stringify(userVote);
		$.ajax({
  type:"POST",
  url: 'http://localhost:8383/Services/webresources/booksnew/upvoteReview',
  contentType:"application/json",
  dataType: 'json',
  data: voteString,
  
  success: function(resp) {
	  //debugger;
      //alert(resp.status);
	  console.log(resp);
	  document.getElementById("upVotereviewId"+revId).innerHTML = resp.upvotes;
	  document.getElementById("downVotereviewId"+revId).innerHTML = resp.downvotes;
	 
  },
  error: function( err ) {
	  console.log( 'something went wrong',err );
  }
});
	}
	
	function downVoteReview(revId){
		//alert(revId);
		
	var userVote = new Object();
        userVote.reviewId = revId;
        userVote.userId = userId;

        var voteString = JSON.stringify(userVote);
		$.ajax({
  type:"POST",
  url: 'http://localhost:8383/Services/webresources/booksnew/downvoteReview',
  contentType:"application/json",
  dataType: 'json',
  data: voteString,
  
  success: function(resp) {
	  //debugger;
      //alert(resp.status);
	  console.log(resp);
	  document.getElementById("upVotereviewId"+revId).innerHTML = resp.upvotes;
	  document.getElementById("downVotereviewId"+revId).innerHTML = resp.downvotes;
	 
  },
  error: function( err ) {
	  console.log( 'something went wrong',err );
  }
});
	}
function setUserView(id){
		//alert("clicked "+id);
		debugger;
setCookie("userProfileId",id,1);
	}

	function setBookId(id){
		
setCookie("bookId",id,1);
	}
	
   function getCookie(name) {
    var v = document.cookie.match('(^|;) ?' + name + '=([^;]*)(;|$)');
	//debugger;
    return v ? v[2] : null;
}
function setCookie(name, value, days) {
    var d = new Date;
    d.setTime(d.getTime() + 24*60*60*1000*days);
    document.cookie = name + "=" + value + ";expires=" + d.toGMTString();
}

// generate html of reviews
function generateReviews(userId,reviewId,profilePic, firstName, lastName,reviewDesc, upvotes,downvotes )
	{		
		var reviews_html ='';
		reviews_html += '<div class="customer-review-wrapper" style="float: left;border-bottom: solid black 1px;margin-bottom: 20px;width:100%">';
		reviews_html += '<div class="customer-review"><div class="row-spacing-min" style="margin-bottom: 6px !important;height: 50px"><div class="user-detail" style="height:100%;position: relative">';
        reviews_html += '<div class="user-profile-avatar-wrapper"><div class="user-profile-avatar" style="float: left;margin-right: 10px">';
        //debugger;
		reviews_html +='<img class="circle responsive-img" src="'+profilePic+'" height="45" width="45"></div></div>';
		reviews_html += '<a class="user-profile-content" href="'+"userProfile.html"+'" id='+userId+' onclick="setUserView(this.id)" style="position:absolute;bottom:0">';
        reviews_html += '<span class="user-profile-first-name" style="font-size: 22px">'+firstName+'</span>&nbsp';
		reviews_html += '<span class="user-profile-last-name" style="font-size: 22px">'+lastName+'</span>';
		
		
		reviews_html += '</a></div></div>';
        reviews_html += '<div class="user-review-text" style="float:left;margin-bottom: 6px!important;width:100%">'; 		
		reviews_html += '<span id="user1-review-text">'+reviewDesc+'</span></div>';		
        reviews_html += '<div class="review-vote-row"><div class="upvote-wrapper" style="float: left;margin-right: 10px"><a class="upvote" href="javascript:void(0);" id='+reviewId+' onclick="upVoteReview(this.id)" title="upvote"><i class="material-icons">thumb_up</i></a></div>';
        reviews_html += '<div class="upvote-count" style="float: left;margin-right: 30px"><span id=upVotereviewId'+reviewId+'>'+upvotes+'</span></div>';	
		reviews_html += '<div class="downvote-wrapper" style="float: left;margin-right: 10px"><a class="downvote" href="javascript:void(0);" id='+reviewId+' onclick="downVoteReview(this.id)" title="downvote"><i class="material-icons">thumb_down</i></a></div>';
		reviews_html += '<div class="downvote-count" style="float: left;margin-right: 10px"><span id=downVotereviewId'+reviewId+'>'+downvotes+'</span></div></div></div></div>';	  
         //debugger;
		 return reviews_html;
	}
	
	
	
$(document).ready(function() {
	////debugger;
	//var userId= getCookie("userId");
	//var bookId= getCookie("bookId");
	console.log(userId);
	
  $.ajax({
    type:"GET",
	url:"http://localhost:8383/Services/webresources/booksnew/getBookDetails/"+bookId,
	dataType:"json",
    success: function(data){
        //debugger;
		console.log(data);
		$("#bookImage").attr("src",data.bImage_large);
		$("#bookName").text(data.bookName);
		$("#bookDescr").text(data.bookDescr);
		$("#rating").text(data.rating);
		$("#ISBN").text(data.iSBN);
		$("#publishdate").text(data.publishDate);
		
		
		
		var author_html = '';               
		
		author_html +='<div class="book-page-author">by:';
		
		
		$.each(data.authors, function(key, value){
				   author_html += '<div><strong itemprop="author" itemscope="" itemtype="http://schema.org/Person"><a itemprop="url" href="javascript:void(0);"><span itemprop="name">';
                   author_html +=	value.authorName+'(author)</span></a></strong> </div>';
                 });		
        author_html +='</div>';
			var ratings = '';
				for(i=0;i<Math.round(parseFloat(data.rating));i++)
				{
					ratings += '<img class="set-middle" src="http://booklikes.com/include/template/www/img/star_a.png">';
            
				}
				
        $('#authorContent').html(author_html);
		          
		$("#ratingStar").html(ratings);
		

    } 
   , error: function( req, status, err ) {
    console.log( 'something went wrong', status, err );
	alert(err + "Error");
			}
    });
	
	
});

//get reviews of book
$(document).ready(function() {
	//var userId= getCookie("userId");
	//var bookId= getCookie("bookId");
	//debugger;
	if(userId!=null)
	//if(1)
	{
	//debugger;
  $.ajax({
    type:"GET",
	url:"http://localhost:8383/Services/webresources/booksnew/getReviewsBookId/"+bookId,
	dataType:"json",
    success: function(data){
        ////debugger;
		var reviews_html1 = '';  
		var reviews_html = '';		
		$.each(data, function(key, value){
		//debugger;		
		
		reviews_html1= generateReviews(value.userId,value.reviewId, value.profilePic, value.fisrtName, value.lastName,value.reviewDesc, value.upvotes,value.downvotes );
		reviews_html+= reviews_html1;		      
				 });
				 debugger;
		$('#reviewContent').html(reviews_html);	

    } 
   , error: function( req, status, err ) {
    console.log( 'something went wrong', status, err );
	alert(err + "Error");
			}
    });		
	}
	else{
		$( '#book-favorite').hide();
		$( '.text_review').hide();
		$( '#reviewContent').hide();
		$( '.text_rating').hide();
		$( '.write-post-wrapper').hide();
	}
});

$(document).ready(function() {
	

	/* $('body').unbind('click').bind('click',  '.top-customer-review i', function (e) {
			alert('click');
			}); */
		//load new review			
	function loadNewReview(reviewId,reviewDesc)
	{
	$.ajax({
    type:"GET",
	url:"http://localhost:8383/Services/webresources/booksnew/getUserActivity/"+userId,
	dataType:"json",
    success: function(data){
        ////debugger;
		firstName = data.userFName;
		lastName = data.userLName;
		profilePic = data.profilePic;
		//debugger;
		var reviews_html = ''; 
	  reviews_html= generateReviews(userId, reviewId, data.profilePic, data.userFName, data.userLName,reviewDesc, 0,0 );
			$('#userpost').val('');
		$('#reviewContent').append(reviews_html);
		
	}
				 })	;
		
	}	
			
			
	
	
	//Post a review
	$('#postReview').unbind('click').bind('click', function (e) {
  //var userId=getCookie("userId");


	
  
    var review = $('#userpost').val();
	//var userId= getCookie("userId");
	//var bookId= getCookie("bookId");
	//alert(review);
    console.log(review);
	var userReview = new Object();
        userReview.bookId = bookId;
        userReview.reviewDesc = $('#userpost').val();
		userReview.userId = userId;

        var reviewString = JSON.stringify(userReview);
	
	
$.ajax({
  type:"POST",
  url: 'http://localhost:8383/Services/webresources/booksnew/saveReview',
  contentType:"application/json",
  dataType: 'json',
  data: reviewString,
  
  success: function(resp) {
	  ////debugger;
	  //console.log(resp);  	
		var reviewId=1000;// return reviewId from db after inserting new record
		loadNewReview(reviewId, userReview.reviewDesc);
		
		
	  
  },
  error: function( err ) {
	  console.log( 'something went wrong',err );
  }
});



});
});



// upvote and downvote
$(document).ready(function() {
/* 	
$('a[href^="#"]').click(function(e) {
    e.preventDefault();
}); */
		$('body').on('click', '.top-customer-review a.upvote1' , function (e) {
			e.preventDefault();
			alert('upvote');
			});
	$('body').on('click', '.top-customer-review a.downvote1' , function (e) {
		e.preventDefault();
			alert('downvote'+$(this).val());
			console.log($(this));
			});
	
	// add upvote - not working
	$('.top-customer-review a.upvote').unbind('click').bind('click', function (e) {
  e.preventDefault();
//debugger;
	alert('upvote1');
  
    var review = $('#userpost').val();
	//alert(review);
    console.log(review);
	var userVote = new Object();
        userVote.reviewId = 10;
        userVote.userId = 1;

        var voteString = JSON.stringify(userVote);
	
	
$.ajax({
  type:"POST",
  url: 'http://localhost:8383/Services/webresources/booksnew/upvoteReview',
  contentType:"application/json",
  dataType: 'json',
  data: voteString,
  
  success: function(resp) {
	  //debugger;
      //alert(resp.status);
	  console.log(resp);
	  
	 
  },
  error: function( err ) {
	  console.log( 'something went wrong',err );
  }
});


});
});