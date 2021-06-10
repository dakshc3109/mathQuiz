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

var globl_actualAnswer = "";
function send(){
    var number1 = document.getElementById("number1input").value;
    var number2 = document.getElementById("number2input").value;
    var actual_answer = parseInt(number1) * parseInt(number2);
    globl_actualAnswer = actual_answer;
    var question_number = "<h4>"+number1+" X "+number2+"</h4>";
    var inputBox = "<br>Answer : <input type='text' id='input_check_box'>";
    var btn_ckeck = "<br><br> <button class='btn btn-info' onclick='check()'>Check</button>";
    var row = question_number + inputBox + btn_ckeck;
    document.getElementById("output").innerHTML = row;
    document.getElementById("number1input").value = "";
    document.getElementById("number2input").value = "";
}

var question_turn = "player1";
var answer_turn = "player2";

function check(){
    var get_answer = document.getElementById("input_check_box").value;
    if(get_answer == globl_actualAnswer){
        if(answer_turn == "player1"){
            player1_score = player1_score + 1;
            document.getElementById("player1_score").innerHTML = player1_score;
        }
        else{
            player2_score = player2_score+1;
            document.getElementById("player2_score").innerHTML = player2_score;
        }
    }

    if(question_turn == "player1"){
        question_turn = "player2";
        document.getElementById("player_question").innerHTML = "question turn - "+player2_name;
    }
    else{
        question_turn = "player1";
        document.getElementById("player_question").innerHTML = "question turn - "+player1_name;  
    }

    if(answer_turn == "player1"){
        answer_turn = "player2";
        document.getElementById("player_answer").innerHTML = "answer turn - "+player2_name;
    }
    else{
        answer_turn = "player1";
        document.getElementById("player_answer").innerHTML = "answer turn - "+player1_name;  
    }

    document.getElementById("output").innerHTML = "";
}