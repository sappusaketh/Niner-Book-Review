/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
console.log("GenresBooks js");
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
function createNode(element) {
      return document.createElement(element);
  }
const ul = document.getElementById('Books');
const outerdiv = document.getElementById('test');
  function append(parent, el) {
    return parent.appendChild(el);
  }
    

	function setBookId(id){
		
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
$(document).ready(function(){
    // Check Radio-box
   
var userid=getCookie("userId");
if(userid==null)
{	
$('#user-welcome').hide();
}

$.getJSON('http://localhost:8383/Services/webresources/booksite.books', function(booksData) {
           
	//console.log("test"+booksData);
       var genreid= getCookie("genreId");
      
      		$.each(booksData, function(index, item) {
                    // console.log("Temp variable value"+temp);
					
					
                    if(item.genreId.genreId==genreid){
			console.log("TEst data "+item.bookName);
                                     			
                                let li = createNode('li'),a=createNode('a'),
				disp=createNode('text'),
				descr=createNode('text');
				disp.value=item.bookName;
				descr.value=item.bookDescr;
                var div1 = document.createElement("div");
              
                var div4=document.createElement("div");
                var textdisp= document.createTextNode(item.bookName);
					div1.className = 'col s4';
                                        div1.style.float='left';
                                        div1.style.marginLeft='20px';
                                        div1.style.width='250px';
					var div2 = document.createElement("div");
                                        var div5=document.createElement("div");
                                       
					div2.className = 'book-list';
                                        div2.style.align='left';
                                        div2.style.float='left';
                                        
                                        //<div class="row" style="margin-top:20px;margin-bottom: 40px" >
					var imagetag = document.createElement("img");
                                        imagetag.setAttribute('src',item.BImagesmall);
										
					var div3 = document.createElement("div");
                                        div4.className="row";
                                        div4.style.marginTop="20px";
                                        div4.style.marginBottom="40px";
                                    
					var hreftag = document.createElement("a");
					div3.className = 'book-page-title';
                                        div3.itemprop='name';
                                        div3.style.marginTop="20px";
                                        div3.style.lineHeight="21.33px";
                                        div3.style.textAlign="center";
					
					var para = document.createElement("h6");
                                        
                            var node = document.createTextNode(item.bookDescr);
                                        para.appendChild(node);
                                        para.style.textAlign="left";
                                        a.setAttribute('href', "bookdescription.html");
					a.setAttribute('id',item.bookId);
                                        a.style.color='blue';
                                        //a.
					a.setAttribute('onclick',"setBookId(this.id)");
                                        a.appendChild(textdisp);    
                                       
                                       
					div3.appendChild(a);
					div2.appendChild(imagetag);
					div2.appendChild(div3);
					div1.appendChild(div2);
                                       
                                      div4.appendChild(div1);
                                      
                                      
                                      div4.appendChild(para);
                                       //outerdiv.appendChild(div4);				
				//a.style.color="black";
                              
				append(document.getElementById('sortedBooksWrapper'), div4);

                                                           
                            }});
                          });
                          });