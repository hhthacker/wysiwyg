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
var bioString = "";
for (var i = 0; i < myPeople.length; i++) {
    bioString += `<div class="cardstyle editable"><header class="child"><h1 class="grandchild">${myPeople[i].title}</h1><br>`
    bioString += `<h3 class="grandchild">${myPeople[i].name}</h3></header><br>`
    bioString += `<section class="child"><p class="grandchild">${myPeople[i].bio}</p><br>`
    bioString += `<img class="portraits grandchild" src="${myPeople[i].image}"></section><br>`
    bioString += `<footer class="child"><h6 class="grandchild">Lived from ${myPeople[i].lifespan.birth} <br> to ${myPeople[i].lifespan.death}</h6></footer>`
    bioString += `</div>`
};
   peopleBox.innerHTML = bioString;

//logic for text box

var editBox = document.getElementById("inputbox");
var selectedBio;

peopleBox.addEventListener("click", function(event) {
  var peopleClasses = document.getElementsByClassName("cardstyle");
  for (var x = 0; x < myPeople.length; x++) {
    peopleClasses[x].classList.remove("dottedBorder");
  };
  if (event.target.classList.contains("editable")) {
    editBox.focus();
    console.log("event", event);
    selectedBio = event.target.childNodes[2].childNodes[0];
    event.target.classList.add("dottedBorder"); }
    else if (event.target.classList.contains("grandchild")) {
      editBox.focus();
      selectedBio = event.target.parentNode.parentNode.childNodes[2].childNodes[0];
      event.target.parentNode.parentNode.classList.add("dottedBorder");
    } else if (event.target.classList.contains("child")) {
      editBox.focus();
      selectedBio = event.target.parentNode.childNodes[2].childNodes[0];
      event.target.parentNode.classList.add("dottedBorder");
    };
    editBox.value = selectedBio.innerHTML;
    editBox.addEventListener("keyup", function(){
      editBox.onkeydown = function (){
        if (window.event.keyCode === 13) {
          editBox.value = "";
        } else {
          selectedBio.innerHTML = editBox.value;
        };
      };
    });
});














