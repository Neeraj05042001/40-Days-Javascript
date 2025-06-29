console.log("hello world");

const inputSearch = document.getElementById("inputSearch");
const region = document.getElementById("region");
const sort = document.getElementById("sort");
const favorites = document.getElementById("favorites");
// const countryCard = document.getElementById("countryCard");

// async function country(name) {
//   try {
//     const response = await fetch(
//       `https://restcountries.com/v3.1/name/${name}?fullText=true`
//     );

//     if (!response.ok)
//       throw new Error(`Failed Fetching Data:${response.status}`);

//     const data = await response.json();
//     console.log(data);
//   } catch (error) {
//     console.log("Fetching details failed", error);
//   }
// }

// country("india");

// let allCountries
// let currentBatch = 0;
// const batchSize = 20;
// let filteredCountries = allCountries;

// renderBatch();

// function renderBatch() {
//   const start = currentBatch * batchSize;
//   const end = start + batchSize;
//   const batch = filteredCountries.slice(start, end)

//   const fragment = document.createDocumentFragment();

//   batch.forEach((country) => {
//     const div = document.createElement("div");
//     div.innerHTML = generateCountryCardHTML(country);
//     fragment.appendChild(div.firstElementChild);
//   });

//   countryCard.appendChild(fragment);
//   currentBatch++;
// }

// function generateCountryCardHTML({
//   name,
//   capital,
//   population,
//   languages,
//   currencies,
//   region,
//   flags,
// }) {
//   return;
//  ` <div
//     class="relative max-w-sm w-full  bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-4
//                 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:shadow-2xl card-container
//                 transform transition-all duration-500 ease-out
//                 hover:-translate-y-3 hover:scale-105 hover:border-white/20
//                 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none
//                 overflow-hidden group "
//   >
//     {/* <!-- Animated border glow effect --> */}
//     <div class="absolute -inset-px bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group"></div>

//     {/* <!-- Card content with higher z-index --> */}
//     <div class="relative z-10 space-y-4">
//       {/* <!-- Flag Section --> */}
//       <div
//         class="relative h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5
//                         shadow-lg shadow-black/20 child group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-300"
//       >
//         <img
//           src="${flags.svg}"
//           loading="lazy"
//           alt="flag"
//           class="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 ease-out
//                             group-hover:scale-110 group-hover:brightness-110"
//         />
//         {/* <!-- Flag overlay gradient --> */}
//         <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
//       </div>

//       {/* <!-- Country Name with gradient divider --> */}
//       <div class="text-center space-y-2">
//         <h2
//           class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300
//                            bg-clip-text text-transparent tracking-tight"
//         >
//           ${name.common}
//         </h2>
//         <div class="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
//       </div>

