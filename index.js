
let contents = []; 
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
      }
  ];
// +--------------------------------------------------------------------------------+
// +                                                                                +
// +                      DO NOT NEED TO CHANGE ANYTHING BELOW THIS                 +
// +                                                                                +
// +--------------------------------------------------------------------------------+

// Creates cards from the array above

cards.forEach((c) => {
    contents.push([
      <li class="card"> +
        <a href='${c.pageLink}'> +
        <img class="art-image" src='${c.imageLink}' alt='${c.artName}' /> +
        </a> +
        <div class="flex-content"> +
        <a href='${c.pageLink}'><h3 class="art-title">${c.artName}</h3></a> +
        <p class='author'><a href="${c.githubLink}" target="_blank"><i class="fab fa-github"></i> ${c.author}</a> </p> +
        </div> +
        </li>
    ]);
  });
  
  document.getElementById('cards').innerHTML = contents;