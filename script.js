
function openLetter() {
    const letter = document.getElementById("letter");

    letter.classList.remove("hidden");

    // Hide the opening button after opening the letter.
    document.querySelector("#scene1 .primary").disabled = true;
    document.querySelector("#scene1 .primary").textContent =
        "Letter Opened ♡";
}

function nextScene(number) {
    // Hide the current scene.
    document.querySelectorAll(".scene").forEach(function(scene) {
        scene.classList.remove("active");
    });

    // Show the selected scene.
    const next = document.getElementById("scene" + number);
    next.classList.add("active");

    // Restart the entrance animation.
    next.style.animation = "none";
    void next.offsetWidth;
    next.style.animation = "";

    // Start at the top of the new scene.
    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

    // Create a few floating hearts.
    createHearts(7);
}

function unlockHeart() {
    const secret = document.getElementById("secret");
    const lock = document.getElementById("lock");
    const hint = document.getElementById("lockHint");

    secret.classList.remove("hidden");
    lock.textContent = "🔓";
    hint.textContent = "A little message, just for you ♡";
    lock.disabled = true;
}

function createHearts(amount) {
    const container = document.getElementById("hearts");

    for (let i = 0; i < amount; i++) {
        const heart = document.createElement("span");

        heart.className = "floating-heart";
        heart.textContent = ["♡", "♥", "💗", "✨"][
            Math.floor(Math.random() * 4)
        ];

        heart.style.left = Math.random() * 100 + "%";
        heart.style.fontSize = (16 + Math.random() * 22) + "px";
        heart.style.animationDelay = (Math.random() * 2) + "s";

        container.appendChild(heart);

        heart.addEventListener("animationend", function() {
            heart.remove();
        });
    }
}

function restartStory() {
    document.querySelectorAll(".scene").forEach(function(scene) {
        scene.classList.remove("active");
    });

    document.getElementById("scene1").classList.add("active");

    document.getElementById("letter").classList.add("hidden");

    const openingButton = document.querySelector("#scene1 .primary");
    openingButton.disabled = false;
    openingButton.textContent = "Open My Letter ♡";

    document.getElementById("secret").classList.add("hidden");
    document.getElementById("lock").textContent = "🔒";
    document.getElementById("lock").disabled = false;
    document.getElementById("lockHint").textContent =
        "There's a little message waiting for you.";

    document.getElementById("hearts").innerHTML = "";

    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });
}

// A few hearts appear when the website first opens.
createHearts(12);