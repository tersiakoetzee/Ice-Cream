describe("Theice cream factory", function () {

    it("should return the total for the selected topping container and flavor", function () {
        var myIce = IceCreamFactory();

        myIce.mySelection("plain cone R10");
        myIce.mySelection("vanilla R10");
        myIce.mySelection("topping R8");
       

        assert.deepEqual("Container:R10.00", " Flavor:R10","topping:R8",  myIce.getIceCream())
    })
    });