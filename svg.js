
            var a = document.getElementById("a");
            var q = document.getElementById("circle");
            var t = document.getElementById("dvd");
            var r = document.getElementById("clear");
            var c = a.getAttribute('width')/2;
            var d = a.getAttribute('height')/2;
            var f = 1;
            var u = 1;
            
var draw = function(event){
               clear();
               var e = document.createElementNS("http://www.w3.org/2000/svg","circle");	
	       e.setAttribute("cx", c );
	       e.setAttribute("cy", d);
	       e.setAttribute("r",u);
	       e.setAttribute("fill","purple");
	       a.appendChild(e);
	       u += f;
               if(u == c || u == d){
	          f = -1;
	       }
	       if(u == 0){
	          f = 1;
	       }
	       rid = window.requestAnimationFrame( draw );
}

var dvder = function(event){
    var h = 0;
    var i = 0;
    var j = 200;
    var k = 60;
               var dver = function(event){
                    clear();
                    var n = document.createElementNS("http://www.w3.org/2000/svg","image");	
	            n.setAttribute("href", "http://images.clipartbro.com/174/dvd-logo-images-174410.png" );
	            n.setAttribute("x", j);
	            n.setAttribute("y", k);
	            n.setAttribute("height","100");
		    n.setAttribute("width","100");
	            a.appendChild(n);
                    if(h == 0){
                        j++;
                    }
                    else{
                        j--;
                    }
                    if(i == 0){
                        k++;
                    }
                    else{
                        k--;
                    }
                    if(j == 0 && h == 1){
                         j++;
                         h=0;
                    }
                    if(j + 100 == 2 * c && h == 0){
                         j--;
                         h=1;
                    }
                    if(k == 0 && i == 1){
                         k++;
                         i=0;
                    }
                    if(k + 100 == 2 * d && i == 0){
                         k--;
                         i=1;
                    }
                    rid = window.requestAnimationFrame( dver );
               }
     dver();
}

var clear = function(event){
    while(a.hasChildNodes()){
	a.removeChild(a.childNodes[0]);
        window.cancelAnimationFrame(rid);
    }
}

q.addEventListener('click', draw);
t.addEventListener('click', dvder);
r.addEventListener('click', clear);
            
 
