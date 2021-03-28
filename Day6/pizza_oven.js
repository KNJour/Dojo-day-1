function randomPizza() {
var toppingsArr = [];
var randomCrust;
var cheeseArr = [];
var randomSauce;
var randomSauce = Math.floor(Math.random() * 3);
if (randomSauce == 0) {
    var randomSauce = "Traditional";
} else if (randomSauce == 1) { 
    var randomSauce = "extra sauce" }
    else { var randomSauce = "BBQ Sauce"
}

var randomCrust = Math.floor(Math.random() * 3);
if (randomCrust == 0) {
    var randomCrust = "Hand Tossed";
} else if (randomCrust == 1) { 
    var randomCrust = "Deep Dish" }
    else { var randomCrust = "Thin Crust"}

// start of cheese
    for (var i = 0; i < 4; i++) {
        cheeseArr.push(Math.floor(Math.random() * 3))
    }

    for (var g = 0; g < 4; g++) {
        if (cheeseArr[g] == 0) {
            cheeseArr[g] = "Mozzarella";
        }
        else if (cheeseArr[g] == 1) {
            cheeseArr[g] ="Cheddar";
        }
        else if (cheeseArr[g] == 2) {
                cheeseArr[g] = "Provolone";
    }
        else { cheeseArr.pop(cheeseArr[g])} 
// start of toppings
        var toppingsArr = [];
        for (var i = 0; i < 4; i++) {
            toppingsArr.push(Math.floor(Math.random() * 9))
        }
    
        for (var x = 0; x < 9; x++) {
            if (toppingsArr[x] == 0) {
                toppingsArr[x] = "Pepperoni";
            }
            else if (toppingsArr[x] == 1) {
                toppingsArr[x] ="Sausage";
            }
            else if (toppingsArr[x] == 2) {
                    toppingsArr[x] = "Bell Peppers";
            }
            else if (toppingsArr[x] == 3) {
                    toppingsArr[x] = "Spinach";
            }
            else if (toppingsArr[x] == 4) {
                    toppingsArr[x] = "Pinneapple";
            }
            else if (toppingsArr[x] == 5) {
                    toppingsArr[x] = "Bacon";
            }
            else if (toppingsArr[x] == 6) {
                    toppingsArr[x] = "Onions";
            }
            else if (toppingsArr[x] == 7) {
                    toppingsArr[x] = "Mushrooms";
            }
            else { toppingsArr.pop(toppingsArr[x])} 

            var random = {
                crust: rcrust,
                sauce: rsauce,
                cheese: [cheeseArr],
                toppings: [toppingsArr]
            };
    return random;

        }

function pizzaOven(crustType, sauceType, cheeses, toppings) {
    var pizza = {
    crust: randomCrust,
    sauce: randomSauce,
    cheese: [cheeseArr],
    toppings: [toppingsArr]
    };
    return pizza;
}
var myPizza = pizzaOven(randomPizza())
console.log(myPizza);

