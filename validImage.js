var validImage = function(url){
    
    //validURL variable to hold url to valid url to be returned
    var validURL;

    //create an image link
    var s = document.createElement("IMG");
    //set image link url to url parameter
    s.src = url;

    s.onerror = function(){
        //if url is not valid then we assign default url string to vaildURL and return
        validURL = 'This is where default url string goes';
  	   return validURL;
    }
    s.onload = function(){
        //if url is valid then we set validURL to url and return 
        validURL = url;
        return validURL;
    }
}