//       {/* <!-- Information Grid --> */}
//       <div class="space-y-3">
//         {/* <!-- Capital --> */}
//         <div
//           class="group/item bg-white/5 border border-white/10 rounded-xl p-2
//                             hover:bg-white/10 hover:border-purple-400/30 hover:translate-x-1
//                             transition-all duration-300 ease-out relative overflow-hidden
//                             shadow-sm hover:shadow-lg hover:shadow-purple-500/10"
//         >
//           <div
//             class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
//                                 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500"
//           ></div>
//           <div class="relative z-10">
//             <div class="flex items-center">
//               <div class="text-purple-400 text-xs font-semibold uppercase tracking-wider mr-2">
//                 Capital :
//               </div>
//               <div class="text-white/90 text-sm font-medium">${capital}</div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Population --> */}
//         <div
//           class="group/item bg-white/5 border border-white/10 rounded-xl p-3
//                             hover:bg-white/10 hover:border-purple-400/30 hover:translate-x-1
//                             transition-all duration-300 ease-out relative overflow-hidden
//                             shadow-sm hover:shadow-lg hover:shadow-purple-500/10"
//         >
//           <div
//             class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
//                                 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500"
//           ></div>
//           <div class="relative z-10">
//             <div class="flex items-center">
//               <div class="text-purple-400 text-xs font-semibold uppercase tracking-wider mr-2">
//                 Population :
//               </div>
//               <div class="text-white/90 text-sm font-medium">${population}</div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Language --> */}
//         <div
//           class="group/item bg-white/5 border border-white/10 rounded-xl p-3
//                             hover:bg-white/10 hover:border-purple-400/30 hover:translate-x-1
//                             transition-all duration-300 ease-out relative overflow-hidden
//                             shadow-sm hover:shadow-lg hover:shadow-purple-500/10"
//         >
//           <div
//             class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
//                                 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500"
//           ></div>
//           <div class="relative z-10">
//             <div class="flex items-center">
//               <div class="text-purple-400 text-xs font-semibold uppercase tracking-wider mr-2">
//                 Language :
//               </div>
//               <div class="text-white/90 text-sm font-medium">
//                 ${Object.values(languages).join(", ")}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Currency --> */}
//         <div
//           class="group/item bg-white/5 border border-white/10 rounded-xl p-3
//                             hover:bg-white/10 hover:border-purple-400/30 hover:translate-x-1
//                             transition-all duration-300 ease-out relative overflow-hidden
//                             shadow-sm hover:shadow-lg hover:shadow-purple-500/10"
//         >
//           <div
//             class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
//                                 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500"
//           ></div>
//           <div class="relative z-10">
//             <div class="flex items-center">
//               <div class="text-purple-400 text-xs font-semibold uppercase tracking-wider mr-2">
//                 Currency :
//               </div>
//               <div class="text-white/90 text-sm font-medium">
//                 ${Object.values(currencies)[0]?.name} ➡️ $
//                 {Object.values(currencies)[0]?.symbol}
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* <!-- Continent --> */}
//         <div
//           class="group/item bg-white/5 border border-white/10 rounded-xl p-3
//                             hover:bg-white/10 hover:border-purple-400/30 hover:translate-x-1
//                             transition-all duration-300 ease-out relative overflow-hidden
//                             shadow-sm hover:shadow-lg hover:shadow-purple-500/10"
//         >
//           <div
//             class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
//                                 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500"
//           ></div>
//           <div class="relative z-10">
//             <div class="flex items-center">
//               <div class="text-purple-400 text-xs font-semibold uppercase tracking-wider mr-2">
//                 Continent :
//               </div>
//               <div class="text-white/90 text-sm font-medium">${region}</div>
//             </div>
//           </div>
//         </div>
//       </div>

//       {/* <!-- Explore Button --> */}
//       <button
//         class="group/btn relative w-full py-3 px-6 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500
//                            rounded-2xl text-white text-sm font-semibold tracking-wide
//                            shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50
//                            transform transition-all duration-300 ease-out
//                            hover:-translate-y-1 hover:scale-[1.02]
//                            border border-white/10 hover:border-white/20
//                            overflow-hidden active:scale-95"
//       >
//         <div
//           class="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-500 to-emerald-500
//                             opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"
//         ></div>

//         <div class="relative z-10 flex items-center justify-center gap-2">
//           <span class="text-lg">🌍</span>
//           <span>Explore Details</span>
//           <span class="text-xs opacity-70 group-hover/btn:translate-x-1 transition-transform duration-200">
//             →
//           </span>
//         </div>

//         <div
//           class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
//                             translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"
//         ></div>
//       </button>
//     </div>
//   </div>`;
// }

// window.addEventListener("scroll", debounce(() => {
//   const { scrollTop, scrollHeight, clientHeight } = document.documentElement;
//   if (scrollTop + clientHeight >= scrollHeight - 200) {
//     if (currentBatch * batchSize < filteredCountries.length) {
//       renderBatch();
//     }
//   }
// }, 200));

// function debounce(fn, delay=200){
//     let timeout;
//     return(...args)=>{
//         clearTimeout(timeout)
//         clearTimeout(timeout)
//         timeout = setTimeout(() => {
//             fn(...args)
//         }, delay);
//     }
// }

// async function callback(){
//     try {
//     const response = await fetch(
//       "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,languages,currencies"
//     );

//     if (!response.ok)
//       throw new Error(`Failed Fetching Data: ${response.status}`);

//     const data = await response.json();

