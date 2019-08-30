var iceContainer = document.querySelector(".iceContainer");
var iceFlavor = document.querySelector(".iceFlavor");
var myFavorite = document.querySelector(".myFavorite");
var iceCreamBtn = document.querySelector(".iceCreamBtn")
// var

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
        myFavorite.innerHTML = userTemplate({ iceCreamChoice: iceCream });

        // return element.value;
    })

    function findTotal() {
        var ice = document.getElementById("iceCreamContainer").getElementsByClassName("");
        for (var i = 0; as[i]; i++)as[i].onclick = f;
        function f() {

        }
    }



}
iceCreamBtn.addEventListener("click", iceCreams);