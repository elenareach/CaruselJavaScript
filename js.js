/*var div = document.querySelector('#text');

function print_object(obj){
	var res = "<ul>";
	
	for (i in obj)
		res+="<li><b>"+i+"</b>" + obj[i] + "<li>";
	    res +='</ul>';
		document.write(res);
}

print_object(text.style);

div.onclick = function(){
	
	div.innerHTML="Hello";
	div.className="test";
}
*/

var btn_prev = document.querySelector('#gallery .buttons .prev');
var btn_next = document.querySelector('#gallery .buttons .next');

var images = document.querySelectorAll('#gallery .photos img');

var i = 0;

btn_prev.onclick = function(){
	images[i].className= '';
	i--;
	
	if(i< 0){
		i= images.length-1;
	}
	images[i].className= 'showed';
}
btn_next.onclick = function(){
	images[i].className= '';
	i++;
	
	if(i >= images.length){
		i=0;
	}
	images[i].className= 'showed';
}