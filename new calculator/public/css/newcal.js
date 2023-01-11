function display(val){

    document.getElementById('result').value += val

    return val

}
function clearScreen(){

    document.getElementById('result').value = ''

}
function calculate() {
    var x = document.getElementById("result").value;
    var y = eval(x);
    document.getElementById("result").value = y;
   }