const sidebarMenus = [
  {
    title: "Home",
    icon: "fa-house",
  },
  {
    title: "Search",
    icon: "fa-magnifying-glass",
  },
  {
    title: "TV",
    icon: "fa-tv",
  },
  {
    title: "Movies",
    icon: "fa-couch",
  },
  {
    title: "Sports",
    icon: "fa-person-running",
  },
  {
    title: "Sparks",
    icon: "fa-video",
  },
  {
    title: "Categories",
    icon: "fa-layer-group",
  },
  {
    title: "My Space",
    icon: "fa-user",
  },
];
const container = document.getElementById("containers");
const sidebar = document.getElementById("sidebar");

sidebar.addEventListener("mouseenter", () => {
  document.body.classList.remove("reverse");
  document.body.classList.add("gradient");
});

sidebar.addEventListener("mouseleave", () => {
  document.body.classList.remove("gradient");
  document.body.classList.add("reverse");

  setTimeout(() => {
    document.body.classList.remove("reverse");
  }, 600);
});

sidebarMenus.forEach((item) => {
  //div for storing title & icon
  const sideMenu = document.createElement("div");
  sideMenu.setAttribute("id", "sideMenu");
  sideMenu.setAttribute("class", item.title);

  //div for title
  const menuItem = document.createElement("h4");
  menuItem.textContent = item.title;
  menuItem.classList.add("title");

  //div for icon
  const icon = document.createElement("i");
  icon.classList.add("fas", item.icon, "icon");

  sideMenu.addEventListener("click", () => {
    document.querySelectorAll("#sideMenu").forEach((menu) => {
      //  sideMenu.style.color = "white"
      menu.classList.remove("active");
    });
    sideMenu.classList.add("active");
  });

  sideMenu.append(icon, menuItem);
  sidebar.appendChild(sideMenu);
});

// Building Explore Tab

const exploreTab = document.getElementById("explore-tab"); //GETTING EXPLORE-TAB

//CREATING TWO DIVS UNDER EXPLORE TAB FOR IMG AND DESC.
const [imageSection, exploreDescription] = [
  document.createElement("div"),
  document.createElement("div"),
];

imageSection.setAttribute("id", "explore-image-section");

const exploreImage = document.createElement("img");
Object.assign(exploreImage, {
  id: "explore-image",
  src: "https://shifu.hotstarext.com/SOURCE/VOD/cd-2025-06-18/MistryDTDnew_BB_W-8ae39263-5e66-40f0-baaf-b55558f88938.jpg",
  alt: "explore-image",
});

// CREATING DESCRIPTION FOR EXPLORE TAB
exploreDescription.setAttribute("id", "explore-description");
// Making 3 Div For 3 Section Of Description
const [title, description, expBtn] = [
  document.createElement("div"),
  document.createElement("div"),
  document.createElement("div"),
];
const [titleDiv1, titleDiv2] = [
  document.createElement("div"),
  document.createElement("div"),
];
const titleDiv1Img = document.createElement("img");
titleDiv1Img.setAttribute(
  "src",
  "https://brand-img1.hotstarext.com/image/upload/v1739279601/YR/Growth_120x120_Square_Logo.png"
);

const [titleDiv2Heading, titleDiv2SubHeading] = [
  document.createElement("h3"),
  document.createElement("h4"),
];
titleDiv2Heading.textContent = "Mistry";
titleDiv2SubHeading.textContent = "Streaming from June 27";

//function for dynamically setting attributes to each div
function setAttributes(el, attrs) {
  for (let key in attrs) {
    el.setAttribute(key, attrs[key]);
  }
}

[
  {
    el: title,
    attrs: { id: "title", text: "" },
    text: "India Vs England",
  },
  {
    el: description,
    attrs: {
      id: "description",
      text: "A dark investigate drama begins with Mystry unraveling strange crimes and a haunting truth",
    },
    text: "India Vs England",
  },
  { el: expBtn, attrs: { id: "expBtn", text: "Trailer" } },
].forEach(({ el, attrs }) => {
  setAttributes(el, attrs);
  console.log(attrs.text);
  el.innerText = attrs.text;
});
titleDiv2.append(titleDiv2Heading, titleDiv2SubHeading);
titleDiv1.appendChild(titleDiv1Img);
title.append(titleDiv1, titleDiv2);
exploreDescription.append(title, description, expBtn);
imageSection.appendChild(exploreImage);

