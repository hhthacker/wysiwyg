//Array of People

var myPeople = [{
  title: "Post-Impressionist <br> Painter",
  name: "Vincent Van Gogh",
  bio: "he could hear the mice's teeth gnawing",
  image: "https://artimedes.com/wp-content/uploads/2016/08/Vincent-van-Gogh-Zelfportret-2-8.jpg",
  lifespan: {
    birth: "March 30, 1853",
    death: "July 29, 1890"
  }
},
{
  title: "Surrealist Artist",
  name: "Salvador Dali",
  bio: "He made clocks melt & elephants stand tall... and sculpted with tiny ants.",
  image: "http://www.dalipaintings.com/images/salvador-dali.jpg",
  lifespan: {
    birth: "May 11, 1904" ,
    death: "January 23, 1989"
  }
},
{
  title: "Self-portraitist",
  name: "Frida Kahlo",
  bio: "She is beauty, she is pain, she is both at once.",
  image: "http://68.media.tumblr.com/39b5041bf8d7335dfb8e51b76a02b02d/tumblr_inline_o8dnfpkjP81t6go4j_400.jpg",
  lifespan: {
    birth: "July 6, 1907",
    death: "July 13, 1954"
  }
},
{
  title: "Pop Artist",
  name: "Andy Warhol",
  bio: "He liked tomato soup with bananas.",
  image: "https://hamlethamster.files.wordpress.com/2011/08/83-year-old-andy-warhol.jpg",
  lifespan: {
    birth: "August 6, 1928",
    death: "February 22, 1987"
  }
},
{
  title: "Contemporary <br> Artist",
  name: "Jean-Michel Basquiat",
  bio: "Born in Brooklyn with Haitian and Puerto Rican parents.",
  image: "http://media.gettyimages.com/photos/american-artist-jeanmichel-basquiat-new-york-1985-picture-id500931899?s=594x594",
  lifespan: {
    birth: "December 22, 1960",
    death: "August 12, 1988"
  }
},
{
  title: "Modernist Artist",
  name: "Georgia O'Keeffe",
  bio: "She painted big flowers!",
  image: "https://upload.wikimedia.org/wikipedia/commons/thumb/1/11/Georgia_O'Keeffe.jpg/210px-Georgia_O'Keeffe.jpg",
  lifespan: {
    birth: "November 15, 1887",
    death: "March 6, 1986"
  }
}]

//Loop for writing card content to DOM

var peopleBox = document.getElementById("peopleContainer");

for (var i = 0; i < myPeople.length; i++) {
  var bioString;
    bioString += `<div class="cardstyle"><h1>${myPeople[i].title}</h1><br>`
    bioString += `<h3>${myPeople[i].name}</h3><br>`
    bioString += `<p>${myPeople[i].bio}</p><br>`
    bioString += `<img class="portraits" src="${myPeople[i].image}"><br>`
    bioString += `<h6>Lived from ${myPeople[i].lifespan.birth} <br> to ${myPeople[i].lifespan.death}</h6>`
    bioString += `</div>`
};
   peopleBox.innerHTML = bioString;


console.log("my peope", myPeople);















