const canvas = document.getElementById('gameCanvas');
const ctx = canvas.getContext('2d');

const player = {
    x: 50,
    y: canvas.height - 30,
    width: 20,
    height: 30,
    speed: 5,
    dy: 0
};

const keys = {
    right: false,
    left: false,
    up: false
};

document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowRight') keys.right = true;
    if (e.code === 'ArrowLeft') keys.left = true;
    if (e.code === 'ArrowUp') keys.up = true;
});

document.addEventListener('keyup', (e) => {
    if (e.code === 'ArrowRight') keys.right = false;
    if (e.code === 'ArrowLeft') keys.left = false;
    if (e.code === 'ArrowUp') keys.up = false;
});

function drawPlayer() {
    ctx.fillStyle = 'blue';
    ctx.fillRect(player.x, player.y, player.width, player.height);
}

function updatePlayer() {
    if (keys.right) player.x += player.speed;
    if (keys.left) player.x -= player.speed;
    if (keys.up && player.y === canvas.height - player.height) player.dy = -10;

    player.dy += 0.5; // Gravity
    player.y += player.dy;

    if (player.y > canvas.height - player.height) {
        player.y = canvas.height - player.height;
        player.dy = 0;
    }
}

function clearCanvas() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
}

function gameLoop() {
    clearCanvas();
    drawPlayer();
    updatePlayer();
    requestAnimationFrame(gameLoop);
}

gameLoop();