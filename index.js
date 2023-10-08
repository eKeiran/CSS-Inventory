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
      artName: "random",
      pageLink: "./Cards/Amey/1.html",
      imageLink: "./Cards/Abhay/amey.gif",
      author: "Amey",
      githubLink: 'https://github.com/amey'
    }

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
