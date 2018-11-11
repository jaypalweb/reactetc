 function sendData(method,url,cb,data){

 	var httpObj=new XMLHttpRequest();

    httpObj.onreadystatechange=function(){
        if(httpObj.readyState == 4){
             var sRes=httpObj.responseText;
             cb(sRes);
        }
    }

   httpObj.open(method,url,true);
   
   if(data){
   	  httpObj.send(JSON.stringify(data));
   }else{
   	   httpObj.send();
   }
 }
 