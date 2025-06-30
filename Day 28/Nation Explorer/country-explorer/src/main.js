console.log("hello world");

const inputSearch = document.getElementById("inputSearch");
const region = document.getElementById("region");
const sort = document.getElementById("sort");
const favorites = document.getElementById("favorites");


const countryCard = document.getElementById("countryCard");
let allCountries = [];
let filteredCountries = [];
let currentBatch = 0;
const batchSize = 20;

// Debounce helper
function debounce(fn, delay = 200) {
  let timeout;
  return (...args) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => fn(...args), delay);
  };
}

// Fetch all countries once
async function call() {
  try {
    const response = await fetch(
      "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,languages,currencies"
    );
    if (!response.ok) throw new Error("Failed to fetch");

    const data = await response.json();
    allCountries = data;
    filteredCountries = data;
    currentBatch = 0;

    renderBatch(); // Load first 20
  } catch (err) {
    console.error("Error:", err);
  }
}

// Render 20 country cards per batch
function renderBatch() {
  const start = currentBatch * batchSize;
  const end = start + batchSize;
  const batch = filteredCountries.slice(start, end);
  console.log(batch);

  const fragment = document.createDocumentFragment();

  batch.forEach((country) => {
    const div = document.createElement("div");
    div.innerHTML = generateCountryCardHTML(country);
    fragment.appendChild(div.firstElementChild);
  });

  countryCard.appendChild(fragment);
  currentBatch++;
 

}

// Country card HTML template
function generateCountryCardHTML({
  name,
  capital,
  population,
  region,
  flags,
  languages,
  currencies,
}) {
  
  return `
    <div class="cursor-pointer relative max-w-sm w-full bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-4 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:shadow-2xl card-container transform transition-all duration-500 ease-out hover:-translate-y-3 hover:scale-105 hover:border-white/20 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none overflow-hidden group">
    <div  class="absolute text-red-600 z-30  right-6 bottom-12 bg-[rgb(204,204,204)] rounded-full p-2 flex items-center justify-center">
    <i class="fa-solid fa-heart"></i>


    </div>
      <div class="absolute -inset-px bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group"></div>
      <div class="relative z-10 space-y-4">
        <div class="relative h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5 shadow-lg shadow-black/20 child group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-300">
          <img src="${
            flags.svg
          }" alt="flag" loading="lazy" class="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 ease-out group-hover:scale-110 group-hover:brightness-110" />
          <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
        </div>
        <div class="text-center space-y-2">
          <h2 class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300 bg-clip-text text-transparent tracking-tight">
            ${name.common}
          </h2>
          <div class="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
        </div>
        <div class="space-y-3 text-white text-sm font-medium">
          <p><strong class="text-purple-400">Capital:</strong> ${capital}</p>
          <p><strong class="text-purple-400">Population:</strong> ${population.toLocaleString()}</p>
          <p><strong class="text-purple-400">Region:</strong> ${region}</p>
          <p><strong class="text-purple-400">Languages:</strong> ${Object.values(
            languages || {}
          ).join(", ")}</p>
          <p><strong class="text-purple-400">Currency:</strong> ${
            Object.values(currencies || {})[0]?.name || "-"
          } (${Object.values(currencies || {})[0]?.symbol || "-"})</p>
        </div>
      </div>

      
    </div>

   
  `;
}

// Scroll detection
window.addEventListener(
  "scroll",
  debounce(() => {
    const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
    if (scrollTop + clientHeight >= scrollHeight - 200) {
      if (currentBatch * batchSize < filteredCountries.length) {
        renderBatch();
      }
    }
  }, 200)
);

console.log(allCountries);

call();

let countryList = [];
async function searchFilter() {
  try {
    await call();
    console.log(allCountries);
    countryList = allCountries;

    // code for live search

    inputSearch.addEventListener("input", (e) => {
      const value = e.target.value.trim().toLowerCase();
      // console.log(value);
      const errorMessage = document.getElementById("search-error");
      const filteredCountryList = allCountries.filter((country) => {
        const countryName = country.name.common.toLowerCase();
        if (countryName.includes(value)) return country;
      });

      countryCard.innerHTML = "";

      if (filteredCountryList.length === 0) {
        errorMessage.classList.remove("hidden");

        return;
      } else {
        errorMessage.classList.add("hidden");
      }

      function showingSearchResult() {
        const btchs = 20;
        const start = currentBatch * btchs;
        const end = start + btchs;
        const batch =
          filteredCountryList.length >= 20
            ? filteredCountryList.slice(start, end)
            : filteredCountryList;
        // console.log(batch);

        const fragment = document.createDocumentFragment();
        // console.log(batch);
        batch.forEach((count) => {
          // console.log(count);
          const div = document.createElement("div");
          div.innerHTML = generateCountryCardHTML(count);
          fragment.appendChild(div.firstElementChild);
        });

        countryCard.appendChild(fragment);
      }

      showingSearchResult();
    });
  } catch (error) {
    console.log("Fetching Failed", error);
    errorMessage.textContent = "Failed to fetch countries. Please try again.";
    errorMessage.classList.remove("hidden");
  }
}

searchFilter();

// Filter by region

const regionFilter = document.getElementById("region");

const filterOptions = document.getElementById("region-filter");
const filterTitle = document.getElementById("filter-title");
const liList = document.querySelectorAll("#options");
const count = document.getElementById("count");

const errorMessage = document.getElementById("search-error");

regionFilter.addEventListener("click", () => {
  filterOptions.classList.toggle("hidden");

  liList.forEach((li) => {
    li.addEventListener("click", () => {
      filterTitle.textContent = li.textContent;

      const region = li.textContent.toLowerCase();
      //region filter
      const firstLiAllRegions = document.querySelector(".first-li-all-region");
      firstLiAllRegions.addEventListener("click", () => {
        location.reload();
        console.log("reload");
      });

      async function regionFilter(region) {
        countryCard.innerHTML = "";
        try {
          const response = await fetch(
            `https://restcountries.com/v3.1/region/${region}`
          );

          if (!response.ok)
            throw new Error(`Filter by region Failed: ${response.status}`);
          const data = await response.json();

          count.textContent = data.length;
          console.log(data);

          function showingSearchResult() {
            const btchs = 20;
            const start = currentBatch * btchs;
            const end = start + btchs;
            const batch = data.length >= 20 ? data.slice(start, end) : data;
            // console.log(batch);

            const fragment = document.createDocumentFragment();
            // console.log(batch);
            batch.forEach((count) => {
              // console.log(count);
              const div = document.createElement("div");
              div.innerHTML = generateCountryCardHTML(count);
              fragment.appendChild(div.firstElementChild);
            });

            countryCard.appendChild(fragment);
          }

          showingSearchResult();
        } catch (error) {
          console.log("Fetching Failed", error);
          errorMessage.textContent =
            "Failed to fetch countries. Please try again.";
          errorMessage.classList.remove("hidden");
        }
      }
      regionFilter(region);
    });
  });
});

 

