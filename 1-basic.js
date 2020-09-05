const menu = [
  {
    id: 1,
    title: "tictactoe",
    website: "https://github.com/spenstock/tictactoe",
    time: 2020,
    desc: `Google Chrome Web Extention, Popup in Browser, Javascript`,
  },
  {
    id: 2,
    title: "Pokemon TSP",
    website: "archive/honor.html",
    time: 2020,
    desc: `EECS 281 Project 4: C++ Application of Branch and Bound for TSP, Graph Algorithms: Dijkstra's algorithm, Prim's, Kruskal's`,
  },
  {
    id: 3,
    title: "Database Hash Table",
    website: "archive/honor.html",
    time: 2020,
    desc: `EECS 281 Project 3: C++ Use of hashtables, deques, vectors`,
  },
  {
    id: 4,
    title: "Zombie Priority Queue",
    website: "archive/honor.html",
    time: 2020,
    desc: `EECS 281 Project 2: C++ Application of Priority Queue`,
  },
  {
    id: 5,
    title: "Pirate Breath and Depth First Search",
    website: "archive/honor.html",
    time: 2020,
    desc: `EECS 281 Project 1: C++ Application of Breath and Depth First Search to find Treasure`,
  },
  {
    id: 6,
    title: "map",
    website: "mapfolder/map.html",
    time: 2020,
    desc: `Map distance project, utilizing Leaflet, OpenStreetMap API`,
  },
  {
    id: 7,
    title: "submarine",
    website: "submarinefolder/submarine.html",
    time: 2019,
    desc: `Deliver the seaweed to the ship to win! HTML5 Canvas`,
  },
  {
    id: 8,
    title: "jungle",
    website: "junglefolder/jungle.html",
    time: 2019,
    desc: `Climb on vines to Tarzan swing to the otherside! HTML5 Canvas`,
  },
  {
    id: 9,
    title: "card",
    website: "cardfolder/card.html",
    time: 2019,
    desc: `Matching card game! HTML5 Canvas`,
  },
  {
    id: 10,
    title: "haunted",
    website: "hauntedfolder/haunted.html",
    time: 2019,
    desc: `Make it though the Haunted Castle! HTML5 Canvas`,
  },
  {
    id: 11,
    title: "snow",
    website: "snowfolder/snow.html",
    time: 2019,
    desc: `Make it though the snow storm! HTML5 Canvas`,
  },
  {
    id: 12,
    title: "desert",
    website: "desertfolder/desert.html",
    time: 2019,
    desc: `Make it though the desert! (basic) HTML5 Canvas`,
  },
  // {
  //   id: 7,
  //   title: "tower",
  //   time: 2019,
  //   img: "./images/item-1.jpeg",
  //   desc: ``,
  // },
  // {
  //   id: 8,
  //   title: "race",
  //   time: 2019,
  //   img: "./images/item-1.jpeg",
  //   desc: ``,
  // },
  // {
  //   id: 9,
  //   title: "linerider",
  //   time: 2019,
  //   img: "./images/item-1.jpeg",
  //   desc: ``,
  // },
  // {
  //   id: 10,
  //   title: "tycoon",
  //   time: 2019,
  //   img: "./images/item-1.jpeg",
  //   desc: ``,
  // },
  {
    id: 13,
    title: "lava",
    website: "lavafolder/lava.html",
    time: 2019,
    desc: `Make it though the lava jump game! HTML5 Canvas`,
  },

];

const sectionCenter = document.querySelector(".section-center");

window.addEventListener("DOMContentLoaded", function () {
  let displayMenu = menu.map(function (item) {
    // console.log(item);

    return `<article class="menu-item">
          <a href="${item.website}" target="_blank">
          <img src="./images/${item.title}.JPG" alt=${item.title} class="photo" />
          </a>
          <div class="item-info">
              <h4>${item.title}</h4>
              <h4 class="price">${item.time}</h4>
            <p class="item-text">
              ${item.desc}
            </p>
          </div>
        </article>`;
  });
  displayMenu = displayMenu.join("");
  console.log(displayMenu);

  sectionCenter.innerHTML = displayMenu;
});
