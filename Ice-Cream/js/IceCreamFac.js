function IceCreamFactory(){
    var myIceCream = []

    function mySelection(container,flavor,topping){
    var iceCreamSelected = {container,flavor,topping}
    myIceCream.push(iceCreamSelected);
    }

    function getIceCream(){
        return myIceCream
    }
    function totalCost(){
        return myIceCream.values;
    }

   
    return{
        mySelection,
        getIceCream,
        totalCost
    
    }
}