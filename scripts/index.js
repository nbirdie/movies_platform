$(document).ready(function () {
  $(".slider").slick({
    dots: true,
    speed: 1000,
    infinite: true,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnFocus: false,
  });
});



// render cards
//cards for rendering
const initialCards = [
  {
    link: "./images/loki.svg",
    title: "Loki",
    episode: "6 Ep",
    category: "Superhero",
  },
  {
    link: "./images/ricky.svg",
    title: "Rick and Morty",
    episode: "46 Ep",
    category: "Fantasy",
  },
  {
    link: "./images/chernobyl.svg",
    title: "Chernobyl",
    episode: "5 Ep",
    category: "Mini series",
  },
];

const itemTemplate = document.querySelector(".gallery__template").content;
const elList = document.querySelector(".gallery__list");

function createCard(link, title, episode, category) {
  const cardElement = itemTemplate.cloneNode(true);
  cardElement.querySelector(".gallery__title").innerText = title;
  cardElement.querySelector(".gallery__picture").src = link;
  cardElement.querySelector(".gallery__picture").alt = title;
  cardElement.querySelector(".gallery__episode").innerText = episode;
  cardElement.querySelector(".gallery__category").innerText = category;
  return cardElement;
}

function renderItem(link, title, episode, category) {
  const newElement = createCard(link, title, episode, category);
  elList.append(newElement);
}

initialCards.forEach((item) => {
  renderItem(item.link, item.title, item.episode, item.category);
});


$(document).ready(function() {
    $(".slider-continue").slick({
        
    })
})

$(document).ready(function() {
    $(".slider-top-rated").slick({
        
    })
})

$(document).ready(function() {
    $(".slider-genres").slick({
        rows: 2,
        
    })
})
