//show several joyful effects when player won the round
function winEffects(playerWon, playerNumber) {
    const box = document.createElement('div');
    box.id = 'winnercup';
    box.className = 'winnercup';
    // box.innerText = 'WINNERCUP';
    const player = document.getElementById('active-player' + playerNumber);
    player.appendChild(box);

    //insert picture into box
    const img = document.createElement('img');
    img.src = "img/victory.svg";
    img.className = 'winnercup-img';
    box.appendChild(img);

    //congratulation music here
    const sound = document.createElement("audio");
    sound.src = 'sounds/applause.mp3';
    sound.setAttribute('preload', 'auto');
    sound.setAttribute('controls', 'none');
    sound.style.display = 'none';
    box.appendChild(sound);
    sound.play();

    //fireworks effect
    const firework = document.createElement('div');
    firework.id = 'firework';
    firework.className = 'firework';

    const canvas = document.createElement('canvas');
    canvas.id = 'canvas';
    firework.appendChild(canvas);
    document.body.appendChild(firework);

    showFirework();

    setTimeout(() => {
        //hide winnercup
        box.remove();
        firework.remove();
    }, 22 * 1000)
}

// source: https://imapo.ru/%d0%bd%d0%be%d0%b2%d0%be%d0%b3%d0%be%d0%b4%d0%bd%d0%b8%d0%b9-%d1%84%d0%b5%d0%b9%d0%b5%d1%80%d0%b2%d0%b5%d1%80%d0%ba-%d0%bd%d0%b0-html5-%d0%b8-jquery/
// firework animation effect
function showFirework() {
    const scale = 3;
    const canvas = document.getElementById('canvas');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    const ctx = canvas.getContext('2d');

    // objects
    const listFire = [];
    const listFirework = [];
    const fireNumber = 13;
    const center = {
        x: canvas.width / 2,
        y: canvas.height / 2
    };
    let range = 100;
    for (let i = 0; i < fireNumber; i++) {
        let fire = {
            x: Math.random() * range / 2 - range / 4 + center.x,
            y: Math.random() * range * 2 + canvas.height,
            size: (Math.random() + 0.5) * scale,
            fill: '#fd1',
            vx: Math.random() - 0.5,
            vy: -(Math.random() + 4),
            ax: Math.random() * 0.02 - 0.01,
            far: Math.random() * range + (center.y - range)
        };
        fire.base = {
            x: fire.x,
            y: fire.y,
            vx: fire.vx
        };
        //
        listFire.push(fire);

    }
    loop();

    function randColor() {
        const r = Math.floor(Math.random() * 256);
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        let color = `rgb(${r}, ${g}, ${b}`;
        color = color.replace(`${r}`, r);
        color = color.replace(`${g}`, g);
        color = color.replace(`${b}`, b);
        return color;
    }

    function loop() {
        requestAnimationFrame(loop);
        update();
        draw();
    }

    function update() {
        for (let i = 0; i < listFire.length; i++) {
            const fire = listFire[i];
            //
            if (fire.y <= fire.far) {
                // case add firework
                const color = randColor();
                for (let i = 0; i < fireNumber * 5; i++) {
                    const firework = {
                        x: fire.x,
                        y: fire.y,
                        size: (Math.random() + 1.5) * scale,
                        fill: color,
                        vx: Math.random() * 5 - 2.5,
                        vy: Math.random() * -5 + 1.5,
                        ay: 0.05,
                        alpha: 1,
                        life: Math.round(Math.random() * range / 2) + range / 2
                    };
                    firework.base = {
                        life: firework.life,
                        size: firework.size
                    };
                    listFirework.push(firework);
                }
                // reset
                fire.y = fire.base.y;
                fire.x = fire.base.x;
                fire.vx = fire.base.vx;
                fire.ax = Math.random() * 0.02 - 0.01;
            }
            //
            fire.x += fire.vx;
            fire.y += fire.vy;
            fire.vx += fire.ax;
        }
        for (let i = listFirework.length - 1; i >= 0; i--) {
            const firework = listFirework[i];
            if (firework) {
                firework.x += firework.vx;
                firework.y += firework.vy;
                firework.vy += firework.ay;
                firework.alpha = firework.life / firework.base.life;
                firework.size = firework.alpha * firework.base.size;
                firework.alpha = firework.alpha > 0.6 ? 1 : firework.alpha;
                //
                firework.life--;
                if (firework.life <= 0) {
                    listFirework.splice(i, 1);
                }
            }
        }
    }

    function draw() {
        // clear
        ctx.globalCompositeOperation = 'source-over';
        ctx.globalAlpha = 0.18;
        ctx.fillStyle = '#000';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        // re-draw
        ctx.globalCompositeOperation = 'screen';
        ctx.globalAlpha = 1;
        for (let i = 0; i < listFire.length; i++) {
            const fire = listFire[i];
            ctx.beginPath();
            ctx.arc(fire.x, fire.y, fire.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = fire.fill;
            ctx.fill();
        }
        for (let i = 0; i < listFirework.length; i++) {
            const firework = listFirework[i];
            ctx.globalAlpha = firework.alpha;
            ctx.beginPath();
            ctx.arc(firework.x, firework.y, firework.size, 0, Math.PI * 2);
            ctx.closePath();
            ctx.fillStyle = firework.fill;
            ctx.fill();
        }
    }
}






