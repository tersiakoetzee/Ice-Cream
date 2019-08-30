function IceCreamFactory() {
    var myIceCream = []

    function mySelection(container, flavor, topping) {
      const  price = Number(container)+ Number(flavor)+ Number(topping);
        
        var iceCreamSelected = { container, flavor, topping, price }
        myIceCream.push(iceCreamSelected);
    }

    function getIceCream() {
        return myIceCream
    }
  


    return {
        mySelection,
        getIceCream,
    

    }
}