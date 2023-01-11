var y = Math.floor(Math.random()* 100 + 1 );

console.log(y);

var guess = 1;

    function guess1(){
        console.log(guess);

        if(guess <=10){

    var x = document.getElementById("guessField").value;
    if(x == y)
    {
        alert("CONGRATULATIONS!!! YOU GUESSED IT RIGHT IN"
        + guess + "GUESS");
    }
    else if(x > y)
    {
        alert("OOPS SORRY!! TRY A SMALLER NUMBER");
    }
    else{
        guess++;
        alert("OOPS SORRY!! TRY A GREATER NUMBER");
    }
}
else (alert("LIMIT EXOSTED"+y))
}

