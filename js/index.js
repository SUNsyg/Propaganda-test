window.onload = function(){
	   
       var  ulobj = document.querySelector("#wrapper");
       var  liobj = document.querySelectorAll("#wrapper>li");
       var  spanObj = document.querySelectorAll("#dot>span");
       var  pObj = document.querySelector("#pObj");
//     console.log(spanObj[0]);
       var  mar = liobj[0].offsetWidth;
       var  ind = 0;
       var  ine = 0;
       function  run(){
       	   ind++;
       	   ine ++;
       	   if(ind>=liobj.length){
       	   	   ind = 1;
       	   	   ulobj.style.marginLeft = "0";
       	   }
       	   if(ine>=liobj.length-1){
       	   	ine = 0;
       	   }
       	   move(ulobj,{marginLeft:-ind*mar});
       	   
       	   for(var  i = 0; i < spanObj.length; i++){
       	   		spanObj[i].className = "";
   	   		}
       	   spanObj[ine].className = "on";
           
	       }
	       var  timer = setInterval(run,3000);     
}
 
          //   按钮切换
          var  index;
           for(var j=0;j<spanObj.length;j++){
           	     spanObj[j].index = e;
           	     spanobj[j].onclick = function(){
           	     	  alert("hah");
           	     }
           }
