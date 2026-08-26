```javascript
const frame = document.getElementById("movieFrame");
const playerContainer = document.getElementById("playerContainer");
const spinner = document.getElementById("spinner");
const searchBar = document.getElementById("searchBar");
const nowPlaying = document.getElementById("nowPlaying");

const cards = document.querySelectorAll(".video-card");

const tedLassoCard = document.getElementById("tedLassoCard");
const tedLassoEpisodes = document.getElementById("tedLassoEpisodes");


// -----------------------------
// NORMAL MOVIE CARDS
// -----------------------------

cards.forEach(card => {

    if (card.id === "tedLassoCard") {
        return;
    }

    card.addEventListener("click", () => {

        const embed = card.dataset.embed;

        if (!embed || embed.startsWith("YOUR_")) {
            alert("Add an authorized video URL to this movie first.");
            return;
        }

        const title = card.querySelector("h2").textContent;

        playVideo(embed, title);
    });
});


// -----------------------------
// TED LASSO CARD
// -----------------------------

tedLassoCard.addEventListener("click", () => {

    tedLassoEpisodes.classList.toggle("show");

    if (tedLassoEpisodes.classList.contains("show")) {
        tedLassoEpisodes.scrollIntoView({
            behavior: "smooth"
        });
    }
});


// -----------------------------
// TED LASSO EPISODES
// -----------------------------

const episodeButtons =
    document.querySelectorAll("#tedLassoEpisodes button");

episodeButtons.forEach(button => {

    button.addEventListener("click", () => {

        const episode = button.dataset.episode;

        /*
            Add your authorized episode URLs here.
        */

        const episodeUrls = {
            1: "",
            2: "",
            3: "",
            4: "",
            5: "",
            6: "",
            7: "",
            8: "",
            9: "",
            10: ""
        };

        const url = episodeUrls[episode];

        if (!url) {
            alert(
                "No authorized URL has been added for Episode " +
                episode
            );
            return;
        }

        playVideo(
            url,
            "Ted Lasso — Season 1, Episode " + episode
        );
    });
});


// -----------------------------
// PLAYER
// -----------------------------

function playVideo(url, title) {

    spinner.style.display = "block";

    frame.style.display = "none";

    nowPlaying.textContent = title;

    frame.src = url;

    playerContainer.style.display = "block";

    frame.onload = () => {

        spinner.style.display = "none";

        frame.style.display = "block";
    };

    playerContainer.scrollIntoView({
        behavior: "smooth"
    });
}


// -----------------------------
// SEARCH
// -----------------------------

searchBar.addEventListener("input", () => {

    const search =
        searchBar.value.toLowerCase().trim();

    cards.forEach(card => {

        const title =
            card.querySelector("h2")
                .textContent
                .toLowerCase();

        card.style.display =
            title.includes(search)
                ? ""
                : "none";
    });
});
```

