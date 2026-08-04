        // Autoplay handling
        window.addEventListener("load", () => {
            const audio = document.getElementById("bgm");

            audio.play().catch(() => {
                console.log("Autoplay blocked, waiting for click.");
            });

            document.addEventListener("click", () => {
                audio.muted = false;
                audio.volume = 1;
                audio.play();
            }, { once: true });
        });

        // Audio controls
        function playAudio() {
            document.getElementById("bgm").play();
        }

        function pauseAudio() {
            document.getElementById("bgm").pause();
        }

        function toggleMute() {
            const audio = document.getElementById("bgm");
            audio.muted = !audio.muted;
        }

        // Color modes
        let contrastOn = false;
        let rainbowInterval;

        function setColor(color) {
            document.body.style.backgroundColor = color;
        }

        function darkMode() {
            document.body.style.backgroundColor = "#111";
            document.body.style.color = "white";
        }

        function lightMode() {
            document.body.style.backgroundColor = "white";
            document.body.style.color = "black";
        }

        function toggleContrast() {
            contrastOn = !contrastOn;
            document.body.style.filter = contrastOn ? "invert(1) contrast(2)" : "none";
        }

        function resetAll() {
            document.body.style.backgroundColor = "";
            document.body.style.color = "";
            document.body.style.filter = "none";
            contrastOn = false;
            clearInterval(rainbowInterval);
        }

        function rainbowMode() {
            const colors = ["red", "orange", "yellow", "green", "blue", "purple"];
            let i = 0;
            clearInterval(rainbowInterval);
            rainbowInterval = setInterval(() => {
                document.body.style.backgroundColor = colors[i];
                i = (i + 1) % colors.length;
            }, 500);
        }
        
        const cards = document.querySelectorAll('.card');
        cards.forEach(card => {
        card.addEventListener('click', () => {
        card.classList.toggle('is-flipped');
      });
    });