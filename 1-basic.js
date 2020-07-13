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
    title: "map",
    website: "mapfolder/map.html",
    time: 2020,
    desc: `Map distance project, utilizing Leaflet, OpenStreetMap API`,
  },
  {
    id: 3,
    title: "submarine",
    website: "submarinefolder/submarine.html",
    time: 2019,
    desc: `Deliver the seaweed to the ship to win! HTML5 Canvas`,
  },
  {
    id: 4,
    title: "jungle",
    website: "junglefolder/jungle.html",
    time: 2019,
    desc: `Climb on vines to Tarzan swing to the otherside! HTML5 Canvas`,
  },
  {
    id: 5,
    title: "card",
    website: "cardfolder/card.html",
    time: 2019,
    desc: `Matching card game! HTML5 Canvas`,
  },
  {
    id: 6,
    title: "haunted",
    website: "hauntedfolder/haunted.html",
    time: 2019,
    desc: `Make it though the Haunted Castle! HTML5 Canvas`,
  },
  {
    id: 7,
    title: "snow",
    website: "snowfolder/snow.html",
    time: 2019,
    desc: `Make it though the snow storm! HTML5 Canvas`,
  },
  {
    id: 8,
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
    id: 9,
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
