const player = document.getElementById("videoPlayer");
const cards = document.querySelectorAll(".video-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        player.style.display = "block";
        player.src = card.dataset.video;
        player.load();
        player.play();
    });
});


const searchBar = document.getElementById("searchBar");

searchBar.addEventListener("input", () => {
    const search = searchBar.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector("h2").textContent.toLowerCase();

        if (title.includes(search)) {
            card.style.display = "block";
        } else {
            card.style.display = "none";
        }
    });
});