describe('Package', function() {
  describe('shippingCost', function() {
   it("displays the continental US shipping cost of a package", function(){
    var testPackage = Object.create(Package);
    testPackage.originZIP = 20850;
    testPackage.destinationZIP = 98604;
    testPackage.shippingCost().should.equal(10);
   });

   it("displays the shipping cost to Hawaii, Alaska, or pernicious foreign lands", function(){
    var testPackage = Object.create(Package);
    testPackage.originZIP = 20850;
    testPackage.destinationZIP = 99705;
    testPackage.shippingCost().should.equal(20);
   });
  });

  describe('weightCost', function() {
    it("does not add a surcharge for a weight up to 1 pound", function(){
      var testPackage = Object.create(Package);
      testPackage.weight = 0.9;
      testPackage.destinationZIP = 98108
      testPackage.weightCost().should.equal(10);
   });

   it("includes a surcharge equal to weight times 2.2 for weight between 1 and 50 pounds", function(){
      var testPackage = Object.create(Package);
      testPackage.weight = 24;
      testPackage.destinationZIP = 98108
      testPackage.weightCost().should.equal(62);
  });

   it("includes a surcharge equal to weight times 8.8 plus 200 for weight over 50 pounds", function(){
    var testPackage = Object.create(Package);
    testPackage.weight = 55;
    testPackage.destinationZIP = 98108
    testPackage.weightCost().should.equal(694);
   });
  });

  describe('expressCost', function() {
    it("adds a hundred and fifty dollar surcharge for express shipping", function(){
      var testPackage = Object.create(Package);
      testPackage.weight = 0.9;
      testPackage.destinationZIP = 98108;
      testPackage.express = true;
      testPackage.expressCost().should.equal(160);
   });

    it("does not add the express surcharge inappropriately", function(){
      var testPackage = Object.create(Package);
      testPackage.weight = 0.9;
      testPackage.destinationZIP = 98108;
      testPackage.express = false;
      testPackage.expressCost().should.equal(10);
   });
  });
  describe('insuranceCost', function() {
    it("add an insurance cost of 50 if the order expresses wants insurance", function(){
      var testPackage = Object.create(Package);
      testPackage.weight = 0.9;
      testPackage.destinationZIP = 98108;
      testPackage.express = true;
      testPackage.insurance = true;
      testPackage.insuranceCost().should.equal(210);
   });

    it("Does not add an insurance cost of 50 if the order doesn't want insurance", function(){
      var testPackage = Object.create(Package);
      testPackage.weight = 0.9;
      testPackage.destinationZIP = 98108;
      testPackage.express = true;
      testPackage.insurance = false;
      testPackage.insuranceCost().should.equal(160);
   });
  });  
});
    
    //   it("doubles the price if the ZIP code is international or to AK or HI")
    //     testPackage.shippingCost().should.equal(20);
    // });

// originZIP
// destinationZIP
// timeframe
// weight
