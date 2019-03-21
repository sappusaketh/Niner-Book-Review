
console.log("Genres js");
function createNode(element) {
      return document.createElement(element);
  }
const ul = document.getElementById('genres');
const ulbook = document.getElementById('Books');
  function append(parent, el) {
    return parent.appendChild(el);
  }
$.getJSON('http://localhost:8383/Services/webresources/booksite.genre', function(data) {
	console.log("test"+data);
      		$.each(data, function(index, item) {
			console.log("TEst data "+item.genreName);
               let li = createNode('li'),a=createNode('a'),
				disp=createNode('text');
				disp.value=item.genreName;
                                
                                //javascript:fetchbooks(item.genreId);
				a.textContent = disp.value;
				a.setAttribute('href', "genre.html");
				a.setAttribute('id',item.genreId);
				a.setAttribute('onclick',"setGenreId(this.id)");
                                
				
				append(li,  a);		
				append(document.getElementById('genres'), li);				
});
  
    });
	
	function setGenreId(id){
		
setCookie("genreId",id,1);
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
    
    
