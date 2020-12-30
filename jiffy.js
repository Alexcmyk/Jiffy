function createVideo(src) {
  const video = document.createElement("video");
  video.src = src;
  video.autoplay = true;
  video.loop = true;
  video.className = "video";
  return video;
}

fetch("https://api.giphy.com/v1/gifs/search?api_key=HmeVCSljK5cHmx2QpQw6y42PjsHtdd2j&q=dogs&limit=50&offset=0&rating=pg-13&lang=en")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const gif = json.data[2];
    const src = gif.images.original.mp4;

    const video = createVideo(src);

    const videoEl = document.querySelector(".videos");
    // videoEl.appendChild(video);
  })
  .catch((error) => {
    console.log("error");
  });

const searchEl = document.querySelector(".search-input");
const hintEl = document.querySelector(".search-hint");

const doSearch = (event) => {
  const searchTerm = searchEl.value;

  // Search hint functionality

  if (searchTerm.length > 2) {
    hintEl.innerHTML = `Hit enter to search for <span class="white">${searchTerm}</span>`;
    document.body.classList.add("show-hint");
  } else {
    document.body.classList.remove("show-hint");
  }

  // Conditional if statement for the search input - might not need?
  if (event.key === "Enter" && searchTerm.length > 2) {
    console.log("Search for", searchTerm);
  }
};

searchEl.addEventListener("keyup", doSearch);
