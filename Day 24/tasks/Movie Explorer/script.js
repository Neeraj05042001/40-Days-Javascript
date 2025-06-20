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




const[titleDiv1, titleDiv2] = [document.createElement('div'), document.createElement('div')]
const titleDiv1Img = document.createElement('img')
titleDiv1Img.setAttribute("src", "https://brand-img1.hotstarext.com/image/upload/v1739279601/YR/Growth_120x120_Square_Logo.png")

const [titleDiv2Heading, titleDiv2SubHeading] = [document.createElement('h3'), document.createElement('h4')]
titleDiv2Heading.textContent = "Mistry"
titleDiv2SubHeading.textContent = "Streaming from June 27"


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
titleDiv2.append(titleDiv2Heading, titleDiv2SubHeading)
titleDiv1.appendChild(titleDiv1Img)
title.append(titleDiv1, titleDiv2)
exploreDescription.append(title, description, expBtn);
imageSection.appendChild(exploreImage);

exploreTab.append(imageSection, exploreDescription);

// const API_KEY = "06d23c05429bb5a61f61326a33279d60";
// const BASE_URL = "https://api.themoviedb.org/3";

// const popularURL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;

// async function data(url) {
//   const response = await fetch(url);
//   // const popularURL = `${BASE_URL}/movie/popular?api_key=${API_KEY}&language=en-US&page=1`;
//   // const response =  await fetch("'https://api.themoviedb.org/3/account/" + {API_KEY} + "/favorite/movies?language=en-US&page=1&sort_by=created_at.asc'")
//   const data = await response.json();
//   console.log(data);
// }
// data(popularURL);
