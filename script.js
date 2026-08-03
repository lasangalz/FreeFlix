const frame = document.getElementById("movieFrame");
const playerContainer = document.getElementById("playerContainer");
const cards = document.querySelectorAll(".video-card");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const embed = card.dataset.embed;

        if (!embed) {
            alert("This movie doesn't have an embed link yet.");
            return;
        }

        frame.src = embed;
        playerContainer.style.display = "block";

        playerContainer.scrollIntoView({
            behavior: "smooth"
        });
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
