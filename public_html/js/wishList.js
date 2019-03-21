/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
	function setBookId(id){
		
setCookie("bookId",id,1);
	}
	function createNode(element) {
      return document.createElement(element);
  }
const ul = document.getElementById('Books');
const outerdiv = document.getElementById('test');
  function append(parent, el) {
    return parent.appendChild(el);
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
$(document).ready(function(){
   
        $.getJSON("http://localhost:8383/Services/webresources/booksnew/getUserWishList/"+getCookie("userId"), function(result){
            $.each(result, function(i, field){
                var a=document.createElement("a");
                disp=document.createElement('text');
                disp.value=field.bookName;
               var li = document.createElement('li');
               a.textContent = disp.value;
		a.setAttribute('href', "bookdescription.html");
		a.setAttribute('id',field.bookId);
                a.setAttribute('onclick',"setBookId(this.id)");
	
                var imagetag = document.createElement("img");
                imagetag.style.height="220px";
                imagetag.style.width="195px";
                imagetag.setAttribute('src',field.BImage_small);
                var div1 = document.createElement("div");
                  div1.id="wish-1-wrapper";
                  div1.style.float="left";
                              div1.style.width="100%";
                                        div1.style.margin="10px 10px";
				
		append(div1, imagetag);
                append(div1,  document.createElement('br'));
                append(div1,  a);
                append(document.getElementById('wishlist'), div1);		
                               
				
                                
                                
                
            });
        });
   
});
