<?

/* recipe loader for TP8-PHP */

$name = $_GET["recipeName"];

$list = $_GET["recipeList"];

if ($name == "Lemon Panko Crusted Salmon") {
  
  if ($list == "ingredients") {
    include "ingredients.html";
    
  } elseif ($list == "equipment") {
    include "equipment.html";
    
  } elseif ($list == "directions") {
    include "directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Tiramisu") {
  if ($list == "ingredients") {
    include "tiramisu-ingredients.html";
    
  } elseif ($list == "equipment") {
    include "tiramisu-equipment.html";
    
  } elseif ($list == "directions") {
    include "tiramisu-directions.html";
    
  } else {
    echo "1";
     
  }
  
} elseif ($name == "Burger") {
  if ($list == "ingredients") {
    include "burger-ingredients.html";
    
  } elseif ($list == "equipment") {
    include "burger-equipment.html";
    
  } elseif ($list == "directions") {
    include "burger-directions.html";
    
  } else {
    echo "1";
     
  }
  
} else {
  
  echo "0";
  
}