//     allCountries =data
//     filteredCountries =data
//     currentBatch = 0
//     renderBatch()
//     console.log(data);
//     }catch(err){
//         console.log("OOPS!! Error Occurred", err);
//     }
// }

// callback()
// async function call() {
//   try {
//     const response = await fetch(
//       "https://restcountries.com/v3.1/all?fields=name,capital,population,region,flags,languages,currencies"
//     );

//     if (!response.ok)
//       throw new Error(`Failed Fetching Data: ${response.status}`);

//     const data = await response.json();
//     console.log(data);
//     const countries = [];
//     data.forEach((country) => {
//       countries.push[country];
//       const {
//         name,
//         capital,
//         population,
//         languages,
//         currencies,
//         region,
//         flags,
//       } = country;
//       console.log(countries);

//       countryCard.innerHTML += `
//     <div class="relative max-w-sm w-full  bg-white/5 backdrop-blur-3xl border border-white/10 rounded-3xl p-4
//                 shadow-2xl shadow-purple-500/20 hover:shadow-purple-500/40 hover:shadow-2xl card-container
//                 transform transition-all duration-500 ease-out
//                 hover:-translate-y-3 hover:scale-105 hover:border-white/20
//                 before:absolute before:inset-0 before:rounded-3xl before:bg-gradient-to-br before:from-white/5 before:to-transparent before:pointer-events-none
//                 overflow-hidden group ">

//         <!-- Animated border glow effect -->
//         <div class="absolute -inset-px bg-gradient-to-r from-purple-500/50 via-pink-500/50 to-purple-500/50 rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 blur-sm group"></div>

//         <!-- Card content with higher z-index -->
//         <div class="relative z-10 space-y-4">

//             <!-- Flag Section -->
//             <div class="relative h-32 rounded-2xl overflow-hidden bg-gradient-to-br from-white/10 to-white/5
//                         shadow-lg shadow-black/20 child group-hover:shadow-xl group-hover:shadow-purple-500/20 transition-all duration-300">
//                 <img src="${flags.png}" alt="flag"
//                      class="w-full h-full object-cover rounded-2xl transform transition-transform duration-500 ease-out
//                             group-hover:scale-110 group-hover:brightness-110" />
//                 <!-- Flag overlay gradient -->
//                 <div class="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent rounded-2xl"></div>
//             </div>

//             <!-- Country Name with gradient divider -->
//             <div class="text-center space-y-2">
//                 <h2 class="text-2xl sm:text-3xl font-bold bg-gradient-to-r from-white via-gray-100 to-gray-300
//                            bg-clip-text text-transparent tracking-tight">
//                     ${name.common}
//                 </h2>
//                 <div class="h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
//             </div>

//             <!-- Information Grid -->
//             <div class="space-y-3">
//                 <!-- Capital -->
//                 <div class="group/item bg-white/5 border border-white/10 rounded-xl p-2
//                             hover:bg-white/10 hover:border-purple-400/30 hover:translate-x-1
//                             transition-all duration-300 ease-out relative overflow-hidden
//                             shadow-sm hover:shadow-lg hover:shadow-purple-500/10">
//                     <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
//                                 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500"></div>
//                     <div class="relative z-10">
//                        <div class="flex items-center">
//                         <div class="text-purple-400 text-xs font-semibold uppercase tracking-wider mr-2">Capital :</div>
//                         <div class="text-white/90 text-sm font-medium">${capital}</div>
//                        </div>
//                     </div>
//                 </div>

//                 <!-- Population -->
//                 <div class="group/item bg-white/5 border border-white/10 rounded-xl p-3
//                             hover:bg-white/10 hover:border-purple-400/30 hover:translate-x-1
//                             transition-all duration-300 ease-out relative overflow-hidden
//                             shadow-sm hover:shadow-lg hover:shadow-purple-500/10">
//                     <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
//                                 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500"></div>
//                     <div class="relative z-10">
//                         <div class="flex items-center">
//                         <div class="text-purple-400 text-xs font-semibold uppercase tracking-wider mr-2">Population :</div>
//                         <div class="text-white/90 text-sm font-medium">${population}</div>
//                         </div>
//                     </div>
//                 </div>

