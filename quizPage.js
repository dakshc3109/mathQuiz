var player1_name = localStorage.getItem("user1");
var player2_name = localStorage.getItem("user2");

var player1_score = 0;
var player2_score = 0;

document.getElementById("player1_name").innerHTML = player1_name+":";
document.getElementById("player2_name").innerHTML = player2_name+":";
document.getElementById("player1_score").innerHTML = player1_score;
document.getElementById("player2_score").innerHTML = player2_score;

document.getElementById("player_question").innerHTML = "question turn - "+player1_name;
document.getElementById("player_answer").innerHTML = "answer turn - "+player2_name;

function send(){
    var number1 = document.getElementById("number1input").value;
    var number2 = document.getElementById("number2input").value;
    var actual_answer = parseInt(number1) * parseInt(number2);
    var question_number = "<h4>"+number1+" X "+number2+"</h4>";
    var inputBox = "<br>Answer : <input type='text' id='input_check_box'>";
    var btn_ckeck = "<br><br> <button class='btn btn-info' onclick='check'>Check</button>";
    var row = question_number + inputBox + btn_ckeck;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1input").value = "";
    document.getElementById("number2input").value = "";
}