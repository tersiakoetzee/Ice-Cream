describe("Theice cream factory", function () {

    it("should return the total for the selected topping container and flavor", function () {
        var myIce = IceCreamFactory();

        myIce.mySelection("toppings", 10);
        myIce.mySelection("flavor", 8);
        myIce.mySelection("container", 15);
       

        assert.deepEqual([], myIce.getIceCream())
    })
    });