//                 <!-- Language -->
//                 <div class="group/item bg-white/5 border border-white/10 rounded-xl p-3
//                             hover:bg-white/10 hover:border-purple-400/30 hover:translate-x-1
//                             transition-all duration-300 ease-out relative overflow-hidden
//                             shadow-sm hover:shadow-lg hover:shadow-purple-500/10">
//                     <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
//                                 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500"></div>
//                     <div class="relative z-10">
//                         <div class="flex items-center">
//                         <div class="text-purple-400 text-xs font-semibold uppercase tracking-wider mr-2">Language :</div>
//                         <div class="text-white/90 text-sm font-medium">${Object.values(
//                           languages
//                         ).join(", ")}</div>
//                         </div>
//                     </div>
//                 </div>

//                 <!-- Currency -->
//                 <div class="group/item bg-white/5 border border-white/10 rounded-xl p-3
//                             hover:bg-white/10 hover:border-purple-400/30 hover:translate-x-1
//                             transition-all duration-300 ease-out relative overflow-hidden
//                             shadow-sm hover:shadow-lg hover:shadow-purple-500/10">
//                     <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
//                                 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500"></div>
//                     <div class="relative z-10">
//                         <div class="flex items-center">
//                         <div class="text-purple-400 text-xs font-semibold uppercase tracking-wider mr-2">Currency :</div>
//                         <div class="text-white/90 text-sm font-medium">${
//                           Object.values(currencies)[0]?.name
//                         } ➡️ ${Object.values(currencies)[0]?.symbol}

//                         </div>

//                         </div>
//                     </div>
//                 </div>

//                 <!-- Continent -->
//                 <div class="group/item bg-white/5 border border-white/10 rounded-xl p-3
//                             hover:bg-white/10 hover:border-purple-400/30 hover:translate-x-1
//                             transition-all duration-300 ease-out relative overflow-hidden
//                             shadow-sm hover:shadow-lg hover:shadow-purple-500/10">
//                     <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent
//                                 translate-x-[-100%] group-hover/item:translate-x-[100%] transition-transform duration-500"></div>
//                     <div class="relative z-10">
//                         <div class="flex items-center">
//                         <div class="text-purple-400 text-xs font-semibold uppercase tracking-wider mr-2">Continent :</div>
//                         <div class="text-white/90 text-sm font-medium">${region}</div>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <!-- Explore Button -->
//             <button class="group/btn relative w-full py-3 px-6 bg-gradient-to-r from-purple-500 via-purple-600 to-pink-500
//                            rounded-2xl text-white text-sm font-semibold tracking-wide
//                            shadow-lg shadow-purple-500/30 hover:shadow-xl hover:shadow-purple-500/50
//                            transform transition-all duration-300 ease-out
//                            hover:-translate-y-1 hover:scale-[1.02]
//                            border border-white/10 hover:border-white/20
//                            overflow-hidden active:scale-95">

//                 <!-- Button gradient overlay -->
//                 <div class="absolute inset-0 bg-gradient-to-r from-pink-500 via-orange-500 to-emerald-500
//                             opacity-0 group-hover/btn:opacity-100 transition-opacity duration-300"></div>

//                 <!-- Button content -->
//                 <div class="relative z-10 flex items-center justify-center gap-2">
//                     <span class="text-lg">🌍</span>
//                     <span>Explore Details</span>
//                     <span class="text-xs opacity-70 group-hover/btn:translate-x-1 transition-transform duration-200">→</span>
//                 </div>

//                 <!-- Button shine effect -->
//                 <div class="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent
//                             translate-x-[-100%] group-hover/btn:translate-x-[100%] transition-transform duration-500"></div>
//             </button>
//         </div>
//     </div>
// `;

//       inputSearch.addEventListener("input", (e) => {
//         const value = e.target.value.trim().toLowerCase();
//         console.log(value);
//       });
//     });
//   } catch (err) {
//     console.log("OOPS!! Error Occurred", err);
//   }
// }

// call();

// 🌍 WorldScope: Optimized with Infinite Scroll & Lazy Loading

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


call();
