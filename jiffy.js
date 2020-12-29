fetch("https://api.giphy.com/v1/gifs/search?api_key=HmeVCSljK5cHmx2QpQw6y42PjsHtdd2j&q=dogs&limit=50&offset=0&rating=pg-13&lang=en")
  .then((response) => {
    return response.json();
  })
  .then((json) => {
    const gif = json.data[0];
    const src = gif.images.original.mp4;

    const video = document.createElement("video");
    video.src = src;
    video.autoplay = true;
    video.loop = true;

    const videoEl = document.querySelector(".videos");
    videoEl.appendChild(video);
  })
  .catch((error) => {
    console.log("error");
  });
