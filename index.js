randomNumber1 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img1").setAttribute("src", `./images/dice${randomNumber1}.png`);
randomNumber2 = Math.floor(Math.random() * 6) + 1;
document.querySelector(".img2").setAttribute("src", `./images/dice${randomNumber2}.png`);
document.querySelector("h1").innerHTML = randomNumber1 > randomNumber2 ? "Player 1 Wins!" : randomNumber1 < randomNumber2 ? "Player 2 Wins!" : "Draw!";
document.querySelector("h1").style.color = randomNumber1 > randomNumber2 ? "green" : randomNumber1 < randomNumber2 ? "red" : "blue";
