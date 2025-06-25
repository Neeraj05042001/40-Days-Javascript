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
  sideMenu.setAttribute("id", "sideMenu", "ide");
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

const home = document.querySelector(".Home");
home.addEventListener("click", function () {
  window.location.href = "index.html";
});

const searchContainer = document.getElementById("container-box");

const inputBox = document.getElementById("input-box");

const input = document.createElement("input");
console.log(input);
input.setAttribute("type", "text");
input.setAttribute("placeholder", "Movies, Shows and more");
input.setAttribute("id", "input");
input.setAttribute("value", "");
input.classList.add("input-box");

// search icon
const searchIcon = document.createElement("i");

searchIcon.classList.add("fas", "fa-magnifying-glass", "search-icon");

// input.append(searchIcon)

console.log(searchContainer);

function searchInput() {
  const inputEntry = document.getElementById("input");
  //   console.log(input);
  inputEntry.addEventListener("input", function () {
    const inputValue = input.value.trim().toLowerCase();
    // console.log(inputValue);
    const API_KEY = "06d23c05429bb5a61f61326a33279d60";
    const BASE_URL = "https://api.themoviedb.org/3";
    const MOVIE_COLLECTION = `${BASE_URL}/trending/all/day?api_key=${API_KEY}`;

    async function searchFilter() {
      try {
        const response = await fetch(MOVIE_COLLECTION);
        const data = await response.json();
        const movieList = data.results;

        const filtered = movieList.filter((movie) => {
          const movieTitle = (movie.original_title || movie.name).toLowerCase();
          return movieTitle.includes(inputValue);
        });
        const searchContainer = document.getElementById("filter-container");
        searchContainer.innerHTML = "";

        console.log(filtered);
        if (filtered.length === 0) {
          searchContainer.innerHTML = "";
          throw new Error("OOPS!!! No movies found matching the search query.");
        }

        function component({ title, poster, date, lang }) {
          //movie poster & details container

          const divTitle = document.getElementById("titlec");
          divTitle.textContent = "TOP RESULT";
          const filterContainer = document.createElement("div");
          filterContainer.setAttribute("id", "movie-container");

          // const leftContainer
          const leftContainer = document.createElement("div");
          leftContainer.setAttribute("id", "left-div");
          const leftPoster = document.createElement("img");
          leftPoster.setAttribute("id", "poster-img");
          leftPoster.setAttribute("alt", "poster-img");
          leftPoster.setAttribute("src", poster);

          //RIGHT Container
          const rightContainer = document.createElement("div");

          rightContainer.setAttribute("id", "right-div");
          const rightTitle = document.createElement("h2");
          rightTitle.textContent = title;
          rightTitle.setAttribute("id", "right-title");
          const rightDescription = document.createElement("div");
          rightDescription.setAttribute("id", "description");
          const [year, whiteDot1, time, whiteDot2, language, whiteDot3, rated] =
            [
              document.createElement("h3"),
              document.createElement("div"),
              document.createElement("h3"),
              document.createElement("div"),
              document.createElement("h3"),
              document.createElement("div"),
              document.createElement("h3"),
            ];

          year.setAttribute("id", "year");
          year.textContent = date;
          whiteDot1.setAttribute("id", "whitedot");
          time.setAttribute("id", "time");
          time.textContent = "2H 12Min";
          whiteDot2.setAttribute("id", "whitedot");
          language.setAttribute("id", "language");
          language.textContent = lang === "en" ? "English" : "Hindi";
          whiteDot3.setAttribute("id", "whitedot");
          rated.setAttribute("id", "rated");
          rated.textContent = "A";

          //Button WATCHNOW
          const watchBtn = document.createElement("button");

          watchBtn.classList.add("btni");
          const playIcon = document.createElement("i");
          playIcon.classList.add("fas", "fa-play", "play-icon");

          const spanBtn = document.createElement("span");
          spanBtn.textContent = "Watch Now";

          watchBtn.append(playIcon, spanBtn);

          rightDescription.append(
            year,
            whiteDot1,
            time,
            whiteDot2,
            language,
            whiteDot3,
            rated
          );
          rightContainer.append(rightTitle, rightDescription, watchBtn);
          leftContainer.appendChild(leftPoster);
          filterContainer.append(leftContainer, rightContainer);
          searchContainer.appendChild(filterContainer);
        }

        filtered.forEach((movie) => {
          const title = movie.original_title || movie.name;
          const poster = `https://image.tmdb.org/t/p/w500${movie.poster_path}`;
          const date = movie.release_date;
          const lang = movie.original_language;
          console.log(poster);

          component({ title, poster, date, lang });
        });
      } catch (error) {
        // console.error("Search failed:", error);
        const conta = document.getElementById("filtered-movie-container")
        const err = document.createElement("h1")
        err.classList.add("err")
        err.textContent = error
        conta.appendChild(err)
      }
    }
    searchFilter();
  });
}
inputBox.append(input, searchIcon);
searchInput();
