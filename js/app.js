var secretNumber;
$(document).ready(function(){
    /*--- On load start a new game ---*/
    newGame();
    console.log(secretNumber);
    $(".new").click(function(){
        newGame();
        console.log(secretNumber);
    });
	/*--- Display information modal box ---*/
  	$(".what").click(function(){
    	$(".overlay").fadeIn(1000);

  	});

  	/*--- Hide information modal box ---*/
  	$("a.close").click(function(){
  		$(".overlay").fadeOut(1000);
  	});

});

    function newGame(){
        secretNumber = Math.floor(Math.random() * 100) + 1;
        return secretNumber;
    }
