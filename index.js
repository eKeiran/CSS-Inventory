let contents = '';
let cards = [

  //  Add your card in this section
  {
    artName: "Hack-o-ween",
    pageLink: "./Cards/Keera/my_animation.html",
    imageLink: "./Cards/Keera/keera.gif",
    author: "Harkeerat",
    githubLink: 'https://github.com/ekeiran'
  },

  {
    artName: "Sakura Magic",
    pageLink: "./Cards/Atharv/my_animation.html",
    imageLink: "./Cards/Atharv/atharv.gif",
    author: "Atharv",
    githubLink: 'https://github.com/vyasylum'
  },
  {
    artName: "Scrolling Animation",
    pageLink: "./Cards/Abhay/my_animation.html",
    imageLink: "./Cards/Abhay/abhay.gif",
    author: "Abhay",
    githubLink: 'https://github.com/abhaygzb15'
  },
  {
    artName: "Absolute Evil",
    pageLink: "./Cards/Mahati/my_animation.html",
    imageLink: "./Cards/Mahati/Mahati.gif",
    author: "Mahati",
    githubLink: 'https://github.com/Mahati-Kapuganty'
  },
  {
    artName: "Rotating Text",
    pageLink: "./Cards/urjabahad/my_animation.html",
    imageLink: "./Cards/urjabahad/urjabahad.gif",
    author: "Urja",
    githubLink: 'https://github.com/urjabahad'
  },

  {

    artName: "Perfect Cube Animation",
    pageLink: "./Cards/Keya/my_animation.html",
    imageLink: "./Cards/Keya/Keya.gif",
    author: "Keya",
    githubLink: 'https://github.com/keyakarkun'
  },
  {
    artName: "Snowy Forest",
    pageLink: "./Cards/Manav/my_animation.html",
    imageLink: "./Cards/Manav/manav.gif",
    author: "Manav Billimoria",
    githubLink: 'https://github.com/manavbillimoria'

  },
  {
    artName: "Ani Circle",
    pageLink: "./cards/Vaibhavi/animation.html",
    imageLink: "./Cards/Vaibhavi/vaibhavi.gif",
    author: "Vaibhavi Sapre",
    githubLink: 'https://github.com/vaibhavisapre'

  },
  {
    artName: "Matrix Effect",
    pageLink: "./Cards/Aman/my_animation.html",
    imageLink: "./Cards/Aman/matrix_effect.gif",
    author: "Aman Nadeem",
    githubLink: 'https://github.com/recdata'
  },
  {
    artName: "Beemer Drifting",
    pageLink: "./Cards/Varunraj/my_animation.html",
    imageLink: "./Cards/Varunraj/Varunraj.gif",
    author: "Varunraj",
    githubLink: 'https://github.com/FluKM'
  },
  {
    artName: "Air landing",
    pageLink: "./cards/Vidhan/my_animation.html",
    imageLink: "./Cards/Vidhan/Vidhan.gif",
    author: "Vidhan Poddar",
    githubLink: 'https://github.com/Gigamail'
  },

];



// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                      DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+


cards.forEach((c) => {
  contents += `
    <li class="card">
      <a href="${c.pageLink}">
        <img class="art-image" src="${c.imageLink}" alt="${c.artName}" />
      </a>
      <div class="flex-content">
        <a href="${c.pageLink}"><h3 class="art-title">${c.artName}</h3></a>
        <p class="author"><a href="${c.githubLink}" target="_blank"><i class="fab fa-github"></i> ${c.author}</a></p>
      </div>
    </li>`;
});

document.getElementById('cards').innerHTML = contents;
