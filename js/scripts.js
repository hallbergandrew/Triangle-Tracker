var Triangle = {
  isTriangleValid: function(){
    if(this.side + this.base > this.hypo && this.base + this.hypo > this.side && this.side + this.hypo > this.base) {
      return true;
    } else {
      return false;
    }
  },

  triangleType: function() {
    if(this.side === this.hypo && this.hypo === this.base){
      return "Equilateral";
    } else if(this.side === this.hypo || this.hypo == this.base || this.base === this.side) {
      return "Isosceles";
    } else {
      return "Scalene"
    }
  }
}

$(document).ready(function () {
  $("form#new-triangle").submit(function(event) {
    event.preventDefault();

    var inputtedBase = parseInt($("input#new-base").val());
    var inputtedSide = parseInt($("input#new-side").val());
    var inputtedHypo = parseInt($("input#new-hypo").val());

    var newTriangle = Object.create(Triangle);
    newTriangle.base = inputtedBase;
    newTriangle.side = inputtedSide;
    newTriangle.hypo = inputtedHypo;
    var triangleOutput = newTriangle.base  + "," + newTriangle.side + "," + newTriangle.hypo;

    if(newTriangle.isTriangleValid() === false) {
      alert("Invalid triangle.")
    } else if(newTriangle.triangleType() === "Equilateral") {
      $("ul#equilateral").append("<li><span class='triangle'>" + triangleOutput + "</span></li>");
    } else if(newTriangle.triangleType() === "Isosceles") {
      $("ul#isosceles").append("<li><span class='triangle'>" + triangleOutput + "</span></li>");
    } else { $("ul#scalene").append("<li><span class='triangle'>" + triangleOutput + "</span></li>");
    } 

      this.reset();
  })
});
