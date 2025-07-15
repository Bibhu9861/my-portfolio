var mealCost = 0;
var adonCost = 0;

function OrderClick(){
    var mealName="", adonName="";
    document.getElementById("lblCustomer").textContent = document.getElementById("txtName").value;
    document.getElementById("lblMobile").textContent = document.getElementById("txtMobile").value;

    // Radio Buttons
    var optBurger = document.getElementById("optBurger");
    var optRoller = document.getElementById("optRoller");

    var imgMeal = document.getElementById("imgMeal");

    if(optBurger.checked) {
        mealName = optBurger.value;
        mealCost = 120;
        imgMeal.src = "../public/images/omg1.PNG";
    }

    if(optRoller.checked) {
        mealName = optRoller.value;
        mealCost = 100;
        imgMeal.src = "../public/images/omg2.PNG";
    }

    // Checkboxes

    var optKrusher = document.getElementById("optKrusher");
    var optWings = document.getElementById("optWings");

    if(optKrusher.checked) {
        adonName += optKrusher.value + "<br>";
        adonCost = 40;
        mealCost += adonCost;
    }

    if(optWings.checked){
        adonName += optWings.value + "<br>";
        adonCost = 60;
        mealCost += adonCost;
    }

    document.getElementById("lblMeal").innerHTML = mealName;
    document.getElementById("lblAdon").innerHTML = adonName;
    document.getElementById("lblTotal").innerHTML = mealCost;

}
