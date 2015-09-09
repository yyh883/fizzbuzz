    function fizzBuzz(n){
    //if n is a positive number
    if(n > 0){
      for(var i = 1; i <= n; i++){
          if ((i % 3 == 0) && (i % 5 == 0)){
            $("ul").append("<li>" + i +": FizzBuzz</li>");
          } else if (i % 3 == 0){
            $("ul").append("<li>" + i +": Fizz</li>");
          } else if (i % 5 == 0){
            $("ul").append("<li>" + i +": Buzz</li>");
          } else {
            $("ul").append("<li>" + i +"</li>");
          }
     
      }
    } 
    //if n is a negative numer or zero
    if(n <= 0 ){
        for(var i = 1; i >= n; i--){
          if (i == 0) {
            $("ul").append("<li>" + i +"</li>");
          } else if ((i % 3 == 0) && (i % 5 == 0)){
            $("ul").append("<li>" + i +": FizzBuzz</li>");
          } else if (i % 3 == 0){
            $("ul").append("<li>" + i +": Fizz</li>");
          } else if (i % 5 == 0){
            $("ul").append("<li>" + i +": Buzz</li>");
          } else {
            $("ul").append("<li>" + i +"</li>");
          }
     
        }
    }

}
$( document ).ready(function() {    
	$('#submitId').click(function() {
	  event.preventDefault();
	  $("li").remove();
	  var num = $("#myNumber").val();
	    fizzBuzz(num);
	});
});