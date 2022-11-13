// JavaScript for tp9

// function to load a file from the URL "fromFile" into the object indentified by "whereTo"
function loadFileInto(recipeID, listName, whereTo) {

  // creating a new XMLHttpRequest object
  ajax = new XMLHttpRequest();
  
  fromFile = "recipes.php?recipeID=" + recipeID + "&recipeList=" + listName;
  
  console.log("From URL: " + fromFile);
  
  // defines the GET/POST method, source, and async value of the AJAX object
  ajax.open("GET", fromFile, true);

  // provides code to do something in response to the AJAX request
  ajax.onreadystatechange = function() { 
    if ((this.readyState == 4) && (this.status == 200)) {
      
      console.log("AJAX response: " + this.responseText);
      
      if (this.responseText !=0) {
        responseArray = JSON.parse(this.responseText);
        
        responseHTML = "";
        for (x = 0; x < responseArray.length; x++) {
          responseHTML += "<li>" + responseArray[x] + "</li>";
        }
        
        document.querySelector(whereTo).innerHTML = responseHTML;
        
      } else {
        console.log("Error: no recipe or list found.");
      }
      
      /* document.querySelector(whereTo).innerHTML = this.responseText; */
      
    } else if ((this.readyState == 4) && (this.status != 200)) {
      console.log("Error: " + this.responseText);
    }

  } // end ajax.onreadystatechange function

  // initiate request and wait for response
  ajax.send();

}

//new recipe object
function Recipe(recipeID, contributorName, imageURL) {
  
  this.recipeName = recipeName;
  this.contributor = contributorName;
  this.imageURL = imageURL;
  
  this.displayRecipe = function() {
    
    document.querySelector("#header h1").innerHTML = this.recipeName;
    document.querySelector("#contributor").innerHTML = this.contributor;
    document.querySelector("#header").style.backgroundImage = "url(" + this.imageURL + ")";
    
    loadFileInto(this.id, "ingredients", "#ingredients ul");
    loadFileInto(this.id, "equipment", "#equipment ul");
    loadFileInto(this.id, "directions", "#directions ol");
  }
 
}
  
  LemonPankoCrustedSalmon = new Recipe(
    "Lemon Panko Crusted Salmon", 
    "Samuel Tan", 
    "images/salmon.jpg", 
    "lemonPankoCrustedSalmon"
  );

  Tiramisu = new Recipe(
    "Classic Tiramisù", 
    "Alison Roman", 
    "https://static01.nyt.com/images/2017/04/05/dining/05COOKING-TIRAMISU1/05COOKING-TIRAMISU1-master768.jpg?w=1280&q=75", 
    "tiramisu"
  );

  Burger = new Recipe(
    "Smashed Avocado-Chicken Burgers", 
    "Yasmin Fahr", 
    "https://static01.nyt.com/images/2022/04/18/dining/yf-chicken-avocado-burgers/merlin_205536372_0d3102af-f082-4900-bfd2-176105d53a42-articleLarge.jpg?w=1280&q=75", 
    "burger"
  );
 
/* window.onload = function() {

  document.querySelector("#firstRecipe").onclick = function() {
    LemonPankoCrustedSalmon.displayRecipe();
  }
  document.querySelector("#secondRecipe").onclick = function() {
    Tiramisu.displayRecipe();
  }
  document.querySelector("#thirdRecipe").onclick = function() {
    Burger.displayRecipe();
  }

} */

// end window.onload