exploreTab.append(imageSection, exploreDescription);

//CREATING BACKGROUND VIDEO COMPONENT

// FUNCTION FOR HERO Image Section

const movieDataContainer = document.getElementById("movie-data");
const playTrailerContainer = document.getElementById("play-trailer-container");
playTrailerContainer.classList.add("play-trailer-container");
movieDataContainer.classList.add("movie-data");
function heroSection() {
  const poster = document.createElement("img");
  poster.setAttribute(
    "src",
    "https://img10.hotstar.com/image/upload/f_auto,q_90,w_1920/sources/r1/cms/prod/3898/1750502723898-i"
  );
  poster.classList.add("poster");

  // making div for poster description

  const descriptionContainer = document.createElement("div");
  descriptionContainer.setAttribute("id", "description-container");
  descriptionContainer.classList.add("description-container");

  const posterDescription = document.createElement("div");
  posterDescription.classList.add("poster-description");
  const posterTitleImage = document.createElement("img");

  const posterDescriptionDetails = document.createElement("p");
  posterDescriptionDetails.classList.add("poster-details");
  posterDescriptionDetails.textContent =
    "Watch the live stream of the Major League Cricket 2025 match between MI New York and Washington Freedom";

  const watchBtn = document.createElement("button");
  const playIcon = document.createElement("i");
  playIcon.classList.add("fas", "fa-play", "play-icon");

  const spanBtn = document.createElement("span");
  spanBtn.textContent = "Watch Now";
  watchBtn.classList.add("btn");
  watchBtn.append(playIcon, spanBtn);

  const status = document.createElement("div");
  status.setAttribute("id", "status");
  status.classList.add("status");

  const [
    redDot,
    statusLive,
    statusViews,
    whiteDot,
    statusHeading,
    whiteDot2,
    statusCategory,
  ] = [
    document.createElement("div"),
    document.createElement("h3"),
    document.createElement("h4"),
    document.createElement("div"),
    document.createElement("h4"),
    document.createElement("div"),
    document.createElement("h4"),
  ];

  // putting contents to all divs
  posterTitleImage.setAttribute(
    "src",
    "https://img10.hotstar.com/image/upload/f_auto,h_148/sources/r1/cms/prod/7433/1750502707433-t"
  );
  posterTitleImage.classList.add("poster-image");

  redDot.classList.add("red-dot");
  statusLive.textContent = "LIVE";
  statusViews.textContent = "57K Views";
  whiteDot.classList.add("white-dot");
  statusHeading.textContent = "Major League Cricket 2025";
  statusHeading.classList.add("status-heading");
  whiteDot2.classList.add("white-dot");
  statusCategory.textContent = "Cricket";
  statusCategory.classList.add("status-category");

  status.append(
    redDot,
    statusLive,
    statusViews,
    whiteDot,
    statusHeading,
    whiteDot2,
    statusCategory
  );
  posterDescription.append(posterTitleImage, status);

  playTrailerContainer.append(poster);
  descriptionContainer.append(
    posterDescription,
    posterDescriptionDetails,
    watchBtn
  );
  movieDataContainer.append(descriptionContainer);
}
heroSection();

//FUNCTION FOR POPULAR MOVIES
const API_KEY = "06d23c05429bb5a61f61326a33279d60";
const BASE_URL = "https://api.themoviedb.org/3";
// const POPULAR_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
const NOW_PLAYING_URL = `${BASE_URL}/movie/now_playing?api_key=${API_KEY}`;
const POPULAR_URL = `${BASE_URL}/movie/popular?api_key=${API_KEY}`;
const TOP_RATED_URL = `${BASE_URL}/movie/top_rated?api_key=${API_KEY}`;
const UPCOMING = `${BASE_URL}/movie/upcoming?api_key=${API_KEY}`;
const AIRING_TODAY = `${BASE_URL}/tv/airing_today?api_key=${API_KEY}`;
const ON_THE_AIR = `${BASE_URL}/tv/on_the_air?api_key=${API_KEY}`;
const POPULAR_TV_SHOW = `${BASE_URL}/tv/popular?api_key=${API_KEY}`;
const TOP_RATED_SHOW = `${BASE_URL}/tv/top_rated?api_key=${API_KEY}`;

