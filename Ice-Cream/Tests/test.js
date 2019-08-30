describe("Theice cream factory", function () {

    it("should return the total for the selected topping container and flavor", function () {
        var myIce = IceCreamFactory();

        myIce.mySelection();
        myIce.mySelection();
        myIce.mySelection();
       

        assert.deepEqual(  myIce.getIceCream())
    })
    });