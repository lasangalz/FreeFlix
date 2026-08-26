const frame = document.getElementById("movieFrame");
const playerContainer = document.getElementById("playerContainer");
const spinner = document.getElementById("spinner");
const cards = document.querySelectorAll(".video-card");
const searchBar = document.getElementById("searchBar");
const nowPlaying = document.getElementById("nowPlaying");

// Normal movies
cards.forEach(card => {
    card.addEventListener("click", () => {

        // Don't handle Ted Lasso as a normal movie
        if (card.dataset.show === "ted-lasso") {
            openTedLassoEpisodes();
            return;
        }

        const embed = card.dataset.embed;

        if (!embed) {
            alert("This movie doesn't have an embed link yet.");
            return;
        }

        playVideo(embed, card.querySelector("h2").textContent);
    });
});

function playVideo(url, title) {
    spinner.style.display = "block";
    frame.style.display = "none";

    frame.src = url;
    playerContainer.style.display = "block";

    if (nowPlaying) {
        nowPlaying.textContent = title;
    }

    frame.onload = () => {
        spinner.style.display = "none";
        frame.style.display = "block";
    };

    playerContainer.scrollIntoView({
        behavior: "smooth"
    });
}

// Ted Lasso episode menu
function openTedLassoEpisodes() {
    const episodes = document.getElementById("tedLassoEpisodes");

    episodes.style.display =
        episodes.style.display === "block" ? "none" : "block";
}

// Episode selection
function playTedLassoEpisode(episode) {

    const url =
        "https://videm.xyz/embed/tv/tt10986410/1/" + episode;

    playVideo(
        url,
        "Ted Lasso — Season 1, Episode " + episode
    );
}

// Search
searchBar.addEventListener("input", () => {
    const search = searchBar.value.toLowerCase();

    cards.forEach(card => {
        const title =
            card.querySelector("h2").textContent.toLowerCase();

        card.style.display =
            title.includes(search) ? "block" : "none";
    });
});
