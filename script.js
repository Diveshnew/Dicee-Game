var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage1 = "images/dice"+randomNumber1+".png";
var image1=document.querySelectorAll("img")[0].setAttribute("src",randomDiceImage1);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomDiceImage2 ="images/dice"+randomNumber2+".png";
var image2 = document.querySelectorAll("img")[1].setAttribute("src",randomDiceImage2);



// If player 1 wins
if(randomNumber1 > randomNumber2){
    document.querySelector("h1").innerHTML = "Player 1 wins!";
    document.querySelector("h1").style.color="#FD8D14";
}
else if (randomNumber1 < randomNumber2){
    document.querySelector("h1").innerHTML = "Player 2 wins!";
    document.querySelector("h1").style.color="#FFE17B";
}
else{
    document.querySelector("h1").innerHTML= "Draw";
}