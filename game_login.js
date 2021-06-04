function adduser(){
    var player1 = document.getElementById("user1").value;
    var player2 = document.getElementById("user2").value;

    localStorage.setItem("user1", player1);
    localStorage.setItem("user2", player2);
    window.location = "quizGamePage.html";
} 