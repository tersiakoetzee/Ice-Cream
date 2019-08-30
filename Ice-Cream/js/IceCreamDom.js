var iceContainer = document.querySelector(".iceContainer");
var iceFlavor = document.querySelector(".iceFlavor");
var Total = document.querySelector(".Total");
var iceCreamBtn = document.querySelector(".iceCreamBtn")

var myCream = IceCreamFactory();

const tempsource = document.querySelector(".iceCream").innerHTML;
const userTemplate = Handlebars.compile(tempsource);

function iceCreams() {
    var toppingsElem = document.querySelectorAll(".toppings:checked");
    toppingsElem.forEach(function (selectedTopping) {
        

        var selectedContainer = iceContainer.value;
        var selectedFlavor = iceFlavor.value;
    
        myCream.mySelection(selectedContainer, selectedFlavor, selectedTopping.value)
    
        var iceCream = myCream.getIceCream();
        Total.innerHTML = myCream.totalCost();
        Total.innerHTML = userTemplate({ iceCreamChoice: iceCream });

        // return element.value;
    })

  

}
iceCreamBtn.addEventListener("click", iceCreams);