function movieCards() {
  async function movieData() {
    const response = await fetch(NOW_PLAYING_URL);
    const data = await response.json();
    console.log(data);
    const nowPlayingMoviesList = data.results;
    console.log(nowPlayingMoviesList);
    const psrc = nowPlayingMoviesList[0].poster_path;
    console.log(psrc);
    const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

    //creating div for now playing movies

    const playingMovies = document.createElement("div");
    playingMovies.setAttribute("id", "playing-movies-container");
    playingMovies.classList.add("playing-movies-container");

    //title of div
    const playingMoviesTitle = document.createElement("h2");
    playingMoviesTitle.textContent = "Latest Releases";

    playingMovies.appendChild(playingMoviesTitle);
    const newDivExp = document.createElement("div");
    newDivExp.setAttribute("id", "hi");
    playingMovies.appendChild(newDivExp);
    const playingMoviesPosterDiv = document.createElement("div");
    playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
    playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

    nowPlayingMoviesList.forEach((nowPlayingMovie) => {
      const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

      const playingMoviesPoster = document.createElement("img");
      playingMoviesPoster.setAttribute("src", nowPLayingPoster);
      playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
      playingMoviesPoster.classList.add("playing-movies-poster-image");

      playingMoviesPosterDiv.appendChild(playingMoviesPoster);
      playingMovies.appendChild(playingMoviesPosterDiv);
    });

    playingMovies.appendChild(playingMoviesPosterDiv);

    movieDataContainer.appendChild(playingMovies);

    const movieData = document.querySelector(".movie-data");
    const trailerContainer = document.querySelector(".play-trailer-container");

    movieData.addEventListener("scroll", () => {
      const scrollTop = movieData.scrollTop;
      const scrollHeight = movieData.scrollHeight - movieData.clientHeight;
      const scrollPercent = scrollTop / scrollHeight;

      const fadeStart = 0.1; // fade starts after 10% scroll
      const fadeEnd = 0.2; // fully invisible after 35% scroll

      if (scrollPercent < fadeStart) {
        trailerContainer.style.opacity = "1";
      } else if (scrollPercent >= fadeStart && scrollPercent <= fadeEnd) {
        const fadeProgress =
          (scrollPercent - fadeStart) / (fadeEnd - fadeStart);
        trailerContainer.style.opacity = `${1 - fadeProgress}`;
      } else {
        trailerContainer.style.opacity = "0";
      }
    });
  }
  movieData();

  async function popular() {
    const response = await fetch(POPULAR_URL);
    const data = await response.json();
    console.log(data);
    const nowPlayingMoviesList = data.results;
    console.log(nowPlayingMoviesList);
    // const psrc = nowPlayingMoviesList[0].poster_path;
    // console.log(psrc);
    // const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

    //creating div for now playing movies

    const playingMovies = document.createElement("div");
    playingMovies.setAttribute("id", "popular-movies-container");
    playingMovies.classList.add("popular-movies-container");

    //title of div
    const playingMoviesTitle = document.createElement("h2");
    playingMoviesTitle.textContent = "Popular Movies";

    playingMovies.appendChild(playingMoviesTitle);
    const newDivExp = document.createElement("div");
    newDivExp.setAttribute("id", "hi");
    playingMovies.appendChild(newDivExp);
    const playingMoviesPosterDiv = document.createElement("div");
    playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
    playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

    nowPlayingMoviesList.forEach((nowPlayingMovie) => {
      const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

      const playingMoviesPoster = document.createElement("img");
      playingMoviesPoster.setAttribute("src", nowPLayingPoster);
      playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
      playingMoviesPoster.classList.add("playing-movies-poster-image");

      playingMoviesPosterDiv.appendChild(playingMoviesPoster);
      playingMovies.appendChild(playingMoviesPosterDiv);
    });

    playingMovies.appendChild(playingMoviesPosterDiv);

    movieDataContainer.appendChild(playingMovies);
  }

  popular();

  async function topRated() {
    const response = await fetch(TOP_RATED_URL);
    const data = await response.json();
    console.log(data);
    const nowPlayingMoviesList = data.results;
    console.log(nowPlayingMoviesList);
    const psrc = nowPlayingMoviesList[0].poster_path;
    console.log(psrc);
    const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

    //creating div for now playing movies

    const playingMovies = document.createElement("div");
    playingMovies.setAttribute("id", "top-rated-movies-container");
    playingMovies.classList.add("popular-movies-container");

    //title of div
    const playingMoviesTitle = document.createElement("h2");
    playingMoviesTitle.textContent = "Top Rated Movies";

    playingMovies.appendChild(playingMoviesTitle);
    const newDivExp = document.createElement("div");
    newDivExp.setAttribute("id", "hi");
    playingMovies.appendChild(newDivExp);
    const playingMoviesPosterDiv = document.createElement("div");
    playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
    playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

    nowPlayingMoviesList.forEach((nowPlayingMovie) => {
      const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

      const playingMoviesPoster = document.createElement("img");
      playingMoviesPoster.setAttribute("src", nowPLayingPoster);
      playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
      playingMoviesPoster.classList.add("playing-movies-poster-image");

      playingMoviesPosterDiv.appendChild(playingMoviesPoster);
      playingMovies.appendChild(playingMoviesPosterDiv);
    });

    playingMovies.appendChild(playingMoviesPosterDiv);

    movieDataContainer.appendChild(playingMovies);
  }

  topRated();

  async function upcoming() {
    const response = await fetch(UPCOMING);
    const data = await response.json();
    console.log(data);
    const nowPlayingMoviesList = data.results;
    console.log(nowPlayingMoviesList);
    const psrc = nowPlayingMoviesList[0].poster_path;
    console.log(psrc);
    const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

    //creating div for now playing movies

    const playingMovies = document.createElement("div");
    playingMovies.setAttribute("id", "upcoming-movies-container");
    playingMovies.classList.add("popular-movies-container");

    //title of div
    const playingMoviesTitle = document.createElement("h2");
    playingMoviesTitle.textContent = "Upcoming Movies";

    playingMovies.appendChild(playingMoviesTitle);
    const newDivExp = document.createElement("div");
    newDivExp.setAttribute("id", "hi");
    playingMovies.appendChild(newDivExp);
    const playingMoviesPosterDiv = document.createElement("div");
    playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
    playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

    nowPlayingMoviesList.forEach((nowPlayingMovie) => {
      const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

      const playingMoviesPoster = document.createElement("img");
      playingMoviesPoster.setAttribute("src", nowPLayingPoster);
      playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
      playingMoviesPoster.classList.add("playing-movies-poster-image");

      playingMoviesPosterDiv.appendChild(playingMoviesPoster);
      playingMovies.appendChild(playingMoviesPosterDiv);
    });

    playingMovies.appendChild(playingMoviesPosterDiv);

    movieDataContainer.appendChild(playingMovies);
  }

  upcoming();

  async function airingToday() {
    const response = await fetch(AIRING_TODAY);
    const data = await response.json();
    console.log(data);
    const nowPlayingMoviesList = data.results;
    console.log(nowPlayingMoviesList);
    const psrc = nowPlayingMoviesList[0].poster_path;
    console.log(psrc);
    const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

    //creating div for now playing movies

    const playingMovies = document.createElement("div");
    playingMovies.setAttribute("id", "upcoming-movies-container");
    playingMovies.classList.add("popular-movies-container");

    //title of div
    const playingMoviesTitle = document.createElement("h2");
    playingMoviesTitle.textContent = "Airing Today";

    playingMovies.appendChild(playingMoviesTitle);
    const newDivExp = document.createElement("div");
    newDivExp.setAttribute("id", "hi");
    playingMovies.appendChild(newDivExp);
    const playingMoviesPosterDiv = document.createElement("div");
    playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
    playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

    nowPlayingMoviesList.forEach((nowPlayingMovie) => {
      const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

      const playingMoviesPoster = document.createElement("img");
      playingMoviesPoster.setAttribute("src", nowPLayingPoster);
      playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
      playingMoviesPoster.classList.add("playing-movies-poster-image");

      playingMoviesPosterDiv.appendChild(playingMoviesPoster);
      playingMovies.appendChild(playingMoviesPosterDiv);
    });

    playingMovies.appendChild(playingMoviesPosterDiv);

    movieDataContainer.appendChild(playingMovies);
  }

  airingToday();

  async function onTheAir() {
    const response = await fetch(ON_THE_AIR);
    const data = await response.json();
    console.log(data);
    const nowPlayingMoviesList = data.results;
    console.log(nowPlayingMoviesList);
    const psrc = nowPlayingMoviesList[0].poster_path;
    console.log(psrc);
    const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

    //creating div for now playing movies

    const playingMovies = document.createElement("div");
    playingMovies.setAttribute("id", "upcoming-movies-container");
    playingMovies.classList.add("popular-movies-container");

    //title of div
    const playingMoviesTitle = document.createElement("h2");
    playingMoviesTitle.textContent = "On The Air";

    playingMovies.appendChild(playingMoviesTitle);
    const newDivExp = document.createElement("div");
    newDivExp.setAttribute("id", "hi");
    playingMovies.appendChild(newDivExp);
    const playingMoviesPosterDiv = document.createElement("div");
    playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
    playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

    nowPlayingMoviesList.forEach((nowPlayingMovie) => {
      const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

      const playingMoviesPoster = document.createElement("img");
      playingMoviesPoster.setAttribute("src", nowPLayingPoster);
      playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
      playingMoviesPoster.classList.add("playing-movies-poster-image");

      playingMoviesPosterDiv.appendChild(playingMoviesPoster);
      playingMovies.appendChild(playingMoviesPosterDiv);
    });

    playingMovies.appendChild(playingMoviesPosterDiv);

    movieDataContainer.appendChild(playingMovies);
  }

  onTheAir();

  async function popularTvShow() {
    const response = await fetch(POPULAR_TV_SHOW);
    const data = await response.json();
    console.log(data);
    const nowPlayingMoviesList = data.results;
    console.log(nowPlayingMoviesList);
    const psrc = nowPlayingMoviesList[0].poster_path;
    console.log(psrc);
    const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

    //creating div for now playing movies

    const playingMovies = document.createElement("div");
    playingMovies.setAttribute("id", "upcoming-movies-container");
    playingMovies.classList.add("popular-movies-container");

    //title of div
    const playingMoviesTitle = document.createElement("h2");
    playingMoviesTitle.textContent = "Popular TV Show";

    playingMovies.appendChild(playingMoviesTitle);
    const newDivExp = document.createElement("div");
    newDivExp.setAttribute("id", "hi");
    playingMovies.appendChild(newDivExp);
    const playingMoviesPosterDiv = document.createElement("div");
    playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
    playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

    nowPlayingMoviesList.forEach((nowPlayingMovie) => {
      const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

      const playingMoviesPoster = document.createElement("img");
      playingMoviesPoster.setAttribute("src", nowPLayingPoster);
      playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
      playingMoviesPoster.classList.add("playing-movies-poster-image");

      playingMoviesPosterDiv.appendChild(playingMoviesPoster);
      playingMovies.appendChild(playingMoviesPosterDiv);
    });

    playingMovies.appendChild(playingMoviesPosterDiv);

    movieDataContainer.appendChild(playingMovies);
  }

  popularTvShow();

  async function topRatedTvShow() {
    const response = await fetch(TOP_RATED_SHOW);
    const data = await response.json();
    console.log(data);
    const nowPlayingMoviesList = data.results;
    console.log(nowPlayingMoviesList);
    const psrc = nowPlayingMoviesList[0].poster_path;
    console.log(psrc);
    const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

    //creating div for now playing movies

    const playingMovies = document.createElement("div");
    playingMovies.setAttribute("id", "upcoming-movies-container");
    playingMovies.classList.add("popular-movies-container");

    //title of div
    const playingMoviesTitle = document.createElement("h2");
    playingMoviesTitle.textContent = "Top Rated TV Show";

    playingMovies.appendChild(playingMoviesTitle);
    const newDivExp = document.createElement("div");
    newDivExp.setAttribute("id", "hi");
    playingMovies.appendChild(newDivExp);
    const playingMoviesPosterDiv = document.createElement("div");
    playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
    playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

    nowPlayingMoviesList.forEach((nowPlayingMovie) => {
      const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

      const playingMoviesPoster = document.createElement("img");
      playingMoviesPoster.setAttribute("src", nowPLayingPoster);
      playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
      playingMoviesPoster.classList.add("playing-movies-poster-image");

      playingMoviesPosterDiv.appendChild(playingMoviesPoster);
      playingMovies.appendChild(playingMoviesPosterDiv);
    });

    playingMovies.appendChild(playingMoviesPosterDiv);

    movieDataContainer.appendChild(playingMovies);
  }

  topRatedTvShow();

  //  async function upcoming() {
  //     const response = await fetch(UPCOMING);
  //     const data = await response.json();
  //     console.log(data);
  //     const nowPlayingMoviesList = data.results;
  //     console.log(nowPlayingMoviesList);
  //     const psrc = nowPlayingMoviesList[0].poster_path;
  //     console.log(psrc);
  //     const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

  //     //creating div for now playing movies

  //     const playingMovies = document.createElement("div");
  //     playingMovies.setAttribute("id", "upcoming-movies-container");
  //     playingMovies.classList.add("popular-movies-container");

  //     //title of div
  //     const playingMoviesTitle = document.createElement("h2");
  //     playingMoviesTitle.textContent = "Upcoming Movies";

  //     playingMovies.appendChild(playingMoviesTitle);
  //     const newDivExp = document.createElement("div");
  //     newDivExp.setAttribute("id", "hi");
  //     playingMovies.appendChild(newDivExp);
  //     const playingMoviesPosterDiv = document.createElement("div");
  //       playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
  //       playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

  //     nowPlayingMoviesList.forEach((nowPlayingMovie) => {
  //       const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

  //       const playingMoviesPoster = document.createElement("img");
  //       playingMoviesPoster.setAttribute("src", nowPLayingPoster);
  //       playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
  //       playingMoviesPoster.classList.add("playing-movies-poster-image");

  //       playingMoviesPosterDiv.appendChild(playingMoviesPoster);
  //       playingMovies.appendChild(playingMoviesPosterDiv);
  //     });

  //     playingMovies.appendChild(playingMoviesPosterDiv)

  //     movieDataContainer.appendChild(playingMovies);

  //   }

  // upcoming()

  //  async function upcoming() {
  //     const response = await fetch(UPCOMING);
  //     const data = await response.json();
  //     console.log(data);
  //     const nowPlayingMoviesList = data.results;
  //     console.log(nowPlayingMoviesList);
  //     const psrc = nowPlayingMoviesList[0].poster_path;
  //     console.log(psrc);
  //     const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

  //     //creating div for now playing movies

  //     const playingMovies = document.createElement("div");
  //     playingMovies.setAttribute("id", "upcoming-movies-container");
  //     playingMovies.classList.add("popular-movies-container");

  //     //title of div
  //     const playingMoviesTitle = document.createElement("h2");
  //     playingMoviesTitle.textContent = "Upcoming Movies";

  //     playingMovies.appendChild(playingMoviesTitle);
  //     const newDivExp = document.createElement("div");
  //     newDivExp.setAttribute("id", "hi");
  //     playingMovies.appendChild(newDivExp);
  //     const playingMoviesPosterDiv = document.createElement("div");
  //       playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
  //       playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

  //     nowPlayingMoviesList.forEach((nowPlayingMovie) => {
  //       const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

  //       const playingMoviesPoster = document.createElement("img");
  //       playingMoviesPoster.setAttribute("src", nowPLayingPoster);
  //       playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
  //       playingMoviesPoster.classList.add("playing-movies-poster-image");

  //       playingMoviesPosterDiv.appendChild(playingMoviesPoster);
  //       playingMovies.appendChild(playingMoviesPosterDiv);
  //     });

  //     playingMovies.appendChild(playingMoviesPosterDiv)

  //     movieDataContainer.appendChild(playingMovies);

  //   }

  // upcoming()

  //  async function upcoming() {
  //     const response = await fetch(UPCOMING);
  //     const data = await response.json();
  //     console.log(data);
  //     const nowPlayingMoviesList = data.results;
  //     console.log(nowPlayingMoviesList);
  //     const psrc = nowPlayingMoviesList[0].poster_path;
  //     console.log(psrc);
  //     const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

  //     //creating div for now playing movies

  //     const playingMovies = document.createElement("div");
  //     playingMovies.setAttribute("id", "upcoming-movies-container");
  //     playingMovies.classList.add("popular-movies-container");

  //     //title of div
  //     const playingMoviesTitle = document.createElement("h2");
  //     playingMoviesTitle.textContent = "Upcoming Movies";

  //     playingMovies.appendChild(playingMoviesTitle);
  //     const newDivExp = document.createElement("div");
  //     newDivExp.setAttribute("id", "hi");
  //     playingMovies.appendChild(newDivExp);
  //     const playingMoviesPosterDiv = document.createElement("div");
  //       playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
  //       playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

  //     nowPlayingMoviesList.forEach((nowPlayingMovie) => {
  //       const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

  //       const playingMoviesPoster = document.createElement("img");
  //       playingMoviesPoster.setAttribute("src", nowPLayingPoster);
  //       playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
  //       playingMoviesPoster.classList.add("playing-movies-poster-image");

  //       playingMoviesPosterDiv.appendChild(playingMoviesPoster);
  //       playingMovies.appendChild(playingMoviesPosterDiv);
  //     });

  //     playingMovies.appendChild(playingMoviesPosterDiv)

  //     movieDataContainer.appendChild(playingMovies);

  //   }

  // upcoming()

  //  async function upcoming() {
  //     const response = await fetch(UPCOMING);
  //     const data = await response.json();
  //     console.log(data);
  //     const nowPlayingMoviesList = data.results;
  //     console.log(nowPlayingMoviesList);
  //     const psrc = nowPlayingMoviesList[0].poster_path;
  //     console.log(psrc);
  //     const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

  //     //creating div for now playing movies

  //     const playingMovies = document.createElement("div");
  //     playingMovies.setAttribute("id", "upcoming-movies-container");
  //     playingMovies.classList.add("popular-movies-container");

  //     //title of div
  //     const playingMoviesTitle = document.createElement("h2");
  //     playingMoviesTitle.textContent = "Upcoming Movies";

  //     playingMovies.appendChild(playingMoviesTitle);
  //     const newDivExp = document.createElement("div");
  //     newDivExp.setAttribute("id", "hi");
  //     playingMovies.appendChild(newDivExp);
  //     const playingMoviesPosterDiv = document.createElement("div");
  //       playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
  //       playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

  //     nowPlayingMoviesList.forEach((nowPlayingMovie) => {
  //       const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

  //       const playingMoviesPoster = document.createElement("img");
  //       playingMoviesPoster.setAttribute("src", nowPLayingPoster);
  //       playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
  //       playingMoviesPoster.classList.add("playing-movies-poster-image");

  //       playingMoviesPosterDiv.appendChild(playingMoviesPoster);
  //       playingMovies.appendChild(playingMoviesPosterDiv);
  //     });

  //     playingMovies.appendChild(playingMoviesPosterDiv)

  //     movieDataContainer.appendChild(playingMovies);

  //   }

  // upcoming()

  //  async function upcoming() {
  //     const response = await fetch(UPCOMING);
  //     const data = await response.json();
  //     console.log(data);
  //     const nowPlayingMoviesList = data.results;
  //     console.log(nowPlayingMoviesList);
  //     const psrc = nowPlayingMoviesList[0].poster_path;
  //     console.log(psrc);
  //     const posterURL = `https://image.tmdb.org/t/p/w500${psrc}`;

  //     //creating div for now playing movies

  //     const playingMovies = document.createElement("div");
  //     playingMovies.setAttribute("id", "upcoming-movies-container");
  //     playingMovies.classList.add("popular-movies-container");

  //     //title of div
  //     const playingMoviesTitle = document.createElement("h2");
  //     playingMoviesTitle.textContent = "Upcoming Movies";

  //     playingMovies.appendChild(playingMoviesTitle);
  //     const newDivExp = document.createElement("div");
  //     newDivExp.setAttribute("id", "hi");
  //     playingMovies.appendChild(newDivExp);
  //     const playingMoviesPosterDiv = document.createElement("div");
  //       playingMoviesPosterDiv.setAttribute("id", "playing-movies-poster-div");
  //       playingMoviesPosterDiv.classList.add("playing-movies-poster-div");

  //     nowPlayingMoviesList.forEach((nowPlayingMovie) => {
  //       const nowPLayingPoster = `https://image.tmdb.org/t/p/w500${nowPlayingMovie.poster_path}`;

  //       const playingMoviesPoster = document.createElement("img");
  //       playingMoviesPoster.setAttribute("src", nowPLayingPoster);
  //       playingMoviesPoster.setAttribute("id", "playing-movies-poster-image");
  //       playingMoviesPoster.classList.add("playing-movies-poster-image");

  //       playingMoviesPosterDiv.appendChild(playingMoviesPoster);
  //       playingMovies.appendChild(playingMoviesPosterDiv);
  //     });

  //     playingMovies.appendChild(playingMoviesPosterDiv)

  //     movieDataContainer.appendChild(playingMovies);

  //   }

  // upcoming()
}

movieCards();

function search() {}
