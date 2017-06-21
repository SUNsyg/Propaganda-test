window.onload = function(){
	  var   ulobj = document.querySelector("#ulobj");
	  var  liobj = document.querySelectorAll("#ulobj>li");
	  var  leftz = liobj[0].offsetWidth;
//	  console.log(leftZ);
//	  console.log(liobj.length);
	  var ind = 0;
	  function slow(){
	  	    ind++;
	  	    if(ind >= liobj.length){
	  	    	 ind = 1;
	  	    	 ulobj.style.marginLeft = "0";
	  	    }
//	  	    	 ulobj.style.marginLeft = "-"+100*ind+"%";
		    move(ulobj,{marginLeft: -ind * leftz});
	  }
	 var  timer = setInterval(slow,3000);
}
