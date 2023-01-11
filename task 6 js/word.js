function countWords() {
 
    var text = document
        .getElementById("inputField").value;

    var numWords = 0;

    for (var i = 0; i < text.length; i++) {
        var currentCharacter = text[i];

        if (currentCharacter == " ") {
            numWords += 1;
        }
    }

    numWords += 1;
    $(this).val
    document.getElementById("show")
        .innerHTML = numWords;
}

function countLetter() {
     
    var text = document
    .getElementById("inputField").value;
	var lng = text.length;
	document.getElementById("char").innerHTML = lng + '';
}