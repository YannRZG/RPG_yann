const startButton = document.getElementById("startButton");
const game = new Game();

startButton.addEventListener("click", () => {
    game.startGame();
});
