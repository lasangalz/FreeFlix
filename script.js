const frame = document.getElementById("movieFrame");
const playerContainer = document.getElementById("playerContainer");
const spinner = document.getElementById("spinner");
const cards = document.querySelectorAll(".video-card");
const searchBar = document.getElementById("searchBar");

cards.forEach(card => {
    card.addEventListener("click", () => {
        const embed = card.dataset.embed;

        if (!embed) {
            alert("This movie doesn't have an embed link yet.");
            return;
        }

        spinner.style.display = "block";
        frame.style.display = "none";

        frame.src = embed;
        playerContainer.style.display = "block";

        frame.onload = () => {
            spinner.style.display = "none";
            frame.style.display = "block";
        };

        playerContainer.scrollIntoView({
            behavior: "smooth"
        });
    });
});

searchBar.addEventListener("input", () => {
    const search = searchBar.value.toLowerCase();

    cards.forEach(card => {
        const title = card.querySelector("h2").textContent.toLowerCase();

        card.style.display = title.includes(search) ? "block" : "none";
    });
});
