describe('Triangle', function() {
  describe('isTriangleValid', function() {
    it("returns true if the base + the side of a triangle are greater than the hypoteneuse of that triangle", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.base = 3;
      testTriangle.side = 3;  
      testTriangle.hypo = 5;
      testTriangle.isTriangleValid().should.equal(true);
    });

    it("returns true if the side + the hypoteneuse of a triangle are greater than the base of that triangle", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.base = 5;
      testTriangle.side = 3;  
      testTriangle.hypo = 3;
      testTriangle.isTriangleValid().should.equal(true);
    });

    it("returns true if the base + the hypoteneuse of a triangle are greater than the side of that triangle", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.base = 3;
      testTriangle.side = 5;  
      testTriangle.hypo = 3;
      testTriangle.isTriangleValid().should.equal(true);
    });

    it("returns false if none of the above are met", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.base = 12;
      testTriangle.side = 1;  
      testTriangle.hypo = 2;
      testTriangle.isTriangleValid().should.equal(false);
    });


  });

  describe('triangleType', function() {
    it("returns the type of a triangle given the length of the sides", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.base = 3;
      testTriangle.side = 5;  
      testTriangle.hypo = 5;
      testTriangle.triangleType().should.equal("Isosceles");
    });

    it("returns equilateral if all sides of a given triangle are equal", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.base = 5;
      testTriangle.side = 5;  
      testTriangle.hypo = 5;
      testTriangle.triangleType().should.equal("Equilateral");
    });

    it("returns isosceles if two sides of a given triangle are equal", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.base = 3;
      testTriangle.side = 5;  
      testTriangle.hypo = 5;
      testTriangle.triangleType().should.equal("Isosceles");
    });

    it ("returns scalene if no sides of a given triangle are equal", function() {
      var testTriangle = Object.create(Triangle);
      testTriangle.base = 3;
      testTriangle.side = 5;  
      testTriangle.hypo = 4;
      testTriangle.triangleType().should.equal("Scalene");
    });
  });
});
