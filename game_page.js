var player1_name = localStorage.getItem("player1_name");
var player2_name = localStorage.getItem("player2_name");
player1_score = 0;
player2_score = 0;
ques_turn = "player1";
ans_turn = "player2";

document.getElementById("player1").innerHTML = player1_name+ " : ";
document.getElementById("player2").innerHTML = player2_name+ " : ";
document.getElementById("p1score").innerHTML = player1_score;
document.getElementById("p2score").innerHTML = player2_score;
document.getElementById("playerQues").innerHTML = "Question Turn - "+ player1_name;
document.getElementById("playerAns").innerHTML = "Answer Turn - "+ player2_name;

function send() {
     get_word = document.getElementById("word").value;
     word = get_word.toLowerCase();
     ltbr1 = word.charAt(1);
     lengthby2 = Math.floor(word.length/2);
     ltbr2 = word.charAt(lengthby2);
     length_minus_1 = word.length-1 
     ltbr3 = word.charAt(length_minus_1);
    remove_ltbr1 = word.replace(ltbr1, "_");
    remove_ltbr2 = remove_ltbr1.replace(ltbr2, "_");
    remove_ltbr3 = remove_ltbr2.replace(ltbr3, "_")
    console.log(remove_ltbr3);

     Question_word =" <h4 id ='wordDisplay' > Q. "+remove_ltbr3+" </h4>";
     Input_box =" <br> Answer: <input type= 'text' id='input_checkbox'> ";
     check_btn = "<br><br> <button class ='btn btn-primary' onclick = 'check()'> CHECK </button>"
    row = Question_word+Input_box+check_btn; 
    document.getElementById("output").innerHTML = row; 
    document.getElementById("word").value = "";
    }

function check(){

     get_ans= document.getElementById("input_checkbox").value;
     answer = get_ans.toLowerCase();
     console.log("answer in lower case- " + answer);
     
     if (answer == word) {

          if (ans_turn == "player1") {
        player1_score = player1_score+ 1;
       document.getElementById("p1score").innerHTML = player1_score;

 }
      else{

          player2_score = player2_score+ 1;
          document.getElementById("p2score").innerHTML = player2_score;
   
      }
}
if (ques_turn == "player1") {
    ques_turn = "player2";
    document.getElementById("playerQues").innerHTML = "Question Turn- "+player2_name;

}
   else{

     ques_turn = "player1";
     document.getElementById("playerQues").innerHTML = "Question Turn- "+player1_name;

   }

   if (ans_turn == "player1") {
     ans_turn = "player2";
     document.getElementById("playerAns").innerHTML = "Answer Turn- "+player2_name;
 
 }
    else{
 
     ans_turn = "player1";
     document.getElementById("playerAns").innerHTML = "Answer Turn- "+player1_name;
 
    }
    
document.getElementById("output").innerHTML = "";

}