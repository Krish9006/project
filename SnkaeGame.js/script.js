const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext("2d");
const canvasSize = 400;
const box = 20;
let directions = "right";
let score = 0;
let snake = [{x:200,y:200}];
let food = generateFood();
function resetGame() {
    score = 0;
    directions = "right";
    snake = [{ x: 200, y: 200 }];
    food = generateFood();
}
document.addEventListener("keydown", function (event) {
    if (event.key === "ArrowUp" && directions !== "down") directions = "up";
    if (event.key === "ArrowDown" && directions !== "up") directions = "down";
    if (event.key === "ArrowRight" && directions !== "left") directions = "right";
    if (event.key === "ArrowLeft" && directions !== "right") directions = "left";
});
function generateFood() {
    return {
        x: Math.floor(Math.random() * (canvasSize / box)) * box,
        y: Math.floor(Math.random() * (canvasSize / box)) * box
    };
}
function draw() {
    ctx.clearRect(0, 0, canvasSize, canvasSize);

    ctx.fillStyle = "red";
    ctx.fillRect(food.x, food.y, box, box);

    let head = { ...snake[0] };
    if (directions === "up") head.y -= box;
    if (directions === "down") head.y += box;
    if (directions === "left") head.x -= box;
    if (directions === "right") head.x += box;
    if (head.x < 0 || head.y < 0 || head.x >= canvasSize || head.y >= canvasSize) {
        alert("Game Over!");
        resetGame();
        return;
    }
    for (let segment of snake) {
        if (segment.x === head.x && segment.y === head.y) {
            alert("Game Over!");
            resetGame();
            return;
        }
    }
    if (head.x === food.x && head.y === food.y) {
        score++;
        food = generateFood();
    } else {
        snake.pop();
    }
    snake.unshift(head);
    ctx.fillStyle = "green";
    for (let segment of snake) {
        ctx.fillRect(segment.x, segment.y, box, box);
    }
    ctx.fillStyle = "black";
    ctx.font = "20px Arial";
    ctx.fillText("Score: " + score, 10, 20);
}
document.querySelector(".restart").addEventListener("click", function () {
    resetGame();
});
setInterval(draw, 100);
resetGame();
