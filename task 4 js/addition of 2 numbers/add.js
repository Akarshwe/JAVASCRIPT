function add()
{
    var numone , numtwo , result;
    numone = parseInt(document.getElementById("first").value);
    numtwo = parseInt(document.getElementById("second").value);
    sum = numone + numtwo;
    document.getElementById("Answer").innerHTML = sum;
}