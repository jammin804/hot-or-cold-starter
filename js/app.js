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

    /*--- Evaluates the user answer and responses with hot or cold ---*/
    $("#guessButton").click(function(){

        }
    });

});

function newGame(){
    secretNumber = Math.floor(Math.random() * 100) + 1;
    return secretNumber;
}

function hotAndCold(number){
    distanceBtwn = Math.abs(secretNumber - number);
    if(distanceBtwn > 50 || distanceBtwn > secretNumber){
        console.log('Ice Cold');
    }
    else if(distanceBtwn > 30 && distanceBtwn < 50){
        console.log('Cold');
    }
    else if(distanceBtwn > 20 && distanceBtwn < 30){
        console.log('Warm');
    }
    else if(distanceBtwn > 10 && distanceBtwn < 20){
        console.log('Hot');
    }
    else if(distanceBtwn > 1 && distanceBtwn < 10){
        console.log('Very Hot');
    }
    else{
        console.log('They match!')
    }
}